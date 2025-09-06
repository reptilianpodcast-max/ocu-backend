import Comment from "../model/commentModel.js";

// Create Comment
export const createComment = async (req, res) => {
    try {
        const commentData = new Comment(req.body);
        const savedComment = await commentData.save();
        res.status(200).json(savedComment);
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// Get All Comments
export const getAllComments = async (req, res) => {
    try {
        const comment = await Comment.find();
        // if(comment.length === 0) {
        //     return res.status(404).json({ message: "Comment Not Found." })
        // }
        res.status(200).json(comment);
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// Delete Comment
export const deleteComment = async (req, res) => {
    try {
        const id = req.params.id;
        const commentExist = await Comment.findOne({ id: id });
        if (!commentExist) {
            return res.status(404).json({ message: "User Not Found" });
        }
        await Comment.findOneAndDelete(id)
        res.status(201).json({ message: "Comment Deleted Successfully." })
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
}