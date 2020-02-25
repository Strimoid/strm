defmodule StrmWeb.Resolvers.Users do
  alias Strm.Repo

  def get_me(_parent, _args, %{context: %{current_user: current_user}}) do
    user = current_user
      |> Repo.preload([:blocked_groups, :subscribed_groups, :blocked_users, :followed_users])

    {:ok, user}
  end
  def get_me(_parent, _args, _context) do
    {:ok, %Strm.Users.User{}}
  end

end
