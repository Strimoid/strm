defmodule Strm.Groups do
  import Ecto.Query

  alias Strm.Repo
  alias Strm.Groups.Group

  def find_group(id) do
    Group |> Repo.get_by(urlname: id)
  end

  def list_groups do
    Group
      |> limit(10)
      |> Repo.all()
  end
end
