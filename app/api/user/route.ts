import {supabase} from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { data, error } = await supabase
    .from("users")
    .select("id, name, created_at")
    .single();

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}
