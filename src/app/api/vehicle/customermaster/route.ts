import {connect} from "@/dbConfig/dbConfig";
import CustomerMaster from "@/models/customerMasterModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {customerid, customername, customertype,customeraddress,customercountry,customertelephone} = reqBody;

        const newCustomerMaster = new CustomerMaster( {
            customerid, 
            customername, 
            customertype,
            customeraddress,
            customercountry,
            customertelephone
        });

        const savedCustomerMaster = await newCustomerMaster.save().catch((error:any) => {
            console.log(error);
        });

        console.log(newCustomerMaster);

        return NextResponse.json({
            message:"Customer master created Successfully",
            success: true,
            savedCustomerMaster
        })

    } catch ( error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}