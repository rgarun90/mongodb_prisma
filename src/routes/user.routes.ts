import { Router } from 'express';
import {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser,
} from '../controllers/user.controller';

const userRoute = Router();

userRoute.post('', createUser);
userRoute.get('', getUsers);
userRoute.get('/:userId', getUser);
userRoute.delete('/:userId', deleteUser);
userRoute.patch('/:userId', updateUser);

export default userRoute;
