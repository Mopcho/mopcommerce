import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './api/v1/routes';
import session from 'express-session';
import { sessionSecret } from './config/constants';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
dotenv.config();

const port = process.env.PORT || '3030';

const app = express();

// TODO : Find a way to move this into a .d.ts file instead of declaring it here
declare module 'express-session' {
	interface SessionData {
		views: number;
	}
}

// Cors
app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(
	session({
		secret: sessionSecret,
		resave: false,
		saveUninitialized: true,
		store: new PrismaSessionStore(prisma, {
			checkPeriod: 2 * 60 * 1000, //ms
			dbRecordIdIsSessionId: true,
			dbRecordIdFunction: undefined,
		}),
		cookie: {
			maxAge: 1000 * 60 * 60 * 24,
		},
	})
);

app.use(router);

app.get('/test', (req, res) => {
	if (req.session.views) {
		req.session.views++;
	} else {
		req.session.views = 1;
	}

	res.send(`<h1> Hello World ${req.session.views}</h1>`);
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
