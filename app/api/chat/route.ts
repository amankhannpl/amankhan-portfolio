import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const PYTHON_API_URL = 'https://meet-aman-portfolio.streamlit.app/api/v1/chat'; 

  try {
    const { message } = await request.json();

    const response = await fetch(PYTHON_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: message }),
    });

    if (!response.ok) throw new Error();
    const data = await response.json();

    return NextResponse.json({ reply: data.reply || data.text });
  } catch {
    // English fallback notification for system updates
    return NextResponse.json({ 
      reply: "I am currently performing a quick update on my systems. Eating Mo:Mo HEHE Could you please ask again in a few seconds?" 
    });
  }
}