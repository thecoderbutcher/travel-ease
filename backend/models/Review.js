import mongoose from "mongoose"; 

const reviewSchema = new mongoose.Schema(
    {
        productId:{
            type: mongoose.Types.ObjectId,
            ref: "Tour",
        },
        username:{
            type:String,
            requiered: true,
        },
        reviewText: {
            type: String,
            required:true,
        },
        rating: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
            default: 0
        }
    },
    { timestanps: true }
);

export default mongoose.model("Review", reviewSchema);