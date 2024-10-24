import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
const router = Router();

//Login/Users Routes

router.post('/users', new CreateUserController().handle) //users
router.post('/session', new AuthUserController().handle) //login
router.get('/userdt',isAuthenticated, new DetailUserController().handle)// User Detail

//Categories Routes

router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/category', isAuthenticated, new ListCategoryController().handle)

export { router }; 