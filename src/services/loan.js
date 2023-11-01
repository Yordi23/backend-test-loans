const loanModel = require('../models/loan');
const userModel = require('../models/user');
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

const getByUserName = async (userName) => {
	const users = await userModel.find({ name: { $regex: userName } });
	const loans = await loanModel
		.find({ borrower: users })
		.populate('borrower');

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
	getByUserName,
};
