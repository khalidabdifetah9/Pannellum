import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export const POST = async (request) => {
  try {
    // const body = await request.json();

    const post = await prisma.post.create({
      data: {
        title: "tati",
        des: "tatiyana",
        img: "tati.png",
        contact: "tati contacts",
        username: "tati username"
      }
    });

    return new NextResponse("tatiyana",{ status: 201 });
  } catch (e) {
    console.error("API ERROR:", e);

    return NextResponse.json(
      { message: e.message },
      { status: 500 }
    );
  }
};

export const GET = async(request)=>{
  
   try{
    
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts,{status:200})
  }catch(e){
     return NextResponse ("Can't Get The Data",{status:500})
  }
 };