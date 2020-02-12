defmodule StrmWeb.Schema do
  use Absinthe.Schema

  import_types Absinthe.Type.Custom
  import_types StrmWeb.Schema.ContentTypes

  alias StrmWeb.Resolvers

  query do

    @desc "Get all contents"
    field :contents, list_of(:content) do
      resolve &Resolvers.Contents.list_contents/3
    end

    @desc "Get a single content"
    field :content, :content do
      arg :id, non_null(:id)
      resolve &Resolvers.Contents.find_content/3
    end

    @desc "Get all comments"
    field :comments, list_of(:comment) do
      resolve &Resolvers.Comments.list_comments/3
    end

    @desc "Get all entries"
    field :entries, list_of(:entry) do
      arg :cursor, :string
      resolve &Resolvers.Entries.list_entries/3
    end

    @desc "Get a single entry"
    field :entry, :entry do
      arg :id, non_null(:id)
      resolve &Resolvers.Entries.find_entry/3
    end

    @desc "Get all groups"
    field :groups, list_of(:group) do
      resolve &Resolvers.Groups.list_groups/3
    end

    @desc "Get a single group"
    field :group, :group do
      arg :id, non_null(:id)
      resolve &Resolvers.Groups.find_group/3
    end

    @desc "Get user"
    field :me, :user do
      resolve &Resolvers.Users.get_user/3
    end

  end

  mutation do
    @desc "Create an entry"
    field :create_entry, type: :entry do
      arg :text, non_null(:string)
      arg :group, non_null(:string)

      resolve &Resolvers.Entries.create_entry/3
    end
  end

end
