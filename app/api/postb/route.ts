import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

interface PostBody {
  title: string;
  img: string;
  des: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as PostBody;
    const add = await prisma.post.create({
      data: {
        title: body.title,
        des: body.des,
        img: body.img,
      },
    });

    return NextResponse.json({ ok: true, data: add }, { status: 201 });
  } catch (error) {
    console.error("POST /api/postb error:", error);
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }
}
