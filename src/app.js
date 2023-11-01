const express = require('express');
const cors = require('cors');

const app = express();

//---Global Middlewares---

// Enable Cross Origin Resource Sharing to all origins by defaul
app.use(cors());
// Transforms the raw string of req.body into json
app.use(express.json());

//---Error handling---
app.all('*', (req, res, next) => {
	next(
		new AppError(`Can't find ${req.originalUrl} on this server.`, 404)
	);
});

module.exports = app;
