const mongoose = require('mongoose');
const logger = require('./logger');

const initializeMongoose = async () => {
	const connection = await mongoose.connect(process.env.DB_URL);

	logger.info('DB connection succesfully stablished.');
};

module.exports = initializeMongoose;
