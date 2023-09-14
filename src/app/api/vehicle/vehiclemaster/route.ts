import {connect} from "@/dbConfig/dbConfig";
import VehicleMaster from "@/models/vehicleMasterModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {vehiclenumber, vehicleowner, vehicleweight,vehicletype} = reqBody;

        const newVehicleMaster = new VehicleMaster( {
            vehiclenumber,
            vehicleowner,
            vehicleweight,
            vehicletype,
        });

        const savedVehicleMaster = await newVehicleMaster.save().catch((error:any) => {
            console.log(error);
        });

        console.log(newVehicleMaster);

        return NextResponse.json({
            message:"Vehicle master created Successfully",
            success: true,
            savedVehicleMaster
        })

    } catch ( error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

export async function GET() {
    try {
        const vehicles = await VehicleMaster.find();
        return NextResponse.json({
            vehicles
        })

    } catch ( error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}