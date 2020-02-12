defmodule Strm.Entries.Entry do
  use Ecto.Schema
  import Ecto.Changeset

  schema "entries" do
    field :text, :string
    field :text_source, :string

    field :uv, :integer
    field :dv, :integer

    has_many :replies, Strm.Entries.EntryReply, [foreign_key: :parent_id]

    belongs_to :group, Strm.Groups.Group
    belongs_to :user, Strm.Users.User

    timestamps([type: :utc_datetime, inserted_at: :created_at])
  end

  def changeset(entry, params \\ %{}) do
    entry
    |> cast(params, [:text])
    |> validate_required([:text])
  end
end
