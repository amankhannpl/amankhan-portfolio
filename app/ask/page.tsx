export default function AskPage() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', margin: 0, padding: 0 }}>
      <iframe
        src="https://meet-aman-portfolio.streamlit.app/?embed=true"
        style={{ width: '100%', height: '100%', border: 'none' }}
        allow="camera; microphone; clipboard-read; clipboard-write"
      />
    </div>
  );
}