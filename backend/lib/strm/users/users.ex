defmodule Strm.Users do
  import Ecto.Query

  alias Strm.{Repo, Users}

  def get_user(id) do
    Users.User |> Repo.get!(id)
  end
end
