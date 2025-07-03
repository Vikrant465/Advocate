import { NextResponse } from "next/server";
import clientPromise from "~/components/mongodb";

type GuestData = {
  name: string;
  phonenumber: string;
  email: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as GuestData;

    const client = await clientPromise;
    const db = client.db("advocate");
    const collection = db.collection("guest_metadata");

    const timestamp = new Date();

    await collection.updateOne(
      { email: body.email },
      {
        $set: {
          name: body.name,
          phonenumber: body.phonenumber,
          timestamp,
        },
      },
      { upsert: true }
    );

    return NextResponse.json({ success: true, message: "Chat saved successfully" });
  } catch (error) {
    console.error("MongoDB Error:", error);
    return NextResponse.json({ success: false, message: "Database error" }, { status: 500 });
  }
}
