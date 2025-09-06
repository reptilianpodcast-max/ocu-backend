import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        required: true
    },
    publish: {
        type: Boolean,
        required: true
    }
});

export default mongoose.model("article", articleSchema);