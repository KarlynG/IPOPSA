
import { Document, Schema, model} from "mongoose";
import { userSchema} from './User.model';

 interface IScore extends Document {
    subjectId: string;
    teacherId: string;
    score: number;
    createdDate : string;
    userId: string;

}
export const scoreSchema = new Schema({
    createdDate:{
        type: Date,
    },
    score:{
        type: Number,
    },
    subjectId:{
        type: Schema.Types.ObjectId, ref: 'Subject'
    },
    teacherId:{
        type: Schema.Types.ObjectId, ref: 'Teacher'
    },
    userId:{
        type: Schema.Types.ObjectId, ref: 'User'
    }
  
});

export default model<IScore>('Score', scoreSchema);
