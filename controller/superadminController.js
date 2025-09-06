import Superadmin from "../model/superadminModel.js";

// Create Superadmin
export const createSuperadmin = async (req, res) => {
    try {
        const superadminData = new Superadmin(req.body);
        const {email} = superadminData;

        const superadminExist = await Superadmin.findOne({email})
        if(superadminExist) {
            return res.status(400).json({ message: "Superadmin Already Exists." });
        }
        const savedSuperadmin = await superadminData.save();
        res.status(200).json(savedSuperadmin);
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// Get All Superadmins
export const getAllSuperadmins = async (req, res) => {
    try {
        const superadmin = await Superadmin.find();
        // if(superadmin.length === 0) {
        //     return res.status(404).json({ message: "Superadmin Not Found." })
        // }
        res.status(200).json(superadmin);
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// Update Superadmin
export const updateSuperadmin = async (req, res) => {
    try {
        const id = req.params.id;
        const superadminExist = await Superadmin.findOne({ id: id });
        if (!superadminExist) {
            return res.status(404).json({ message: "User Not Found" });
        }
        const updateSuperadmin = await Superadmin.findOneAndUpdate({ id: id }, req.body, {new: true, runValidators: true})
        res.status(201).json(updateSuperadmin)
    } catch(error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
}