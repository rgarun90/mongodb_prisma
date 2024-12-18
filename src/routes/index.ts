import { Router } from 'express';
import userRoute from './user.routes';

const indexRoute = Router();

indexRoute.get('', (req, res) => {
    res.json({ message: 'Welcome User' });
});

indexRoute.use('/users', userRoute);

export default indexRoute;
