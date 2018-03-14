const database = require('./database-connection')

//yo

module.exports = {
  list(questions) {
    return database('questions').select()
  },
  read(questions, id) {
    return database('questions')
      .select('*')
      .where('id', id)
      .first()
  },
  create(questions, item) {
    return database('questions')
      .insert(item)
      .returning('*')
      .then(record => record[0])
  },
  update(id, questions) {
    return database('questions')
      .update(questions)
      .where('id', id)
      .returning('*')
      .then(record => record[0])
  },
  delete(questions, id) {
    return database('questions')
      .delete()
      .where('id', id)
  }
}
