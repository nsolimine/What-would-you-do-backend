const database = require("./database-connection")

module.exports = {
  list() {
    return database("questions");
  },
  read(id) {
    return database("questions")
      .select()
      .where("id", id)
      .first();
  },
  create(questions) {
    return database("questions")
      .insert(questions)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, questions) {
    return database("questions")
      .update(questions)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },
  delete(id) {
    return database("questions")
      .delete()
      .where("id", id);
  }
}
