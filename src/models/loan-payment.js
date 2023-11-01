const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema(
	{
		amount: {
			type: Number,
			required: [true, 'Please enter the payment amount'],
		},
		loan: {
			type: mongoose.Schema.ObjectId,
			ref: 'Loan',
			required: [
				true,
				'Please enter the loan to which the payment is being made',
			],
		},
	},
	{ timestamps: true }
);
const Loan = mongoose.model('LoanPayment', LoanSchema);

module.exports = Loan;
