"use client";
import { useState } from 'react';
import styles from './page.module.css';

export default function Page() {
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <main>
      <h1>PSYC 365 Presentation</h1>

      <ul className={styles.authorList}>
        <li>Guy 1, 12345678</li>
        <li>Guy 2, 12345678</li>
        <li>Guy 3, 12345678</li>
      </ul>

      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setActiveTab('intro')}>Introduction</button>
        <button onClick={() => setActiveTab('rationale')}>Rationale</button>
        <button onClick={() => setActiveTab('research-questions')}>Research Questions</button>
        <button onClick={() => setActiveTab('methodology')}>Methodology</button>
        <button onClick={() => setActiveTab('results')}>Results</button>
        <button onClick={() => setActiveTab('discussion')}>Discussion</button>
        <button onClick={() => setActiveTab('conclusion')}>Conclusion</button>
      </nav>

      <section>
        {(
          <div>
            <h2>{activeTab}</h2>
            <p>...</p>
          </div>
        )}
      </section>
    </main>
  );
}