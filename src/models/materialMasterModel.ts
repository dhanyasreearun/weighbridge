import mongoose from "mongoose";

const materialMasterSchema = new  mongoose.Schema({
    materialid: {
        type: String,
        required: [true, "Please provide a material id"],
        unique: true,
    },
    materialname: {
        type: String,
        required: [true, "Please provide material name"],
        unique: true,
    },
    materialunit: {
        type: String,
        required: [true, "Please provide material unit"],
    },
    materialrate: {
        type: String,
        required: [true, "Please provide material rate"],
    },
});

const MaterialMaster = mongoose.models.materialmaster  || mongoose.model
("materialmaster",materialMasterSchema);

export default MaterialMaster;