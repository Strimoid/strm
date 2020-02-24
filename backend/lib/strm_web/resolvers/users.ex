defmodule StrmWeb.Resolvers.Users do

  def get_me(_parent, _args, %{context: %{current_user: current_user}}) do
    {:ok, current_user}
  end
  def get_me(_parent, _args, _context) do
    {:ok, %Strm.Users.User{}}
  end

end
