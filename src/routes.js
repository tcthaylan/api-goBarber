import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = Router();

routes.get('/', UserController.store);

export default routes;
