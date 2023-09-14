import mongoose from "mongoose";

const transporterMasterSchema = new  mongoose.Schema({
    transporterid: {
        type: String,
        required: [true, "Please provide a transporter id"],
        unique: true,
    },
    transportername: {
        type: String,
        required: [true, "Please provide transporter name"],
        unique: true,
    },
});

const TransporterMaster = mongoose.models.transportermaster  || mongoose.model
("transportermaster",transporterMasterSchema);

export default TransporterMaster;