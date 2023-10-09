import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import prisma from "@/lib/prismadb";

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();

    const hashedPassword = await bcrypt.hash(password, 12);

    // const user = await prisma.user.create({
    //   data: {
    //     username,
    //     email,
    //     hashedPassword,
    //   },
    // });

    // return NextResponse.json(user);
    return NextResponse.json({ username, email, hashedPassword });
  } catch (err: any) {
    console.log(err, "REGISTRATION_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
