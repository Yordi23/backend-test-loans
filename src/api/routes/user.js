const express = require('express');
const logger = require('../../config/logger');
const UserService = require('../../services/user');

const router = express.Router();

router.post('/', async (req, res, next) => {
	try {
		const user = await UserService.create(req.body);

		res.status(200).json({
			status: 'success',
			data: {
				user,
			},
		});
	} catch (error) {
		logger.error('Error:', error);
		return next(error);
	}
});

router.patch('/:id', async (req, res, next) => {
	try {
		const user = await UserService.update(req.params.id, req.body);

		res.status(200).json({
			status: 'success',
			data: {
				user,
			},
		});
	} catch (error) {
		logger.error('Error:', error);
		return next(error);
	}
});

module.exports = router;
