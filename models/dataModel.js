import mongoose,{Schema} from "mongoose"

const dataModel = new Schema(
    {
        name:String,
        description:String,
    },
    {
        timestamps:true,
    }
)

const NewSchema = mongoose.models.NewSchema || mongoose.model('NewSchema', dataModel);

export default NewSchema;