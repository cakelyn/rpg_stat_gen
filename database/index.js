var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useMongoClient: true });
mongoose.Promise = global.Promise;

var charSchema = mongoose.Schema({
  name: String,
  race: String,
  class: String,
  strength: Number,
  dexterity: Number,
  constitution: Number,
  intelligence: Number,
  wisdom: Number,
  charisma: Number
});

var Character = mongoose.model('Character', charSchema);

let save = function(name, race, cl, attr, callback){
  return new Character({
    name: name,
    race: race,
    class: cl,
    strength: attr.str,
    dexterity: attr.dex,
    constitution: attr.con,
    intelligence: attr.intel,
    wisdom: attr.wis,
    charisma: attr.char
  }).save(callback);
}

let query = function(callback) {
  Character
    .find({})
    .limit(10)
    .exec(callback)
}

module.exports.save = save;
module.exports.query = query;