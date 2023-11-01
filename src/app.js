const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const errorHandler = require('./api/routes/error-handler');
const userRouter = require('./api/routes/user');
const loanRouter = require('./api/routes/loan');
const loanPaymentRouter = require('./api/routes/loan-payment');
const AppError = require('./utils/app-error');

const app = express();

// Enable Cross Origin Resource Sharing to all origins by default
app.use(cors());
// Transforms the raw string of req.body into json
app.use(express.json());
// Log incoming requests to the console
app.use(morgan('combined'));

//Set Routers
app.use('/api/v1/users', userRouter);
app.use('/api/v1/loans', loanRouter);
app.use('/api/v1/payments', loanPaymentRouter);

//Error handling
app.all('*', (req, res, next) => {
	next(
		new AppError(`Can't find ${req.originalUrl} on this server.`, 404)
	);
});

app.use(errorHandler);

module.exports = app;
