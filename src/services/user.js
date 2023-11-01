const userModel = require('./../models/user');
const { v4: uuidv4 } = require('uuid');

const create = async (createUserDto) => {
	const user = await userModel.create({
		name: createUserDto.name,
		email: createUserDto.email,
		clientCode: uuidv4(),
		profilePicture: createUserDto.profilePicture,
	});

	return user;
};

const update = async (id, updateUserDto) => {
	const user = await userModel.findByIdAndUpdate(
		id,
		{
			name: updateUserDto.name,
			profilePicture: updateUserDto.profilePicture,
		},
		{
			new: true,
		}
	);

	return user;
};

module.exports = {
	create,
	update,
};
