import mongoose from "mongoose";
const wordSchema = new mongoose.Schema({
    english_word: {
        type: String,
        required: true
    },
    translate_word: {
        type: String,
        required: true
    },
    title_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Title',
        require: true
    },
    description: {
        type: String,
    },
    img: {
        type: String,
    },
    context: {
        type: String,
    },
    reading: {
        type: String,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]

});

export default mongoose.model('Word', wordSchema);