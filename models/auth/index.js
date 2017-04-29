var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	username: String,
	password: String,
	date: Date,
	is_active: Schema.Types.Boolean
});

modules.exports = mongoose.model('auth', schema);