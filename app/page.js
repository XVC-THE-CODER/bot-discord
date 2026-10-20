'use client'
import { useState } from 'react';

export default function Page() {
  const [log, setLog] = useState('');
  
  const daftar = async () => {
    setLog('Sedang daftarin...');
    const res = await fetch('/api/register');
    const json = await res.json();
    setLog(JSON.stringify(json, null, 2));
  };

  return (
    <div>
      <h1>Bot Discord Vercel Ready</h1>
      <p>Setelah set env di Vercel, klik tombol ini:</p>
      <button onClick={daftar} style={{ padding: '12px 20px', fontSize: '16px', background: 'black', color: 'white', borderRadius: '8px' }}>
        DAFTARIN COMMAND /ping & /halo
      </button>
      <pre style={{ background: '#eee', padding: '10px', marginTop: '20px' }}>{log}</pre>
    </div>
  );
  }
