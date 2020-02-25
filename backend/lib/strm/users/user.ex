defmodule Strm.Users.User do
  use Ecto.Schema

  schema "users" do
    field :name, :string
    field :password, :string
    field :avatar, :string

    many_to_many :blocked_groups, Strm.Groups.Group,
      join_through: "user_blocked_groups"
    many_to_many :subscribed_groups, Strm.Groups.Group,
      join_through: "user_subscribed_groups"

    many_to_many :blocked_users, Strm.Users.User,
      join_through: "user_blocked_users",
      join_keys: [source_id: :id, target_id: :id]
    many_to_many :followed_users, Strm.Users.User,
      join_through: "user_followed_users",
      join_keys: [source_id: :id, target_id: :id]

    many_to_many :notifications, Strm.Users.Notification,
      join_through: "notification_targets",
      join_keys: [user_id: :id, notification_id: :id]
  end
end
