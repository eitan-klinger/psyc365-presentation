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
        text: <p >This website serves to communicate the findings of the paper on 
            <ul> <a href="https://direct.mit.edu/jocn/article/33/3/499/95546/Creative-Connections-Computational-Semantic?guestAccessKey=">
            Creative Connections: Computational Semantic Distance Captures Individual Creativity and Resting-State Functional Connectivity, 
            </a></ul>
            published by William Orwig, Ibai Diez, Patrizia Vannini, Roger Beaty, and Jorge Sepulcre, 
            in the Journal of Cognitive Neuroscience on March 1st 2021. </p>
      },
      {
        id: "intro-2",
        text: <p>
            The paper examined whether individual differences in resting-state functional connectivity predict divergent thinking (DT) performance measured outside the scanner (semantic distancing & human rating).
            
            This study applies semantic distance models to automatically and objectively assess DT

            Ambiguity and subjectivity in creative assessment limit progress in identifying neural mechanisms tied with creativity, motivating the use of automated semantic distance measures as an object assessment of divergent thinking. 

            Overall, they demonstrate that semantic distancing can be used to demonstrate patterns of resting-state connectivity associated with creative thinking ability

        </p>,
        sideContent: <p>Placeholder</p>
      }
    ]
  },
  rationale: {
    title: "Rationale",
    sections: [
      {
        id: "prior-research1",
        title: "Prior Research",
        text: <p>
            Prior neuroimaging studies have identified interactions between the Default Mode Network (DMN) and executive control networks as being associated with creative thinking. For instance, resting-state studies have found that individuals with greater fluctuations in DMN connectivity tend to score higher on divergent thinking tasks (Feng et al., 2019). However, these studies have largely relied on human ratings as a measure of creativity, which carries two notable limitations: subjectivity, as raters do not always agree on what constitutes a creative response, and labor intensity, as raters are often required to score thousands of responses by hand (Beaty & Johnson, 2020).
        </p>,
      },
      {
        id: "prior-research2",
        text: <p>
            To address these faults within human ratings, semantic distancing has emerged as a promising automated tool for assessing creativity. This technique is based on the associative theory of creativity, which describes creative thought as a byproduct of semantic knowledge (Kenett & Faust, 2019; Mednick, 1962). Semantic distance is computed using a combination of computational semantic models that show high correspondence to human ratings of novelty and creativity, and has been shown to correlate strongly with human judgements of creative quality across a range of divergent thinking tasks (Beaty & Johnson, 2020; Dumas et al., 2020). However, its application has been limited to task-based fMRI studies and has not yet been extended to resting-state data.
        </p>,
        sideContent: <p>Graphic</p>,
      },
      {
        id: "gap",
        title: "The Gap",
        text: <p>
            To date, it is unknown how such automated assessments relate to individual differences in the brain's intrinsic functional architecture (during resting-state) and whether similar neural correlates correspond to human versus automated creativity assessments.
        </p>,
        sideContent: <p>Graphic</p>
      },
      {
        id: "question",
        title: "Big Picture Question",
        text: <p>
            Do resting-state functional connectivity patterns identified by using weighted degree & linked-level (graph theory) analysis relate to creative thinking ability measured through both human ratings and automated semantic distance?
        </p>
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