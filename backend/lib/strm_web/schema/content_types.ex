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
    field :votes, list_of(:vote)
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
    field :votes, list_of(:vote)
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
    field :votes, list_of(:vote)
    field :text, :string
    field :comment, :comment
    field :user, :user
  end

  object :entry do
    field :id, :id
    field :created_at, :naive_datetime
    field :uv, :integer
    field :dv, :integer
    field :votes, list_of(:vote)
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
    field :votes, list_of(:vote)
    field :text, :string
    field :user, :user
  end

  object :group do
    field :avatar, :string
    field :name, :string
    field :urlname, :string
    field :created_at, :naive_datetime
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

  object :notification do
    field :id, :id
    field :title, :string
    field :created_at, :naive_datetime
  end

  object :me do
    import_fields :user
    field :notifications, list_of(:notification)
    field :blocked_groups, list_of(:group)
    field :subscribed_groups, list_of(:group)
    field :blocked_users, list_of(:user)
    field :followed_users, list_of(:user)
  end

  object :vote do
    field :up, :boolean
    field :user, :user
    field :created_at, :naive_datetime
  end
end
