defmodule Strm.Votes.Vote do
  use Ecto.Schema

  @primary_key false

  schema "votes" do
    field :up, :boolean
    field :element_id, :integer, primary_key: true
    field :element_type, :string, primary_key: true

    belongs_to :user, Strm.Users.User

    field :created_at, :naive_datetime
  end

end
