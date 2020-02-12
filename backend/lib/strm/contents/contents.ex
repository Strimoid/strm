defmodule Strm.Contents do
  import Ecto.Query

  alias Strm.Repo
  alias Strm.Contents.Content
  alias Strm.Contents.Comment

  def find_content(id) do
    Content |> Repo.get(id)
  end

  def list_contents do
    Content
      |> limit(10)
      |> Repo.all()
      |> Repo.preload([:group, :user])
  end

  def list_comments do
    Comment
      |> limit(10)
      |> Repo.all()
      |> Repo.preload([:group, :user])
  end
end
