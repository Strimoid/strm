defmodule Strm.Users.Notification do
  use Ecto.Schema

  schema "notifications" do
    field :title, :string

    many_to_many :targets, Strm.Users.User,
      join_through: "notification_targets",
      join_keys: [notification_id: :id, user_id: :id]
    belongs_to :user, Strm.Users.User

    timestamps([type: :utc_datetime, inserted_at: :created_at])
  end
end
