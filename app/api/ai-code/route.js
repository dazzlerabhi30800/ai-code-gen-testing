import { codeChatSession } from "@/config/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    const result = await codeChatSession.sendMessage(prompt);
    const resp = result?.response?.text();
    return NextResponse.json({ fileData: JSON.parse(resp) });
  } catch (err) {
    return NextResponse.json({
      error: err ? err.message : "Unknown Error",
      status: 500,
    });
  }
}
