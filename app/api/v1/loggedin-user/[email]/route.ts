import prisma from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { email: string } }
) {
  try {
    const session = await getServerSession();
    if (!session) {
      const email = params.email;

      const user = await prisma.user.findUnique({
        where: { email },
        select: { id: true, username: true, email: true, role: true },
      });

      return Response.json(user);
    } else {
      return Response.json({
        error: 401,
        message: "Unauthorized server request",
      });
    }
  } catch (err: any) {
    console.log(err, "REGISTRATION_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
