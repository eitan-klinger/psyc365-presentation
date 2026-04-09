"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function EnlargableImage({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* The standard image rendered in the right column */}
      <div 
        className={styles.imageThumbnail} 
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
      >
        <Image 
          src={src} 
          alt={alt} 
          width={600} 
          height={400}
          style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
        />
      </div>

      {/* The full-screen overlay rendered when isOpen is true */}
      {isOpen && (
        <div className={styles.lightboxOverlay} onClick={() => setIsOpen(false)}>
          <div className={styles.lightboxContent}>
            <Image 
              src={src} 
              alt={alt} 
              fill 
              style={{ objectFit: 'contain' }} 
              unoptimized
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}