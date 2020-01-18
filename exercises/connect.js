const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/learningMongo";
const connect = url => {
  return mongoose.connect(url, {
    useNewUrlParser: true
  });
};

module.exports = connect;
