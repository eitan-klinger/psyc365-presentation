"use client";
import { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';
import { tabData } from './tabdata';

export default function Page() {
  const [activeTab, setActiveTab] = useState('rationale');
  
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  
  const sectionRefs = useRef([]);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setActiveSectionIndex(0);
    
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveSectionIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [activeTab]);

  const currentTabData = tabData[activeTab];
  const hasSections = Boolean(currentTabData?.sections);

  const tabHasGraphics = hasSections 
    ? currentTabData.sections.some(section => section.sideContent)
    : false;
    
  return (
    <main style={{ padding: '2rem'}}>
      <h1>Creative Connections</h1>

      <ul className={styles.authorList}>
        <li>Sean Holiday, 67709436</li>
        <li>Eitan Klinger, 41432253</li>
        <li>Danny Yu, 35770213</li>
      </ul>

      <nav className={styles.navigation}>
        {Object.keys(tabData).map((tab) => (
          <button 
            key={tab} 
            className={`${styles.tabButton} ${activeTab === tab ? styles.activeTabButton : ''}`} 
            onClick={() => setActiveTab(tab)}
          >
            {tabData[tab].title}
          </button>
        ))}
      </nav>

      <section className={tabHasGraphics ? styles.splitLayout : styles.singleLayout}>
        {hasSections && (
          <>
            <div className={styles.leftColumnWrapper}>
              
              {/* Only render dots if there are multiple sections */}
              {currentTabData.sections.length > 1 && (
                <div className={styles.dotContainer}>
                  {currentTabData.sections.map((_, index) => (
                    <div 
                      key={index} 
                      className={`${styles.dot} ${activeSectionIndex === index ? styles.activeDot : ''}`}
                    />
                  ))}
                </div>
              )}

              <div className={styles.snapContainer} ref={scrollContainerRef}>
                {currentTabData.sections.map((section, index) => (
                  <div 
                    key={section.id}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    data-index={index}
                    className={styles.snapSection}
                  >
                    {section.title && <h3>{section.title}</h3>}
                    {section.text}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Only render the right column div if the tab requires it */}
            {tabHasGraphics && (
              <div className={styles.rightColumn}>
                {currentTabData.sections[activeSectionIndex]?.sideContent}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}