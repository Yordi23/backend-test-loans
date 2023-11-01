const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const initializeMongoose = require('./config/mongoose');
const app = require('./app');

//Unhandled Exceptions handling
process.on('uncaughtException', (err) => {
	console.log('Unhandled Exception. Shutting dow...');
	console.log(err.name, err.message);
	process.exit(1);
});

//Establish database connection
initializeMongoose();

//Start server
const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log('Server listening on port ' + port + '...');
});
