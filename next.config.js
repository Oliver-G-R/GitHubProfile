const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

const withNextEnv = nextEnv()
dotenvLoad()

module.exports = withNextEnv({
  reactStrictMode: true
})
