defmodule Strm.Contents.Content do
  use Ecto.Schema

  schema "contents" do
    field :title, :string
    field :description, :string
    field :thumbnail, :string

    field :uv, :integer
    field :dv, :integer

    has_many :comments, Strm.Contents.Comment
    field :comments_count, :integer

    belongs_to :group, Strm.Groups.Group
    belongs_to :user, Strm.Users.User

    timestamps([inserted_at: :created_at])
  end
end
