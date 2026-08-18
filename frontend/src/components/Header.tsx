import React from 'react';

export default function Header() {
  return (
    <header className="p-6 glass mb-8 flex justify-between items-center">
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tighter">
        NEXUS
      </h1>
      <nav>
        <ul className="flex gap-6">
          <li className="hover:text-cyan-400 transition-colors cursor-pointer tracking-widest text-sm uppercase">Home</li>
          <li className="hover:text-cyan-400 transition-colors cursor-pointer tracking-widest text-sm uppercase">Editor</li>
          <li className="hover:text-cyan-400 transition-colors cursor-pointer tracking-widest text-sm uppercase">Settings</li>
        </ul>
      </nav>
    </header>
  );
}
