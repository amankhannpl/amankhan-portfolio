import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Python backend url'ini buraya entegre edeceğiz
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
    return NextResponse.json({ 
      reply: "Şu anda sistemlerimde ufak bir güncelleme yapıyorum. Birkaç saniye içinde tekrar sorabilir misin?" 
    });
  }
}