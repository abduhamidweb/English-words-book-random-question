import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
    book_title: {
        type: String,
        required: true,
        index: true
    },
      titles: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Title'
      }],
});
export default mongoose.model('Book', bookSchema);