import mongoose from "mongoose";

const titleSchema = new mongoose.Schema({
    title_name: {
        type: String,
        required: true
    },
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title_description: {
        type: String,
        required: true
    },
    voice: {
        type: String,
        required: true
    },
    words: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Word"
    }]
});
export default mongoose.model('Title', titleSchema);