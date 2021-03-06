const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var usersSchema = new mongoose.Schema({

    firstname:
	 {
        type: String,
        required: true
    },
    lastname:
	 {
        type: String,
        required: true
    },
    username:
	 {
        type: String,
        required: true,
		  unique: true
    },
    email:
	 {
        type: String,
        required: true,
		  unique:  true
    },
    password:
	 {
        type: String,
        required: true
    },
    gender:
	 {
        type: String,
		  required: true
    },
	 birthday:
	 {
		 type: Date
	 },
	 bio:
	 {
		 type: String
	 },
	 images:
	 {
		 type: [String]
	 },
	 location:
	 {
		 type: String
	 },
	 active:
	 {
		 type: Number,
		 default: 0
	 },
	 timestamp:
	 {
        type: Date,
		  default: Date.now
    }

});

module.exports = mongoose.model('Users', usersSchema);
