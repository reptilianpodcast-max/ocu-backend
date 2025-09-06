import Admin from "../model/adminModel.js";

// Create Admin
export const createAdmin = async (req, res) => {
    try {
        const adminData = new Admin(req.body);
        const {email} = adminData;

        const adminExist = await Admin.findOne({email})
        if(adminExist) {
            return res.status(400).json({ message: "Admin Already Exists." });
        }
        const savedAdmin = await adminData.save();
        res.status(200).json(savedAdmin);
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// Get All Admins
export const getAllAdmins = async (req, res) => {
    try {
        const admin = await Admin.find();
        // if(admin.length === 0) {
        //     return res.status(404).json({ message: "Admin Not Found." })
        // }
        res.status(200).json(admin);
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// Update Admin
export const updateAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const adminExist = await Admin.findOne({ id: id });
        if (!adminExist) {
            return res.status(404).json({ message: "User Not Found" });
        }
        const updateAdmin = await Admin.findOneAndUpdate({ id: id }, req.body, {new: true, runValidators: true})
        res.status(201).json(updateAdmin)
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
}

// Delete Admin
export const deleteAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const adminExist = await Admin.findOne({ id: id });
        if (!adminExist) {
            return res.status(404).json({ message: "User Not Found" });
        }
        await Admin.findOneAndDelete(id)
        res.status(201).json({ message: "Admin Deleted Successfully." })
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
}