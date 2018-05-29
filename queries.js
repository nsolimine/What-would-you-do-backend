const database = require('./database-connection')

module.exports = {
  list(questions) {
    return database('questions').select()
  },
  read(questions) {
    return database('questions')
      .select('*')
      .where('id', id)
      .first()
  },
  create(questions) {
    return database('questions')
      .insert(item)
      .returning('*')
      .then(record => record[0])
  },
  update(questions, id) {
    return database('questions')
      .update(questions)
      .where('id', id)
      .returning('*')
      .then(record => record[0])
  },
  delete(id) {
    return database('questions')
      .delete()
      .where('id', id)
  }
}
