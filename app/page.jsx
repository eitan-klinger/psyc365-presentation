"use client";
import { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';
import { tabData } from './tabdata';

export default function Page() {
  const [activeTab, setActiveTab] = useState('rationale');
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  
  const sectionRefs = useRef([]);
  const scrollContainerRef = useRef(null);

  const currentIndexRef = useRef(activeSectionIndex);

  useEffect(() => {
    currentIndexRef.current = activeSectionIndex;
  }, [activeSectionIndex]);

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

  const scrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (['INPUT', 'TEXTAREA'].includes(event.target.tagName)) return;

      const currentIndex = currentIndexRef.current;
      const maxIndex = tabData[activeTab].sections ? tabData[activeTab].sections.length - 1 : 0;

      const tabKeys = Object.keys(tabData);
      const currentTabIndex = tabKeys.indexOf(activeTab);
      
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (currentIndex < maxIndex) {
          scrollToSection(currentIndex + 1);
        }
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (currentIndex > 0) {
          scrollToSection(currentIndex - 1);
        }
      } else if (event.key === 'ArrowRight') {
        if (currentTabIndex < tabKeys.length - 1) {
          setActiveTab(tabKeys[currentTabIndex + 1]);
        }
      } else if (event.key === 'ArrowLeft') {
        if (currentTabIndex > 0) {
          setActiveTab(tabKeys[currentTabIndex - 1]);
        }
      }
    };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
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
                      onClick={() => scrollToSection(index)}
                      className={`${styles.dot} ${activeSectionIndex === index ? styles.activeDot : ''}`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        scrollToSection(index);
                      }
                    }}
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