import {connect} from "@/dbConfig/dbConfig";
import DestinationMaster from "@/models/destinationMasterModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { destinationid,destinationname} = reqBody;

        const newDestinationMaster = new DestinationMaster( {
            destinationid,
            destinationname,
        });

        const savedDestinationMaster = await newDestinationMaster.save().catch((error:any) => {
            console.log(error);
        });

        console.log(newDestinationMaster);

        return NextResponse.json({
            message:"destination master created Successfully",
            success: true,
            newDestinationMaster
        })

    } catch ( error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

export async function GET() {
    try {
        const destination = await DestinationMaster.find();
        return NextResponse.json({
            destination
        })

    } catch ( error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}