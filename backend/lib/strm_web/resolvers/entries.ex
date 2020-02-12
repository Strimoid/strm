defmodule StrmWeb.Resolvers.Entries do

  def find_entry(_parent, %{id: id}, _resolution) do
    {:ok, Strm.Entries.find_entry(id)}
  end

  @spec list_entries(any, any, any) :: {:ok, any}
  def list_entries(_parent, args, _resolution) do
    {:ok, Strm.Entries.list_entries(args[:cursor])}
  end

  def create_entry(_parent, args, %{context: %{current_user: user}}) do
    group = Strm.Groups.get_group_by_slug(args[:group])
    Strm.Entries.create_entry(user, group, args)
  end
  def create_entry(_parent, _args, _resolution) do
    {:error, "Access denied"}
  end

end
