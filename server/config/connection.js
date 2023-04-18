const mongoose = require("mongoose");

//Connection to MongoDB

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/hitch_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
