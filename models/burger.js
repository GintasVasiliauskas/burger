const orm = require("../config/orm.js")

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res){
      cb(res);
    });
  },

  insertOne: function(insertValue, cb) {
    orm.insertOne(insertValue, function(res) {
      cb(res);
    });
  },

  updateOne: function(updateValue,cb) {
    orm.updateOne(updateValue,function(res){
      cb(res);
    });
  }
}

module.exports = burger
