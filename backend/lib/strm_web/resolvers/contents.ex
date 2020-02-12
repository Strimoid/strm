defmodule StrmWeb.Resolvers.Contents do

  def find_content(_parent, %{id: id}, _resolution) do
    {:ok, Strm.Contents.find_content(id)}
  end

  @spec list_contents(any, any, any) :: {:ok, any}
  def list_contents(_parent, _args, _resolution) do
    {:ok, Strm.Contents.list_contents()}
  end

end
