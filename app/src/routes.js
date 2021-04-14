import { Router } from 'express'
import UserController from '../src/controllers/UserController'

const routes = Router() 

routes.get('/', UserController.home)
routes.get('/users', UserController.index)
routes.get('/users/:id/delete', UserController.delete)
routes.post('/users', UserController.store)

export default routes 