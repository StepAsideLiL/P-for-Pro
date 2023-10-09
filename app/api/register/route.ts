import bcrytp from "bcrypt";
import { NextResponse } from "next/server";

import prisma from "@/lib/prismadb";

type RequestBody = {
  username: string;
  email: string;
  password: string;
};

export async function POST(request: Request) {
  try {
    const { username, email, password } = (await request.json()) as RequestBody;

    const hashedPassword = await bcrytp.hash(password, 12);
    // const hashedPassword = password;

    const user = await prisma.user.create({
      data: {
        username,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (err: any) {
    console.log(err, "REGISTRATION_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
