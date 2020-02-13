defmodule StrmWeb.Resolvers.Contents do

  def find_content(_parent, %{id: id}, _resolution) do
    {:ok, Strm.Contents.find_content(id)}
  end

  def list_contents(_parent, args, _resolution) do
    {:ok, Strm.Contents.list_contents(args[:cursor])}
  end

end
