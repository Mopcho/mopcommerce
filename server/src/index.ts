import express from 'express';
import { port } from './configs/server.config';
import cors from 'cors';

const app = express();

// Cors
app.use(cors());

// app.use(function (req: Request, res: Response, next: NextFunction) {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header(
// 		'Access-Control-Allow-Headers',
// 		'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
// 	);
// 	res.header(
// 		'Access-Control-Allow-Methods',
// 		'PUT,POST,GET,DELETE,OPTIONS'
// 	);
// 	next();
// });

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/test', (req, res) => {
	res.json({ ok: true });
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
