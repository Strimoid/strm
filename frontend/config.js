const env = process.env.NODE_ENV || ''
const isDev = env === 'development'

export default {
    apiUri: isDev ? 'http://localhost:4000/api' : 'https://new.strm.pl/api',
    wsUri: isDev ? 'ws://localhost:4000/socket' : 'ws://new.strm.pl/socket'
}
