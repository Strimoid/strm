defmodule Strm.Repo do
  use Ecto.Repo,
    otp_app: :strm,
    adapter: Ecto.Adapters.Postgres
end
