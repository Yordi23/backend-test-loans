const loanModel = require('../models/loan');

const create = async (createLoanDto) => {
	const loan = await loanModel.create({
		totalAmount: createLoanDto.totalAmount,
		borrower: createLoanDto.borrower,
	});

	return loan;
};

module.exports = {
	create,
};
