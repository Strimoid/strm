defmodule StrmWeb.Hashids do
  @coder Hashids.new(Application.get_env(:strm, StrmWeb.Hashids))

  def encode(id) do
    Hashids.encode(@coder, id)
  end

  def decode(hash) do
    Hashids.decode!(@coder, hash) |> hd
  end
end
