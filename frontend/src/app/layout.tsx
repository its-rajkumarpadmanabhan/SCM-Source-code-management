import './globals.css';
import AIChat from '../components/AIChat';
import Scene from '../components/Scene';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Scene />
        {children}
        <AIChat />
      </body>
    </html>
  );
}
