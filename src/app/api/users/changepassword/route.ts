import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect(); 

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {email, currentpassword,newpassword} = reqBody;
        console.log(reqBody);

        //Check user already exists
        const user = await User.findOne({email});

        if(!user) {
            return NextResponse.json({error:"Username or Password is wrong"},{status: 400});
        }

        //check password is correct
        const validPassword = await bcryptjs.compare(currentpassword,user.password);

        if (validPassword) {
            const salt = await bcryptjs.genSalt(10);
            const hasedPassword = await bcryptjs.hash(newpassword,salt);
            user.password = hasedPassword;
            const updateduser = await user.save();
            return NextResponse.json({
                message:"User Password Changed Successfully",
                success: true,
                updateduser
            })
        } else {
            return NextResponse.json({error:"Username or Password is wrong"},{status: 400});
        }

    } catch ( error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}