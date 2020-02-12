# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :strm,
  ecto_repos: [Strm.Repo]

# Configures the endpoint
config :strm, StrmWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "hAbeS4YUfIJc45mWt4gAfa2F9zX2vVqx52ld8HWjkvNHGpkmjwb/ewz7xOElrD97",
  render_errors: [view: StrmWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Strm.PubSub, adapter: Phoenix.PubSub.PG2]

config :strm, StrmWeb.Guardian,
  issuer: "strm",
  secret_key: "cbhmtoXCpT/fznLF4ngpp5+X2GfGuG7aT/ZaqR3q/VOnQAtOnX1Aps1civvrJmAR"

config :strm, StrmWeb.Hashids,
  salt: "geehooquaiWeici6oeDe3chahle5Tai9",
  min_len: 5

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :bcrypt_elixir, log_rounds: 10

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
