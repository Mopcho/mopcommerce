import { PrismaClient, Prisma } from '@prisma/client';
import { generatePassword } from '../utils/passwordUtils';

const prisma = new PrismaClient();

async function register(user: Prisma.UsersCreateInput) {
	const hash = await generatePassword(user.password);

	user.password = hash;

	const response = await prisma.users.create({
		data: user,
	});

	return response;
}

export default { register };
