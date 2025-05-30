import connectMongoDb from "@/lib/MongoDb";
import NewSchema from "@/models/dataModel";
import { NextResponse } from "next/server";

export async function PUT(req,{params}){
    const {id} = params;
    const {name,description} = await req.json();
    try{
       if(!id || !name || !description) return NextResponse.json({message:'ID , NAME , DESCRIPTION must required'},{status:400})
       await connectMongoDb();
       const isUpdated =  await NewSchema.findByIdAndUpdate(id,{name,description},{new:true});
       if(!isUpdated) return NextResponse.json({message:'No user found with That Id'},{status:400})
       return NextResponse.json({message:'UPDATED SUCCESSFULLY'},{status:200})
    }catch(err){
        console.error("ERROR IN UPDATE ",err);
        return NextResponse.json({message:'SERVER ERROR'},{status:500})
    }
   
}

export async function GET(req,{params}){
    const {id} = params
    await connectMongoDb();
    const data =  await NewSchema.findOne({_id:id})
    return NextResponse.json({data},{status:200})
}