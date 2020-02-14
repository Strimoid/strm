defmodule Strm.Contents do
  import Ecto.Query

  alias Strm.Repo
  alias Strm.Contents.Content
  alias Strm.Contents.Comment
  alias Strm.Contents.CommentReply

  def find_content(id) do
    replies_query = from r in CommentReply,
      order_by: r.created_at,
      preload: [:user]

    comments_query = from c in Comment,
      order_by: c.created_at,
      preload: [replies: ^replies_query, user: []]

    Content
      |> Repo.get(id)
      |> Repo.preload([comments: comments_query, group: [], user: []])
  end

  def list_contents(cursor \\ nil) do
    Content
      |> limit(10)
      |> order_by([desc: :created_at])
      |> paginate(cursor)
      |> Repo.all()
      |> Repo.preload([:group, :user])
  end

  def list_comments do
    Comment
      |> limit(10)
      |> Repo.all()
      |> Repo.preload([:group, :user])
  end

  defp paginate(query, cursor) do
    case cursor do
      nil    -> query
      cursor -> query |> older_than(cursor)
    end
  end

  defp older_than(query, cursor) do
    {:ok, date} = cursor |> NaiveDateTime.from_iso8601
    {:ok, date} = date |> DateTime.from_naive("Etc/UTC")
    query |> where([c], c.created_at < ^date)
  end
end
