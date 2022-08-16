import { Document, Schema, model} from "mongoose";
import { userSchema} from './User.model';

 interface IStudent extends Document {
    name: string;
    lastName: string;
    gender: string;
    dob: Date;
    email: string;
    phoneNumber: string;
    address : string;
    code : string;
    motherName: string;
    fatherName : string;
    image: string;
    createdDate : string;
    userId : number;

}
export const studentSchema = new Schema({
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
    motherName:{
        type:String
    },
    fatherName:{
        type:String
    },
    image:{
        type:String
    },
    createdDate:{
        type: Date,
    },
    userId:{
        type: Schema.Types.ObjectId, ref: 'User'
    }
});

export default model<IStudent>('Students', studentSchema);
