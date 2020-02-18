defmodule StrmWeb.Router do
  use StrmWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :auth do
    plug StrmWeb.Auth.Pipeline
  end

  scope "/api" do
    pipe_through [:api, :auth]

    resources "/tokens", StrmWeb.TokenController, only: [:create]

    forward "/graphiql", Absinthe.Plug.GraphiQL,
      schema: StrmWeb.Schema,
      socket: StrmWeb.UserSocket

    forward "/", Absinthe.Plug,
      schema: StrmWeb.Schema
  end
end
