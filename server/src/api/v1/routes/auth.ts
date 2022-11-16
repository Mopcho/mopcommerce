import express from 'express';
import passport from 'passport';
import { logout, register } from '../controllers/authController';
import { isAuth, roleGuard } from '../middlewares/authMiddleware';

const router = express.Router();

router.post(
	'/login/password',
	passport.authenticate('local', { failureMessage: true }),
	(req, res) => {
		res.json({ msg: 'Authenticated Succesfully' });
	}
);

router.get('/protected', isAuth, (req, res) => {
	res.send('Protected data');
});

router.get('/admin', isAuth, roleGuard(['Admin']), (req, res) => {
	res.send('Protected data');
});

router.post('/register', register);

router.delete('/logout', logout);

export default router;
