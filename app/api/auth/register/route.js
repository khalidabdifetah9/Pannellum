import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import bcrypt from "bcryptjs";
export const POST = async (request) => {
  try {
    const body = await request.json();
    const hashedpassword = await bcrypt.hash(body.password,5)
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedpassword,
      },
    });

    return NextResponse.json({message:"User Has Been Created"},{ status:201});
  } catch (e) {
    console.log(e)
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
};
