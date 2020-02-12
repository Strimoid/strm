defmodule Strm.Groups.Group do
  use Ecto.Schema

  schema "groups" do
    field :name, :string
    field :urlname, :string
    field :description, :string
    field :type, :string

    belongs_to :creator, Strm.Users.User

    has_many :contents, Strm.Contents.Content
    has_many :comments, Strm.Contents.Comment
    has_many :entries, Strm.Entries.Entry
  end
end
