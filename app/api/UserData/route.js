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

export async function DELETE(req){
    const id = req.nextUrl.searchParams.get('id');
     await connectMongoDb();
     await NewSchema.findByIdAndDelete(id);
     return NextResponse.json({message:'DELETED SUCCESSFULLY'},{status:200})
}