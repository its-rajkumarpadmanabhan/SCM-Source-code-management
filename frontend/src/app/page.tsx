import React from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <main className="container mx-auto p-4">
        <Header />
        <div className="glass p-12 text-center mt-20">
          <h2 className="text-5xl font-extrabold mb-4">Welcome to the Future of Coding</h2>
          <p className="text-gray-300">Experience a decentralized, AI-driven environment.</p>
        </div>
      </main>
    </PageWrapper>
  );
}
