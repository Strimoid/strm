defmodule StrmWeb.Resolvers.Contents do

  def find_content(_parent, %{id: id}, _resolution) do
    {:ok, Strm.Contents.find_content(id)}
  end

  def list_contents(%Strm.Groups.Group{} = group, args, _resolution) do
    IO.inspect group
    {:ok, Strm.Contents.list_contents(group.id, args[:cursor])}
  end

  def list_contents(_parent, args, _resolution) do
    {:ok, Strm.Contents.list_contents(nil, args[:cursor])}
  end

end
