import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
    email?:string,
    firstName?:string,
    lastName?: string,
    password?: string,
    projects?: []
}


const UserSchema = new Schema({
    email: String, 
    firstName: String, 
    lastName: String,
    password: String,
    projects: [
        {
            type: Schema.Types.ObjectId,
            ref: "App"
        }
    ] 
},
{
    timestamps: true
})

export default model<UserInterface>('User', UserSchema)