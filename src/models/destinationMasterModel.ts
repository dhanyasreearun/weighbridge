import mongoose from "mongoose";

const destinationMasterSchema = new  mongoose.Schema({
    destinationid: {
        type: String,
        required: [true, "Please provide a destination id"],
        unique: true,
    },
    destinationname: {
        type: String,
        required: [true, "Please provide destination name"],
        unique: true,
    },
});

const DestinationMaster = mongoose.models.destinationmaster  || mongoose.model
("destinationmaster",destinationMasterSchema);

export default DestinationMaster;