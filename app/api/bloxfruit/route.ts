import { NextResponse } from "next/server"

let bloxFruitData: any[] = []


export async function GET() {
  return NextResponse.json({
    success: true,
    data: bloxFruitData,
  })
}

/* POST: รับข้อมูลจากที่อื่น */
export async function POST(req: Request) {
  try {
    const body = await req.json()

    const payload = {
      id: Date.now(),
      ...body,
      createdAt: new Date().toISOString(),
    }

    bloxFruitData.push(payload)

    return NextResponse.json({
      success: true,
      message: "รับข้อมูลเรียบร้อย",
      data: payload,
    })
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "ข้อมูลไม่ถูกต้อง" },
      { status: 400 }
    )
  }
}
