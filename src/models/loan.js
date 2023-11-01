const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema(
	{
		totalAmount: {
			type: Number,
			required: [true, 'Please enter the total borrowed loan amount'],
		},
		remainingAmount: {
			type: Number,
			default: function () {
				return this.totalAmount;
			},
		},
		borrower: {
			type: mongoose.Schema.ObjectId,
			ref: 'User',
			required: [true, 'Please enter the user that owns the loan'],
		},
	},
	{ timestamps: true }
);
const Loan = mongoose.model('Loan', LoanSchema);

module.exports = Loan;
