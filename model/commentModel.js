import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    article_id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

export default mongoose.model("comment", commentSchema);