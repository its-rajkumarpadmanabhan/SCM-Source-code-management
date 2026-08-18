import React, { useState } from 'react';

export default function AIChat() {
  const [input, setInput] = useState('');
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button>Send</button>
    </div>
  );
}
