const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please enter a full name'],
			index: true,
		},
		email: {
			type: String,
			lowercase: true,
			unique: true,
		},
		clientCode: {
			type: String,
			unique: true,
			uppercase: true,
		},
		profilePicture: {
			type: String,
		},
	},
	{ timestamps: true }
);
const User = mongoose.model('User', UserSchema);

module.exports = User;
