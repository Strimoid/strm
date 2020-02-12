FROM elixir:1.10-alpine AS build

RUN apk add --update git build-base

WORKDIR /src/
COPY . .

ENV MIX_ENV prod

RUN mix local.hex --force && mix local.rebar --force
RUN mix deps.get --only $MIX_ENV && mix compile

RUN mix release

FROM alpine:3.11

RUN apk add --update ncurses-libs

RUN mkdir /app
WORKDIR /app

COPY --from=build /src/_build/prod/rel/strm .
COPY docker-entrypoint.sh .

RUN chown -R nobody: /app
USER nobody

ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["/app/bin/strm", "start"]
