import mongoose from "mongoose";

const customerMasterSchema = new  mongoose.Schema({
    customerid: {
        type: String,
        required: [true, "Please provide a customer id"],
        unique: true,
    },
    customername: {
        type: String,
        required: [true, "Please provide customer name"],
        unique: true,
    },
    customertype: {
        type: String,
        required: [true, "Please provide customer type"],
    },
    customeraddress: {
        type: String,
        required: [true, "Please provide customer address"],
    },
    customercountry: {
        type: String,
        required: [true, "Please provide customer country"],
    },
    customertelephone: {
        type: String,
        required: [true, "Please provide customer phone"],
    },
});

const CustomerMaster = mongoose.models.customermaster  || mongoose.model
("customermaster",customerMasterSchema);

export default CustomerMaster;