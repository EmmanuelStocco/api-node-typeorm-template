import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { authMiddleware } from './middlewares/authMiddleware'
import { GameController } from './controllers/GameController'

const routes = Router()

routes.post('/user', new UserController().create)
routes.post('/login', new UserController().login)

routes.use(authMiddleware)

routes.get('/profile', new UserController().getProfile)
routes.post('/game/:idUser', new GameController().create)

export default routes
