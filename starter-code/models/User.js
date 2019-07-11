const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		firstName: { type: String },
		familyName: { type: String },
		username: { type: String, unique: true },
		password: { type: String },
		googleID: { type: String },
		email: { type: String },
	},
	{
		timestamps: true,
	},
);

const User = mongoose.model('User', userSchema);
module.exports = User;
