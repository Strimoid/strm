defmodule Strm.Users do
  import Ecto.Query

  alias Strm.{Repo, Users}

  def get_user(id) do
    Users.User
      |> Repo.get!(id)
      |> Repo.preload([notifications: notifications_query()])
  end

  defp notifications_query() do
    from n in Users.Notification,
      order_by: [desc: n.created_at],
      limit: 10,
      preload: [:user]
  end
end
