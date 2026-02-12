import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // 🔍 DEBUG STEP (this is the key part)
  return NextResponse.json({
    hasKey: !!process.env.RESEND_API_KEY,
    keyStart: process.env.RESEND_API_KEY?.slice(0, 5) || "missing"
  });
}
