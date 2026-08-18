import React from 'react';

export default function Header() {
  return (
    <header className="p-6 glass mb-8 flex justify-between items-center">
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tighter">
        NEXUS
      </h1>
      <nav>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Editor</li>
          <li>Settings</li>
        </ul>
      </nav>
    </header>
  );
}
