import News from "../model/newsModel.js";

// Create News
export const createNews = async (req, res) => {
    try {
        const newsData = new News(req.body);
        const savedNews = await newsData.save();
        res.status(200).json(savedNews);
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// Get All News
export const getAllNewss = async (req, res) => {
    try {
        const news = await News.find();
        // if(news.length === 0) {
        //     return res.status(404).json({ message: "News Not Found." })
        // }
        res.status(200).json(news);
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// Update News
export const updateNews = async (req, res) => {
    try {
        const id = req.params.id;
        const newsExist = await News.findOne({ id: id });
        if (!newsExist) {
            return res.status(404).json({ message: "User Not Found" });
        }
        const updateNews = await News.findOneAndUpdate({ id: id }, req.body, {new: true, runValidators: true})
        res.status(201).json(updateNews)
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
}

// Delete News
export const deleteNews = async (req, res) => {
    try {
        const id = req.params.id;
        const newsExist = await News.findOne({ id: id });
        if (!newsExist) {
            return res.status(404).json({ message: "User Not Found" });
        }
        await News.findOneAndDelete(id)
        res.status(201).json({ message: "News Deleted Successfully." })
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
}