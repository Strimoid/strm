defmodule StrmWeb.Resolvers.Users do

  def get_user(_parent, _args, %{context: %{current_user: current_user}}) do
    {:ok, current_user}
  end
  def get_user(_parent, _args, _context) do
    {:ok, {}}
  end

end
