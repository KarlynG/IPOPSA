import { Document, Schema, model} from "mongoose";
import { userSchema} from './User.model';

 interface IAttendance extends Document {
    studentId: number;
    teacherId: number;
    createdDate: Date;
    status : string;
    userId : number;
}
export const attendanceSchema = new Schema({
    status: {
        type: String,
        required: true,
    },
    createdDate:{
        type: Date,
    },
    studentId:{
        type: Schema.Types.ObjectId, ref: 'Student'
    },
    teacherId:{
        type: Schema.Types.ObjectId, ref: 'Teacher'
    },
    userId:{
        type: Schema.Types.ObjectId, ref: 'User'
    }
});

export default model<IAttendance>('Attendance', attendanceSchema);
