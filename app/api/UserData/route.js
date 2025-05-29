import connectMongoDb from '@/lib/MongoDb'
import NewSchema from '@/models/dataModel'
import { NextResponse } from 'next/server';


export async function POST(req){
     const {name,description} = await req.json();
     await connectMongoDb();
     await NewSchema.create({name,description})  
     return NextResponse.json({message:"DATA POSTED SUCCESSFULLY"},{status:200})
}

export async function GET(){
    await connectMongoDb();
    const data =  await NewSchema.find()
    return NextResponse.json({data})
}