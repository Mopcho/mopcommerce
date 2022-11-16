import { Prisma, Users } from '@prisma/client';

type UsersWithRoles = Prisma.UsersGetPayload<{
	include: { Roles: true };
}>;

declare global {
	namespace Express {
		interface User extends UsersWithRoles {}
	}
}

export {};
