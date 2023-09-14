import mongoose from "mongoose";

const vehicleMasterSchema = new  mongoose.Schema({
    vehiclenumber: {
        type: String,
        required: [true, "Please provide a vehicle number"],
        unique: true,
    },
    vehicleowner: {
        type: String,
        required: [true, "Please provide vehicle owner name"],
        unique: true,
    },
    vehicleweight: {
        type: Number,
        required: [true, "Please provide vehicle weight"],
    },
    vehicletype: {
        type: String,
        required: [true, "Please provide vehicle type"],
    },
});

const VehicleMaster = mongoose.models.vehiclemaster  || mongoose.model
("vehiclemaster",vehicleMasterSchema);

export default VehicleMaster;