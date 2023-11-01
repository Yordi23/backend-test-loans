const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const initializeMongoose = require('./config/mongoose');

const app = require('./app');
const logger = require('./config/logger');

//Unhandled Exceptions handling
process.on('uncaughtException', (err) => {
	logger.error(err.message, err);
	logger.info('Shutting down...');
	logger.error(err.name, err.message);
	process.exit(1);
});

//Establish database connection
initializeMongoose();

//Start server
const port = process.env.PORT || 8080;

app.listen(port, () => {
	logger.info('Server listening on port ' + port);
});
