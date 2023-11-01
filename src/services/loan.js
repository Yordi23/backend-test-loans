const loanModel = require('../models/loan');
const AppError = require('../utils/app-error');

const create = async (createLoanDto) => {
	const loan = await loanModel.create({
		totalAmount: createLoanDto.totalAmount,
		borrower: createLoanDto.borrower,
	});

	return loan;
};

const getAll = async () => {
	const loans = await loanModel.find().populate('borrower');

	return loans;
};

const getById = async (id) => {
	const loan = await loanModel.findById(id).populate('borrower');

	if (!loan) {
		throw new AppError('Loan not found', 404);
	}

	return loan;
};

module.exports = {
	create,
	getAll,
	getById,
};
