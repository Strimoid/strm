defmodule Strm.Users.User do
  use Ecto.Schema

  schema "users" do
    field :name, :string
    field :password, :string
    field :avatar, :string
  end
end
