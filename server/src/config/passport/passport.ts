import passport from 'passport';
import { PrismaClient } from '@prisma/client';
import {
	IStrategyOptions,
	Strategy as LocalStrategy,
	VerifyFunction,
} from 'passport-local';
import { validatePassword } from '../../api/v1/utils/passwordUtils';
import { saltRounds } from '../constants';

const prisma = new PrismaClient();

const customFields: IStrategyOptions = {
	usernameField: 'email',
	passwordField: 'password',
};

const verifyCallback: VerifyFunction = async (username, password, cb) => {
	try {
		const user = await prisma.users.findUnique({
			where: { email: username },
		});

		if (!user) {
			return cb(null, false, { message: 'Incorrect email or password.' });
		}

		const isValid = await validatePassword(
			password,
			user.password,
			saltRounds
		);

		if (isValid) {
			return cb(null, user);
		}

		return cb(null, false);
	} catch (err) {
		cb(err);
	}
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user: { id?: string }, done) => {
	done(null, user.id);
});

passport.deserializeUser((userId: string, done) => {
	prisma.users
		.findUniqueOrThrow({ where: { id: userId } })
		.then((user) => {
			done(null, user);
		})
		.catch((err) => {
			done(err);
		});
});