import {connect} from "@/dbConfig/dbConfig";
import TransporterMaster from "@/models/transporterMasterModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { transporterid,transportername} = reqBody;

        const newTransporterMaster = new TransporterMaster( {
            transporterid,
            transportername,
        });

        const savedTransporterMaster = await newTransporterMaster.save().catch((error:any) => {
            console.log(error);
        });

        console.log(newTransporterMaster);

        return NextResponse.json({
            message:"Transporter master created Successfully",
            success: true,
            savedTransporterMaster
        })

    } catch ( error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

export async function GET() {
    try {
        const transporter = await TransporterMaster.find();
        return NextResponse.json({
            transporter
        })

    } catch ( error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}