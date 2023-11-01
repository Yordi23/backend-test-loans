const express = require('express');
const logger = require('../../config/logger');
const LoanService = require('../../services/loan');

const router = express.Router();

router.post('/', async (req, res, next) => {
	try {
		const loan = await LoanService.create(req.body);

		res.status(200).json({
			status: 'success',
			data: {
				loan,
			},
		});
	} catch (error) {
		logger.error('Error:', error);
		return next(error);
	}
});

module.exports = router;
