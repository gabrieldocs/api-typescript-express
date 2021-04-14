import { Router } from 'express'
import UserController from '../src/controllers/UserController'
import AppController from './controllers/AppController'

const routes = Router() 

routes.get('/', UserController.home)
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.detail)
routes.get('/users/:id/delete', UserController.delete)
routes.post('/users', UserController.store)


routes.get('/apps', AppController.index)
routes.post('/apps', AppController.store)

export default routes 