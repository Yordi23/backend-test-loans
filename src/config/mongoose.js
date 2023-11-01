const mongoose = require('mongoose');

const initializeMongoose = async () => {
	const connection = await mongoose.connect(process.env.DB_URL);

	console.log('DB connection succesfully stablished.');

	return connection.connection.db;
};

module.exports = initializeMongoose;
