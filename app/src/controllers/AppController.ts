import { Request, Response } from "express"
import App from '../schemas/App'
import User from '../schemas/User'


class AppController {
    
    public async index(req: Request, res: Response):Promise<Response> {
        const apps = await App.find({})
        return res.json(apps)
    }

    public async store(req: Request, res: Response):Promise<Response> {
        const app = await App.create(req.body)
        return res.json(app)
    }

}


export default new AppController() 