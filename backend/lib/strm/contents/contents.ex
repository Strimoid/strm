defmodule Strm.Contents do
  import Ecto.Query
  import Strm.Common.Query

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

  def list_contents(group \\ nil, cursor \\ nil) do
    Content
      |> filter_by_group(group)
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
end
