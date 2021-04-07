import {Request, Response} from 'express'
import User from '../schemas/User'

class UserController {    
    public async index(req: Request, res: Response): Promise<Response>{
        const users = await User.find()
        return res.json(users)
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const user = await User.create(req.body)        
        
        return res.json(user)
    }

    public async home(req: Request, res: Response): Promise<Response> {
        return res.json({
            message: 'Welcome to the Users Screens V1',
            time: new Date()
        })
    }
}

export default new UserController()