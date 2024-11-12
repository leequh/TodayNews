import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const categories = ['Nature', 'Photography', 'Relaxation', 'Vacation', 'Travel', 'Adventure'];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Escape.</h1>
        <nav>
          {/* <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>About</li>
            <li>Contact</li>
          </ul> */}
        </nav>
      </header>
      <div className={styles.hero}>
        <h2>Card News</h2>
      </div>
      <main>
        <div className={styles.cardContainer}>
          {categories.map((category, index) => (
            <div key={index} className={styles.card}>
              <h3>{category}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}