// ./routes/books.routes.ts

import { Router } from 'express';
import * as userControllers from '../controlers/Usercontroller';

const router = Router();

// const userscontrollers = new UsersControllers();

router.get('/users', userControllers.getAll)
router.get('/users/:id', userControllers.getbyID)
router.post('/users', userControllers.createUser)
router.put('/users/:id', userControllers.updateUser)
router.delete('/users/:id', userControllers.deleteUser)

export default router;