import mongoose from "mongoose";

const sourceMasterSchema = new  mongoose.Schema({
    sourceid: {
        type: String,
        required: [true, "Please provide a source id"],
        unique: true,
    },
    sourcename: {
        type: String,
        required: [true, "Please provide source name"],
        unique: true,
    },
});

const SourceMaster = mongoose.models.sourcemaster  || mongoose.model
("sourcemaster",sourceMasterSchema);

export default SourceMaster;