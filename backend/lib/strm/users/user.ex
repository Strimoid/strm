defmodule Strm.Users.User do
  use Ecto.Schema

  schema "users" do
    field :name, :string
    field :password, :string
    field :avatar, :string

    many_to_many :notifications, Strm.Users.Notification,
      join_through: "notification_targets",
      join_keys: [user_id: :id, notification_id: :id]
  end
end
