const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    console.log('Trying to connect db...');
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Mongo Error in db.js: ' + err.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
