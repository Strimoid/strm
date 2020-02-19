defmodule Strm.Entries.EntryReply do
  use Ecto.Schema

  schema "entry_replies" do
    field :text, :string
    field :text_source, :string

    field :uv, :integer
    field :dv, :integer
    has_many :votes, Strm.Votes.Vote,
    foreign_key: :element_id,
    where: [element_type: "Strimoid\\Models\\EntryReply"]

    belongs_to :entry, Strm.Contents.Entry, [foreign_key: :parent_id]

    belongs_to :group, Strm.Groups.Group
    belongs_to :user, Strm.Users.User

    timestamps([inserted_at: :created_at])
  end
end
