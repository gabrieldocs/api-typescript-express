import {Schema, model, Document } from 'mongoose'

interface AppInterface extends Document { 
    title?: string, 
    description?:string,
    owner?: string
}

const AppSchema = new Schema({
    title: String,
    description: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
})


export default model<AppInterface>('App', AppSchema)

