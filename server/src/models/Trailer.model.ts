import { Document, Schema, model} from "mongoose";
import { userSchema} from './User.model';

 interface ITrailer extends Document {
    name: string;
    description: string;
    category: string;
    director:string;
    actors:string;
    year:string;
    link:string;
    image: string;

}
export const trailerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category:{
        type:String,
        required: true,
    },
    director:{
        type:String,
        required: true,
    },
    actors:{
        type:String,
        required: true,
    },
    year:{
        type:String,
        required: true,
    },
    link:{
        type:String,
        required: true,
    },
    image:{
        type:String
    },
    user:{
        type: Schema.Types.ObjectId, ref: 'User'
    }
});

export default model<ITrailer>('Trailer', trailerSchema);
