const mongoose = require('mongoose');

const uri = process.env.MONGO_DB_CONNECTION;

mongoose.connect(
  uri,
  { useNewUrlParser: true, useFindAndModify: false },
  (err) => {
    const msg = err || '[capivara] banco de dados conectado';
    console.log(msg);
  },
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
