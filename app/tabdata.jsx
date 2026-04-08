import styles from './page.module.css';

const defaultSection = {
  title: "Unimplemented Tab",
  sections: [
    {
        id: "default-2",
        text: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at accumsan quam. Fusce molestie velit a dui porta faucibus. Mauris feugiat, ante ac aliquam pulvinar, diam ipsum elementum nibh, quis iaculis velit elit tempus est. Duis aliquet arcu ac odio rutrum, id gravida purus pharetra. Nullam ultricies sem eu mi ornare ultricies sed vel odio. Proin non lorem rhoncus, bibendum mi at, interdum ligula. Quisque vel venenatis erat. Maecenas ut tortor leo. Nunc tincidunt varius nulla, vel dictum nulla. Ut porta ipsum elit, vel elementum lectus porttitor ac. Aliquam gravida, risus eu interdum venenatis, odio risus ullamcorper sem, a dapibus lacus diam eget mi.</p>,
    }]
}

export const tabData = {
  intro: {
    title: "Introduction",
    sections: [
      {
        id: "intro-1",
        text: <p className={styles.introText}>Currently, because there is ambiguity in how creativity is assessed in research, finding the neural basis of this function remains a critical challenge.</p>
      },
      {
        id: "intro-2",
        text: <p className={styles.introText}>Thus, the authors proposed to use an automated assessment called semantic distancing.</p>,
        sideContent: <p>Placeholder</p>
      }
    ]
  },
  rationale: {
    title: "Rationale",
    sections: [
      {
        id: "gap1",
        title: "Gap 1",
        text: <p>It is unknown how interactions in resting-state functional connectivity relate to objective assessments of creativity (page 500).</p>
      },
      {
        id: "gap2",
        title: "Gap 2",
        text: <p>It is unclear whether automated assessments like semantic distancing capture functional connectivity similar to human assessments (page 501).</p>,
        sideContent: <p>Graphic 4: Human vs Automated assessment</p>
      },
      {
        id: "big-picture",
        title: "Big Picture Question",
        text: <p>Can the neural basis of creative thinking be identified by combining weighted degree analysis of resting-state fMRI data with both human and automated creativity assessment?</p>,
        sideContent: <p>Graphic 5: fMRI data visualization</p>
      }
    ]
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
  }
}