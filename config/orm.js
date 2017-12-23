const connection = require("./connection.js")

var orm = {
  selectAll: function(cb) {
    var queryString = "select * from burgers"
    connection.query(queryString, function(err, result){
      cb(result)
    })
  },

  insertOne: function (burger_name, cb) {
    var queryString = "INSERT INTO burgers (burger_name,devoured,date) VALUES (?,0,CURRENT_DATE)"
    console.log(queryString);
    connection.query(queryString, burger_name, function(err, result) {
      cb(result)
    })
  },

  updateOne: function (id, cb) {
    var queryString = "UPDATE burgers_db.burgers SET devoured=1 where id=?"
    console.log(queryString);
    console.log(id);

    connection.query(queryString, id, function(err, result){
      if (err) {
        throw err;
      }
       cb(result)
    });
  }
};

module.exports = orm;
