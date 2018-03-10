require('dotenv').load()

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql:///wwydbackend'
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
}
