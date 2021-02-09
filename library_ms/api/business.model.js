const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  book_name: {
    type: String
  },
  author_name: {
    type: String
  },
  isbn_number: {
    type: Number
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);