import {connect} from "@/dbConfig/dbConfig";
import WeighingMaster from "@/models/weighingMasterModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {vehiclenumber,customername,materialname,transportername,drivername,destinationname,sourcename,weighingtype,netweight,materialrate} = reqBody;

        const newWeighingMaster = new WeighingMaster( {
            vehiclenumber,
            customername,
            materialname,
            transportername,
            drivername,
            destinationname,
            sourcename,
            weighingtype,
            netweight,
            materialrate,
        });

        const savedWeighingMaster = await newWeighingMaster.save().catch((error:any) => {
            console.log(error);
        });

        console.log(newWeighingMaster);

        return NextResponse.json({
            message:"Weighing master created Successfully",
            success: true,
            savedWeighingMaster
        })

    } catch ( error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

export async function GET() {
    try {
        const weighingmaster = await WeighingMaster.find();
        return NextResponse.json({
            weighingmaster
        })

    } catch ( error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}