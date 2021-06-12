const { EJSON } = require("bson");
const string = EJSON.stringify({
  price: { $gt: 20, $lt: 200 },
  title: /mazda/i,
  created_on: 1620972158264,
});

console.log(string);
