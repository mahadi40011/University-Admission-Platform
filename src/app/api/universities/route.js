import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import University from "@/models/University";

export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const budget = searchParams.get("budget") || 100000;

    const universities = await University.find({
      tuitionFee: { $lte: Number(budget) },
    });

    return NextResponse.json(universities);
  } catch (error) {
    return NextResponse.json(
      { error: "Data fetching failed" },
      { status: 500 }
    );
  }
}
