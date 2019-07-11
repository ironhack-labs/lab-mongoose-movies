import mongoose, {Document, Schema} from "mongoose";


export interface ICelebridad extends Document {
   id: any,
   name: string,
   occupation: string,
   catchPhrase: string,
   creator: string,
   created_at: Date,
}

export const CelebridadSchema: Schema = new Schema(
    {
       name: {type: String, required: true},
       occupation: {type: String},
       catchPhrase: {type: String},
       creator: {type: String},
       created_at: {type: Date, default: Date.now}
    })
;

export const CelebridadModel = mongoose.model<ICelebridad>('receta', CelebridadSchema);


