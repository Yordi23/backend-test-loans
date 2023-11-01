const express = require('express');
const logger = require('../../config/logger');
const LoanPaymentService = require('../../services/loan-payment');

const router = express.Router();

router.post('/', async (req, res, next) => {
	try {
		const loanPayment = await LoanPaymentService.create(req.body);

		res.status(200).json({
			status: 'success',
			data: {
				loanPayment,
			},
		});
	} catch (error) {
		logger.error('Error:', error);
		return next(error);
	}
});

router.get('/', async (req, res, next) => {
	try {
		const loanPayments = await LoanPaymentService.getByLoan(
			req.query.loanId
		);

		res.status(200).json({
			status: 'success',
			data: {
				loanPayments,
			},
		});
	} catch (error) {
		logger.error('Error:', error);
		return next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const loanPayment = await LoanPaymentService.getById(req.params.id);

		res.status(200).json({
			status: 'success',
			data: {
				loanPayment,
			},
		});
	} catch (error) {
		logger.error('Error:', error);
		return next(error);
	}
});

module.exports = router;
