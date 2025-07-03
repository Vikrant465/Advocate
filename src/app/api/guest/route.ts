// src/app/api/guest/route.js
import { NextResponse } from 'next/server';
import clientPromise from '~/components/mongodb'; // adjust if needed

export async function POST(req: Request) {
  try {
    const { name, phonenumber, email } = await req.json();

    const client = await clientPromise;
    const db = client.db('advocate');
    const collection = db.collection('guest_metadata');

    const timestamp = new Date();

    await collection.updateOne(
      { email },
      { $set: { name, phonenumber, timestamp } },
      { upsert: true }
    );

    return NextResponse.json({ success: true, message: 'Chat saved successfully' });
  } catch (error) {
    console.error('MongoDB Error:', error);
    return NextResponse.json(
      { success: false, message: 'Database error' },
      { status: 500 }
    );
  }
}
