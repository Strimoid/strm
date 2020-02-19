defmodule Strm.Contents.Comment do
  use Ecto.Schema

  schema "comments" do
    field :text, :string
    field :text_source, :string

    field :uv, :integer
    field :dv, :integer
    has_many :votes, Strm.Votes.Vote,
      foreign_key: :element_id,
      where: [element_type: "Strimoid\\Models\\Comment"]

    has_many :replies, Strm.Contents.CommentReply, [foreign_key: :parent_id]

    belongs_to :content, Strm.Contents.Content
    belongs_to :group, Strm.Groups.Group
    belongs_to :user, Strm.Users.User

    timestamps([inserted_at: :created_at])
  end
end
