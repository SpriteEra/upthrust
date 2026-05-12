import mongoose from "mongoose";


const PageSchema = new mongoose.Schema({
    title: String,
    url: String,

    additionalFields: {
        type: mongoose.Schema.Types.Mixed,
        default: {}
    },
    faq: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FAQ'
    }


}, { timestamps: true });

const Page = mongoose.model("Page", PageSchema);

export default Page;