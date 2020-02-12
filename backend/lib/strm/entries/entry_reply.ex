defmodule Strm.Entries.EntryReply do
  use Ecto.Schema

  schema "entry_replies" do
    field :text, :string
    field :text_source, :string

    field :uv, :integer
    field :dv, :integer

    belongs_to :entry, Strm.Contents.Entry, [foreign_key: :parent_id]

    belongs_to :group, Strm.Groups.Group
    belongs_to :user, Strm.Users.User

    timestamps([inserted_at: :created_at])
  end
end
