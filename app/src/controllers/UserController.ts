import {Request, Response} from 'express'
import User from '../schemas/User'

class UserController {    
    /**
     * 
     * @param req 
     * @param res 
     * @returns return array with users 
     */
    public async index(req: Request, res: Response): Promise<Response>{
        const users = await User.find({})
        return res.json(users)
    }

    /**
     * 
     * @param req 
     * @param res 
     * @returns stores a user and return the user that was created 
     */
    public async store(req: Request, res: Response): Promise<Response> {
        const user = await User.create(req.body)        
        
        return res.json(user)
    }

    public async delete(req: Request, res: Response) :Promise<Response> { 
        const user = await User.findOneAndDelete({_id: req.params.id})
        return res.status(200).json({
            user,
            status: "deleted"
        })
    }

    /**
     * 
     * @param req 
     * @param res 
     * @returns returns a json object with a welcome message
     */
    public async home(req: Request, res: Response): Promise<Response> {
        return res.json({
            message: 'Project manager API 0.1.0',
            auth: '@gabrieldocs',
            request: {
                date: new Date().getTime(),
                endpoint: "/",
                level: "public"
            }
        })
    }
}

export default new UserController()