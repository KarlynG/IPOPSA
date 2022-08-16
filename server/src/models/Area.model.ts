import { Document, Schema, model} from "mongoose";

 interface IArea extends Document {
    name: string;
    code : string;

}
export const areaSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    code:{
        type:String,
    }
});

export default model<IArea>('Area', areaSchema);
