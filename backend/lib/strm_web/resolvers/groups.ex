defmodule StrmWeb.Resolvers.Groups do

  def find_group(_parent, %{id: id}, _resolution) do
    {:ok, Strm.Groups.find_group(id)}
  end

  def list_groups(_parent, args, _resolution) do
    {:ok, Strm.Groups.list_groups(args[:cursor])}
  end

  def list_popular_groups(_parent, _args, _resolution) do
    {:ok, Strm.Groups.list_popular_groups()}
  end

end
