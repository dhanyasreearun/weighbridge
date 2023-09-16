import {connect} from "@/dbConfig/dbConfig";
import WeighingMaster from "@/models/weighingMasterModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        

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