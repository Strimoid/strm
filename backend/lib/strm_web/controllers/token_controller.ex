defmodule StrmWeb.TokenController do
  use StrmWeb, :controller

  alias Strm.{Repo, Users}
  alias StrmWeb.Guardian

  def create(conn, %{"username" => username, "password" => password} = _params) do
    user = Repo.get_by!(Users.User, name: username)
    hash = user.password |> String.replace("$2y$", "$2b$")

    if Bcrypt.verify_pass(password, hash) do
      {:ok, token, _} = Guardian.encode_and_sign(user)

      conn |> json(%{token: token})
    else
      conn
        |> put_status(:bad_request)
        |> json(%{error: "invalid-credentials"})
    end
  end
end
