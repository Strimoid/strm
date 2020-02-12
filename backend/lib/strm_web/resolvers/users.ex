defmodule StrmWeb.Resolvers.Users do

  @spec get_user(any, any, any) :: {:ok, any}
  def get_user(_parent, _args, %{context: %{current_user: current_user}}) do
    {:ok, current_user}
  end

end
