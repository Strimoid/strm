defmodule Strm.Contents.CommentReply do
  use Ecto.Schema

  schema "comment_replies" do
    field :text, :string
    field :text_source, :string

    field :uv, :integer
    field :dv, :integer
    has_many :votes, Strm.Votes.Vote,
      foreign_key: :element_id,
      where: [element_type: "Strimoid\\Models\\CommentReply"]

    belongs_to :comments, Strm.Contents.Comment, [foreign_key: :parent_id]

    belongs_to :group, Strm.Groups.Group
    belongs_to :user, Strm.Users.User

    timestamps([inserted_at: :created_at])
  end
end
