import Article from "../model/articleModel.js";

// Create Article
export const createArticle = async (req, res) => {
    try {
        const articleData = new Article(req.body);
        const savedArticle = await articleData.save();
        res.status(200).json(savedArticle);
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// Get All Articles
export const getAllArticles = async (req, res) => {
    try {
        const article = await Article.find();
        // if(article.length === 0) {
        //     return res.status(404).json({ message: "Article Not Found." })
        // }
        res.status(200).json(article);
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// Update Article
export const updateArticle = async (req, res) => {
    try {
        const id = req.params.id;
        const articleExist = await Article.findOne({ id: id });
        if (!articleExist) {
            return res.status(404).json({ message: "User Not Found" });
        }
        const updateArticle = await Article.findOneAndUpdate({ id: id }, req.body, {new: true, runValidators: true})
        res.status(201).json(updateArticle)
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
}

// Delete Article
export const deleteArticle = async (req, res) => {
    try {
        const id = req.params.id;
        const articleExist = await Article.findOne({ id: id });
        if (!articleExist) {
            return res.status(404).json({ message: "User Not Found" });
        }
        await Article.findOneAndDelete(id)
        res.status(201).json({ message: "Article Deleted Successfully." })
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
}