defmodule Strm.Groups do
  import Ecto.Query

  alias Strm.Repo
  alias Strm.Groups.Group

  def find_group(id) do
    case id do
      "all" -> Strm.Groups.Predefined.All
      id    -> Group |> Repo.get_by(urlname: id)
    end
  end

  def list_groups(cursor \\ nil) do
    Group
      |> limit(10)
      |> order_by([desc: :created_at])
      |> paginate(cursor)
      |> Repo.all()
      |> Repo.preload([:creator])
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
