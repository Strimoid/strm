defmodule Strm.Groups do
  import Ecto.Query
  import Strm.Common.Query

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
      |> limit(30)
      |> order_by([desc: :created_at])
      |> paginate(cursor)
      |> Repo.all()
      |> Repo.preload([:creator])
  end

  def list_popular_groups() do
    Group
      |> limit(100)
      |> order_by([desc: :subscribers_count])
      |> Repo.all()
  end
end
