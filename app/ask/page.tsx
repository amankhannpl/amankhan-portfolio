'use client';

export default function AskPage() {
  return (
    <html>
      <head>
        <title>Aman Khan AI Assistant</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #0e1117;
          }
        `}</style>
      </head>
      <body dangerouslySetInnerHTML={{
        __html: `
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <iframe 
            src="https://meet-aman-portfolio.streamlit.app/?embed=true" 
            style="width:100%; height:100%; border:none; margin:0; padding:0; display:block;"
            allow="camera; microphone; clipboard-read; clipboard-write;"
          ></iframe>
        `
      }} />
    </html>
  );
}