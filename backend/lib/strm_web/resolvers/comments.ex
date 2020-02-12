defmodule StrmWeb.Resolvers.Comments do

  def list_comments(_parent, _args, _resolution) do
    {:ok, Strm.Contents.list_comments()}
  end

end
