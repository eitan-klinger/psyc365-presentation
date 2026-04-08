"use client";
import { useState } from 'react';
import styles from './page.module.css';

const defaultSection = {
  title: "Unimplemented Tab",
  bodyText: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at accumsan quam. Fusce molestie velit a dui porta faucibus. Mauris feugiat, ante ac aliquam pulvinar, diam ipsum elementum nibh, quis iaculis velit elit tempus est. Duis aliquet arcu ac odio rutrum, id gravida purus pharetra. Nullam ultricies sem eu mi ornare ultricies sed vel odio. Proin non lorem rhoncus, bibendum mi at, interdum ligula. Quisque vel venenatis erat. Maecenas ut tortor leo. Nunc tincidunt varius nulla, vel dictum nulla. Ut porta ipsum elit, vel elementum lectus porttitor ac. Aliquam gravida, risus eu interdum venenatis, odio risus ullamcorper sem, a dapibus lacus diam eget mi. </p>,
  sideContent: <p>Placeholder for right column content.</p>
}

const tabData = {
  intro: {
    ...defaultSection,
    title: "Introduction",
    bodyText: <p className={styles.introText}>Currently, because there is ambiguity in how creativity is assessed in research, finding the neural basis of this function remains a critical challenge. 
      <br />Thus, the authors proposed to use an automated assessment called semantic distancing. 
      <br />To consider this type of assessment, they applied it to find association between individual differences in resting-state networks when participants do a divergent thinking task. 
      <br />Overall, they demonstrate that semantic distancing can be used to demonstrate patterns of resting-state connectivity associated with creative thinking ability</p>
  },
  rationale: {
    ...defaultSection,
    title: "Rationale",
    bodyText: <p className={styles.ratText}>
      <b>Gap 1:</b> <br />
      It is unknown how interactions in resting-state functional connectivity relate to objective assessments of creativity (page 500)
      <br />
      <b>Gap 2:</b> <br />
      It is unclear whether automated assessments like semantic distancing capture functional connectivity similar to human assessments (page 501) 
      </p>,
    sideContent: <p>
      <b>Big Picture Question:</b> <br />
      Can the neural basis of creative thinking be identified by combining weighted degree analysis of resting-state fMRI data with both human and automated creativity assessment (semantic distancing)?
      </p>
  },
  researchquestions: {
    ...defaultSection,
    title: "Research Questions"
  },
  methodology: {
    ...defaultSection,
    title: "Methodology"
  },
  results: {
    ...defaultSection,
    title: "Results"
  },
  discussion: {
    ...defaultSection,
    title: "Discussion"
  },
  conclusion: {
    ...defaultSection,
    title: "Conclusion"
  },

}

export default function Page() {
  const [activeTab, setActiveTab] = useState('intro');

  return (
    <main style={{ padding: '2rem'}}>
      <h1>Creative Connections: Computational Semantic Distance Captures Individual Creativity and Resting-State Functional Connectivity</h1>

      <ul className={styles.authorList}>
        <li>Sean Holiday, 67709436</li>
        <li>Eitan Klinger, 41432253</li>
        <li>Danny Yu, 35770213</li>
      </ul>

      <nav className={styles.navigation}>
        {['intro', 'rationale', 'researchquestions', 'methodology', 'results', 'discussion', 'conclusion'].map((tab) => (
          <button 
            key={tab} 
            className={`${styles.tabButton} ${activeTab === tab ? styles.activeTabButton : ''}`} 
            onClick={() => setActiveTab(tab)}
    >
      {tabData[tab].title}
    </button>
  ))}
</nav>

      <section className={styles.splitLayout}>
        {activeTab in tabData && (
          <>
            <div className={styles.leftColumn}>
            {/* <h2 className={styles.pageTitle}>{tabData[activeTab].title}</h2> */}
              <div className={styles.bodyText}>{tabData[activeTab].bodyText}</div>
            </div>
            
            <div className={styles.rightColumn}>
              {tabData[activeTab].sideContent}
            </div>
          </>
        )}
      </section>
    </main>
  );
}