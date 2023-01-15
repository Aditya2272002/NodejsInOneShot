const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model with Validation
const BookSchema = new Schema({
   title:{
      type: String,
      required: true,
   },
   author:{
      type: String,
      required: true,
   },
});

module.exports = mongoose.model('Book',BookSchema);