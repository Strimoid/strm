use Mix.Config

# Configure your database
config :strm, Strm.Repo,
  username: "postgres",
  password: "postgres",
  database: "strm_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :strm, StrmWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Make password hashing faster
config :bcrypt_elixir, :log_rounds, 4
