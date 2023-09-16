import mongoose from "mongoose";

const weighingMasterSchema = new  mongoose.Schema({
    vehiclenumber: {
        type: String,
        required: [true, "Please provide a vehicle id"],
        unique: true,
    },
    customername: {
        type: String,
        required: [true, "Please provide customer name"],
        unique: true,
    },
    materialname: {
        type: String,
        required: [true, "Please provide material name"],
    },
    transportername: {
        type: String,
        required: [true, "Please provide transporter name"],
    },
    drivername: {
        type: String,
        required: [true, "Please provide driver name"],
    },
    destinationname: {
        type: String,
        required: [true, "Please provide destination name"],
    },
    sourcename: {
        type: String,
        required: [true, "Please provide source name"],
    },
    weighingtype: {
        type: String,
        required: [true, "Please provide weighing type"],
    },
    netweight: {
        type: String,
        required: [true, "Please provide netweight"],
    },
});

const WeighingMaster = mongoose.models.weighingmaster  || mongoose.model
("weighingmaster",weighingMasterSchema);

export default WeighingMaster;