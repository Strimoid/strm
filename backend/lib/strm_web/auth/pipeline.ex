defmodule StrmWeb.Auth.Pipeline do
  use Guardian.Plug.Pipeline,
    otp_app: :strm,
    module: StrmWeb.Guardian,
    error_handler: StrmWeb.Auth.ErrorHandler

  plug Guardian.Plug.VerifyHeader
  plug Guardian.Plug.LoadResource, allow_blank: true
  plug StrmWeb.Auth.ContextPlug
end
