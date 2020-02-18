defmodule Strm.Entries do
  import Ecto.Query
  import Strm.Common.Query

  alias Strm.Repo
  alias Strm.Entries.Entry
  alias Strm.Entries.EntryReply

  def find_entry(id) do
    Entry |> Repo.get(id)
  end

  def list_entries(group \\ nil, cursor \\ nil) do
    replies_query = from r in EntryReply,
      order_by: r.created_at,
      preload: [:user]

    Entry
      |> filter_by_group(group)
      |> limit(10)
      |> order_by([desc: :created_at])
      |> without_private()
      |> paginate(cursor)
      |> Repo.all()
      |> Repo.preload([replies: replies_query, group: [], user: []])
  end

  def create_entry(user, group, args) do
    %Entry{user: user, group: group, text_source: args[:text]}
      |> Entry.changeset(args)
      |> Repo.insert
  end
end
