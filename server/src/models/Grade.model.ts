import { Document, Schema, model} from "mongoose";

 interface IGrade extends Document {
    grade: string;
    code : string;

}
export const gradeSchema = new Schema({
    grade: {
        type: String,
        required: true,
    },
    code:{
        type:String,
    }
});

export default model<IGrade>('Grade', gradeSchema);
