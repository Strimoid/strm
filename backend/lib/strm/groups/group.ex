defmodule Strm.Groups.Group do
  use Ecto.Schema

  schema "groups" do
    field :avatar, :string
    field :name, :string
    field :urlname, :string
    field :description, :string
    field :type, :string
    field :subscribers_count, :integer

    belongs_to :creator, Strm.Users.User

    many_to_many :moderators, Strm.Users.User,
      join_through: "group_moderators"
    many_to_many :banned_users, Strm.Users.User,
      join_through: "group_bans"

    has_many :contents, Strm.Contents.Content
    has_many :comments, Strm.Contents.Comment
    has_many :entries, Strm.Entries.Entry

    timestamps([type: :utc_datetime, inserted_at: :created_at])
  end
end
