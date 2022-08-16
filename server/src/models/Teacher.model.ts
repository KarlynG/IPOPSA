import { Document, Schema, model} from "mongoose";
import { userSchema} from './User.model';

 interface ITeacher extends Document {
    name: string;
    lastName: string;
    gender: string;
    dob: Date;
    cedula : string;
    email: string;
    phoneNumber: string;
    address : string;
    code : string;
    image: string;
    createdDate : string;
    userId : number;

}
export const teacherSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    gender:{
        type:String,
        required: true,
    },
    dob:{
        type:Date,
        required: true,
    },
    cedula:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    phoneNumber:{
        type:String,
        required: true,
    },
    address:{
        type:String,
        required: true,
    },
    code:{
        type:String,
    },
    image:{
        type:String
    },
    createdDate:{
        type: Date,
    },
    user:{
        type: Schema.Types.ObjectId, ref: 'User'
    }
});

export default model<ITeacher>('Teacher', teacherSchema);
