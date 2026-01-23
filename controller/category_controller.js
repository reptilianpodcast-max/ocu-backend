const Category = require('../model/category_model');

const getCategory = async (req, res, next) => {
    try {
        const categories = await Category.find({});
        res.status(200).json({ response: categories });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

const addCategory = async (req, res, next) => {
    try {
      const category = new Category({
        id: Number(req.body.id) + 1,
        name: req.body.name,
      });
      
      const categoryExist = await Category.findOne({ name: category.name });
      if (categoryExist || category.name.toLowerCase() === "all") {
        return res.status(409).json({ message: "Category already exists." });
      }

      const savedCategory = await category.save();
      res.status(201).json({
        response: savedCategory,
        message: "Category added successfully.",
      });
      console.log("Category created successfully.");
    }catch (err) {
      res.status(500).json({ error: "Internal Server Error." });
    }
};

const updateCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name } = req.body;
 
    const categoryExist = await Category.findOne({id:id});
    if (!categoryExist) {
      return res.status(404).json({message: "Category not found."});
    }

    const categoryNameExist = await Category.findOne({ name: name });
    if ((categoryNameExist && (categoryExist.name !== name)) || name.toLowerCase() === "all") {
      return res.status(409).json({ message: "Category already exists." });
    }

    const updatedCategory = await Category.findOneAndUpdate(
      { id: id },
      { $set: { name: name } }
    );
    res.status(200).json({
      response: updatedCategory,
      message: "Category updated successfully."
    });
    console.log("Category updated successfully.");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error." });
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const categoryExist = await Category.findOne({id:id});
    if (!categoryExist) {
      return res.status(404).json({message: "Category not found."});
    }

    await Category.findOneAndDelete({id:id})
    res.status(200).json({ message: "Category deleted successfully." });
    console.log("Category deleted successfully.");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error." });
  }
};

exports.getCategory = getCategory;
exports.addCategory = addCategory;
exports.updateCategory = updateCategory;
exports.deleteCategory = deleteCategory;