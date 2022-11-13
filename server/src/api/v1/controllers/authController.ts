import { Request, Response } from 'express';
import authService from '../services/authService';

export async function register(req: Request, res: Response) {
	const data = await authService.register(req.body);
	res.json(data);
}

export async function logout(req: Request, res: Response) {
	req.logOut({}, (err) => {
		res.json(err);
	});

	res.json({ msg: 'Logout complete' });
}
