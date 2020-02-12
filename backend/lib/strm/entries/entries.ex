defmodule Strm.Entries do
  import Ecto.Query

  alias Strm.Repo
  alias Strm.Entries.Entry

  def find_entry(id) do
    Entry |> Repo.get(id)
  end

  def list_entries(cursor \\ nil) do
    Entry
      |> limit(10)
      |> order_by([desc: :created_at])
      |> without_private()
      |> paginate(cursor)
      |> Repo.all()
      |> Repo.preload([replies: [:user], group: [], user: []])
  end

  def create_entry(user, group, args) do
    %Entry{user: user, group: group, text_source: args[:text]}
      |> Entry.changeset(args)
      |> Repo.insert
  end

  defp without_private(query) do
    query
    |> join(:left, [e], g in assoc(e, :group))
    |> where([e, g], g.type == "public")
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
    query |> where([e], e.created_at < ^date)
  end

end
