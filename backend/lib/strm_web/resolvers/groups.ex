defmodule StrmWeb.Resolvers.Groups do

  def find_group(_parent, %{id: id}, _resolution) do
    {:ok, Strm.Groups.find_group(id)}
  end

  @spec list_groups(any, any, any) :: {:ok, any}
  def list_groups(_parent, _args, _resolution) do
    {:ok, Strm.Groups.list_groups()}
  end

end
