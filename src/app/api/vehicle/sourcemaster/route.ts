import {connect} from "@/dbConfig/dbConfig";
import SourceMaster from "@/models/sourceMasterModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { sourceid,sourcename} = reqBody;

        const newsourceMaster = new SourceMaster( {
            sourceid,
            sourcename,
        });

        const savedsourceMaster = await newsourceMaster.save().catch((error:any) => {
            console.log(error);
        });

        console.log(newsourceMaster);

        return NextResponse.json({
            message:"source master created Successfully",
            success: true,
            newsourceMaster
        })

    } catch ( error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

export async function GET() {
    try {
        const source = await SourceMaster.find();
        return NextResponse.json({
            source
        })

    } catch ( error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}