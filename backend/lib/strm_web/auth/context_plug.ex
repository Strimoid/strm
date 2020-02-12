defmodule StrmWeb.Auth.ContextPlug do
  @behaviour Plug

  def init(opts), do: opts

  def call(conn, _) do
    current_user = Guardian.Plug.current_resource(conn)

    case current_user do
      nil -> conn
      user -> Absinthe.Plug.put_options(conn, context: %{current_user: user})
    end
  end
end
