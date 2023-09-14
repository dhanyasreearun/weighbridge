import mongoose from "mongoose";

const driverMasterSchema = new  mongoose.Schema({
    driverid: {
        type: String,
        required: [true, "Please provide a driver id"],
        unique: true,
    },
    drivername: {
        type: String,
        required: [true, "Please provide driver name"],
        unique: true,
    },
});

const DriverMaster = mongoose.models.drivermaster  || mongoose.model
("drivermaster",driverMasterSchema);

export default DriverMaster;