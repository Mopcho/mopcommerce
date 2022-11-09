import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const port = process.env.PORT || '3030';

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

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
