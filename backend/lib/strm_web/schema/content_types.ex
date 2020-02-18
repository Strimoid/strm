defmodule StrmWeb.Schema.ContentTypes do
  use Absinthe.Schema.Notation
  alias StrmWeb.Resolvers

  object :content do
    field :id, :id
    field :created_at, :naive_datetime
    field :title, :string
    field :description, :string
    field :thumbnail, :string
    field :uv, :integer
    field :dv, :integer
    field :group, :group
    field :user, :user
    field :comments, list_of(:comment)
    field :comments_count, :integer
  end

  object :comment do
    field :id, :id
    field :created_at, :naive_datetime
    field :uv, :integer
    field :dv, :integer
    field :text, :string
    field :content, :content
    field :replies, list_of(:comment_reply)
    field :user, :user
  end

  object :comment_reply do
    field :id, :id
    field :created_at, :naive_datetime
    field :uv, :integer
    field :dv, :integer
    field :text, :string
    field :comment, :comment
    field :user, :user
  end

  object :entry do
    field :id, :id
    field :created_at, :naive_datetime
    field :uv, :integer
    field :dv, :integer
    field :text, :string
    field :replies, list_of(:entry_reply)
    field :group, :group
    field :user, :user
  end

  object :entry_reply do
    field :id, :id
    field :created_at, :naive_datetime
    field :uv, :integer
    field :dv, :integer
    field :text, :string
    field :user, :user
  end

  object :group do
    field :name, :string
    field :urlname, :string
    field :created_at, :naive_datetime
    field :avatar, :string
    field :description, :string
    field :creator, :user
    field :contents, list_of(:content) do
      arg :cursor, :string
      resolve &Resolvers.Contents.list_contents/3
    end
    field :entries, list_of(:entry) do
      arg :cursor, :string
      resolve &Resolvers.Entries.list_entries/3
    end
  end

  object :user do
    field :avatar, :string
    field :name, :string
  end
end
