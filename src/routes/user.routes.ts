import { Router } from 'express';
import {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser,
} from '../controllers/user.controller';
import { validateSchema } from '../middlewares/validation.middleware';
import { createUserSchema, updateUserSchema } from '../schemas/user.schema';

const userRoute = Router();

userRoute.post('', validateSchema(createUserSchema), createUser);
userRoute.get('', getUsers);
userRoute.get('/:userId', getUser);
userRoute.delete('/:userId', deleteUser);
userRoute.patch('/:userId', validateSchema(updateUserSchema), updateUser);

export default userRoute;
