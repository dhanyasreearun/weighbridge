import {connect} from "@/dbConfig/dbConfig";
import MaterialMaster from "@/models/materialMasterModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { materialid,materialname,materialunit,materialrate,} = reqBody;

        const newMaterialMaster = new MaterialMaster( {
            materialid,
            materialname,
            materialunit,
            materialrate,
        });

        const savedMaterialMaster = await newMaterialMaster.save().catch((error:any) => {
            console.log(error);
        });

        console.log(newMaterialMaster);

        return NextResponse.json({
            message:"Material master created Successfully",
            success: true,
            savedMaterialMaster
        })

    } catch ( error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

export async function GET() {
    try {
        const material = await MaterialMaster.find();
        return NextResponse.json({
            material
        })

    } catch ( error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}