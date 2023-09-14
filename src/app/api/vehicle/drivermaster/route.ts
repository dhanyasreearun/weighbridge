import {connect} from "@/dbConfig/dbConfig";
import DriverMaster from "@/models/driverMasterModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { driverid,drivername} = reqBody;

        const newdriverMaster = new DriverMaster( {
            driverid,
            drivername,
        });

        const saveddriverMaster = await newdriverMaster.save().catch((error:any) => {
            console.log(error);
        });

        console.log(newdriverMaster);

        return NextResponse.json({
            message:"driver master created Successfully",
            success: true,
            saveddriverMaster
        })

    } catch ( error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

export async function GET() {
    try {
        const driver = await DriverMaster.find();
        return NextResponse.json({
            driver
        })

    } catch ( error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}