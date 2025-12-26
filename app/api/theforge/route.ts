import { NextResponse } from "next/server";

let theForgeData: any[] = [];

export async function GET() {
    return NextResponse.json({
        success: true,
        data: theForgeData,
    });
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        theForgeData.push(body);
        return NextResponse.json({
            success: true,
            data: theForgeData,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Invalid data" },
            { status: 400 }
        )
    }
}