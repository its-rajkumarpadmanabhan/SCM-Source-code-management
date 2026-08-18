import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function AIChat() {
  const [input, setInput] = useState('');
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-6 max-w-md fixed bottom-4 right-4 flex flex-col gap-4"
    >
      <div className="text-white text-sm h-32 overflow-y-auto">AI Assistant Ready...</div>
      <div className="flex gap-2">
        <input 
          className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-white"
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Ask me to code..."
        />
        <button className="bg-cyan-500/50 hover:bg-cyan-500/70 text-white px-4 py-2 rounded">Send</button>
      </div>
    </motion.div>
  );
}
