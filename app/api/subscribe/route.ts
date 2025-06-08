import { client } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email } = body;

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    const result = await client.create({
      _type: "subscriber",
      email,
      subscribedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Subscribed successfully", result },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Something went wrong", details: error.message },
      { status: 500 }
    );
  }
}
