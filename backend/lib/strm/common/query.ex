defmodule Strm.Common.Query do
  import Ecto.Query

  def filter_by_group(query, group) do
    case group do
      nil   -> query
      "all" -> query
      group -> query |> where([x], x.group_id == ^group)
    end
  end

  def paginate(query, cursor) do
    case cursor do
      nil    -> query
      cursor -> query |> older_than(cursor)
    end
  end

  def older_than(query, cursor) do
    {:ok, date} = cursor |> NaiveDateTime.from_iso8601
    {:ok, date} = date |> DateTime.from_naive("Etc/UTC")
    query |> where([c], c.created_at < ^date)
  end

  def without_private(query) do
    query
    |> join(:left, [x], g in assoc(x, :group))
    |> where([x, g], g.type == "public")
  end
end
