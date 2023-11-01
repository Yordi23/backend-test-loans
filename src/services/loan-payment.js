const loanPaymentModel = require('../models/loan-payment');
const AppError = require('../utils/app-error');
const LoanService = require('./loan');

const create = async (createLoanPaymentDto) => {
	const loan = await LoanService.getById(createLoanPaymentDto.loan);

	if (createLoanPaymentDto.amount > loan.remainingAmount) {
		throw new AppError(
			'Loan payment amount is greater than remaining loan amount',
			400
		);
	}

	if (createLoanPaymentDto.amount <= 0) {
		throw new AppError(
			'Loan payment amount must be greater than 0',
			400
		);
	}

	//Note: Ideally this would be done using transactions to ensure all operations are performed.
	//		But for supporting it, would be needed to configure a replica set member or mongos.
	const loanPayment = await loanPaymentModel.create({
		amount: createLoanPaymentDto.amount,
		loan: createLoanPaymentDto.loan,
	});

	loan.remainingAmount = loan.remainingAmount - loanPayment.amount;
	await loan.save();

	return { ...loanPayment.toJSON(), loan: loan.toJSON() };
};

const getByLoan = async (loanId) => {
	const loanPayments = await loanPaymentModel.find({
		loan: loanId,
	});

	return loanPayments;
};

const getById = async (id) => {
	const loanPayment = await loanPaymentModel
		.findById(id)
		.populate('loan');

	if (!loanPayment) {
		throw new AppError('Loan payment not found', 404);
	}

	return loanPayment;
};

module.exports = {
	create,
	getByLoan,
	getById,
};
