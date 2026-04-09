import styles from './page.module.css';
import Image from 'next/image';
import EnlargableImage from './EnlargableImage';

const definitions = {
  "neuroscience of creativity": (
    <div className={styles.definitionCard}>
      <h3>Neuroscience of Creativity</h3>
      <p>Disentangling the brain processes that facilitate the generation of novel ideas.</p>
    </div>
  ),
  "creativity": (
    <div className={styles.definitionCard}>
      <h3>Creativity</h3>
      <p>The production of novel and useful ideas to solve problems assessed with tasks of divergent thinking.</p>
    </div>
  ),
  "associative theory of creativity": (
    <div className={styles.definitionCard}>
      <h3>Associative Theory of Creativity</h3>
      <p>Characterizes creative thought as a novel and useful recombination of semantic knowledge </p>
    </div>
  ),
  "lsdf": (
    <div className={styles.definitionCard}>
      <h3>Latent Semantic Distance Factor</h3>
      <p>A combination of computational semantic models that show a high correspondence to human ratings of novelty and creativity (how semantic distance is measured).
      </p>
    </div>
  ),
  "dmn": (
    <div className={styles.definitionCard}>
      <h3>Default Mode Network</h3>
      <p>An area composed of a set of midline and posterior inferior parietal regions and is associated with self-generated thought (i.e. imagination)</p>
    </div>
  ),
  "ecn": (
    <div className={styles.definitionCard}>
      <h3>Executive Control Network</h3>
      <p>A brain system that involves the dorsolateral prefrontal cortex and posterior parietal cortex and is responsible for high-level cognitive processes (i.e. attentional control)</p>
    </div>
  ),
  "dtt": (
    <div className={styles.definitionCard}>
      <h3>Divergent Thinking Tasks</h3>
      <p>
        Tasks which require individuals to produce multiple solutions to open-ended problems as a measure of creativity.
        </p>
    </div>
  ),
  "wd": (
    <div className={styles.definitionCard}>
      <h3>Weighted Degree</h3>
      <p>
        A measurement technique that provides a measure of centrality to quantify the importance of each node (brain region) within the brain.
        </p>
    </div>
  ),
  "lla": (
    <div className={styles.definitionCard}>
      <h3>Linked-level Analysis</h3>
      <p>
        Measures the strength of connections between brain regions.</p>
    </div>
  ),
  "cfa": (
    <div className={styles.definitionCard}>
      <h3>Confirmatory Factor Analysis</h3>
      <p>
        An equation-modeling technique to test whether observed data fits a pre-defined theoretical model.
      </p>
    </div>
  ),
  "dt": (
    <div className={styles.definitionCard}>
      <h3>Divergent Thinking</h3>
    </div>
  ),
  "aut": (
    <div className={styles.definitionCard}>
      <h3>Alternative Uses Task</h3>
    </div>
  ),
  "gv": (
    <div className={styles.definitionCard}>
      <h3>Visiospatial Intelligence</h3>
    </div>
  ),
  "wd": (
    <div className={styles.definitionCard}>
      <h3>Weighted Distance</h3>
    </div>
  )
}

const llc_graphic = (
  <div>
  <EnlargableImage
    src="/graphics/lla-connectivity.png"
    alt="Figure showing the link-level functional connectivity strength of the connections between brain regions"
  />
  <p className={styles.figText}>
    Strength of connectivity within the primary visual cortex was negatively correlated with DT. Projections from the precuneus to the right inferior occipital and temporal cortices were positively correlated with DT 
  </p>
  </div>
)

const brain_region_graphic = (
  <div>
    <EnlargableImage
      src="/graphics/brain-regions.png"
      alt="Brain regions correlated with divergent thinking and human ratings"
    />
    <p className={styles.figText}>
      Brain regions negatively correlated with divergent thinking and human ratings
    </p>
  </div>
)

const dts = (
  <div>
    <EnlargableImage
      src="/graphics/dts.png"
      alt="Scatterplot"
    />
    <p className={styles.figText}>
      Consistency between human ratings of divergent thinking and semantic distance
    </p>
  </div>
)

const data_coll = (
  <div>
    <EnlargableImage
      src="/graphics/task-procedure.png"
      alt=""
    />
  </div>
)

const sem_dis = (
  <div>
    <EnlargableImage
      src="/graphics/sem-dis.svg"
      alt=""
    />
  </div>
)

export const getTabData = (setDef, clearDef, toggleDef) => {

  const Term = ({ children, defKey }) => (
    <span 
      className={styles.vocabWord}
      onMouseEnter={() => setDef(definitions[defKey])}
      onMouseLeave={clearDef}
      onClick={() => toggleDef(definitions[defKey])}
    >
      {children}
    </span>
  );

  return {
    intro: {
      title: "Introduction",
      sections: [
        {
          id: "welcome",
          title: "Group 16",
          text: <p>
            Welcome! We are Danny, Eitan, and Sean and we have developed this website to showcase our PSYC 365 project. 
            </p>
        },
        {
          id: "intro-1",
          text: 
          <div>
              <p>This website serves to communicate the findings of the paper: </p>
              <div style={{ paddingLeft: '1rem'}}>
                  <a href="https://direct.mit.edu/jocn/article/33/3/499/95546/Creative-Connections-Computational-Semantic?guestAccessKey=">
                      Creative Connections: Computational Semantic Distance Captures Individual Creativity and Resting-State Functional Connectivity
                  </a>
              </div>
              <p>published by William Orwig, Ibai Diez, Patrizia Vannini, Roger Beaty, and Jorge Sepulcre, 
              in the Journal of Cognitive Neuroscience on March 1st 2021. </p>
          </div>
        },
        {
          id: "intro-2",
          text: <p>
              Identifying the neural markers of 
              creativity 
              is a heavily researched topic in cognitive neuroscience. 
              The paper makes a major contribution to this field by addressing a key challenge: the ambiguity surrounding how creativity is assessed. 
              The authors propose an objective and computational solution&mdash;semantic distancing&mdash;that not only addresses these ambiguities but also has been shown to successfully capture individual differences in resting-state networks associated with creativity. 
          </p>,
        },
        {
          id: "overview",
          title: "Overview",
          text: <div>
            <p>
              In past literature, creativity has been defined as the production of novel and useful ideas to solve problems. In cognitive neuroscience, creativity is commonly assessed with tasks of divergent thinking (DT) which requires the production of multiple solutions to open-ended problems. A classic test to measure DT is the Alternative Uses Task (AUT). In this task, participants are prompted to generate alternative uses of an object, with their responses being graded by trained human raters.  Researchers have since used these human-rated DT scores to investigate the neural basis of creativity. 
            </p>
          </div>
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
              Prior neuroimaging studies have identified interactions between the <Term defKey="dmn">Default Mode Network (DMN)</Term> and <Term defKey="ecn">executive control networks</Term>
              as being associated with creative thinking. For instance, resting-state studies have found that individuals with greater fluctuations in DMN
              connectivity tend to score higher on <Term defKey="dtt">divergent thinking tasks</Term> (Feng et al., 2019). However, these studies have largely relied on human ratings as a measure of creativity, which carries two notable limitations: <i>subjectivity</i>, as raters do not always agree on what constitutes a creative response, and labor <i>intensity</i>, as raters are often required to score thousands of responses by hand (Beaty & Johnson, 2020).
          </p>,
        },
        {
          id: "prior-research2",
          text: <p>
              To address these faults within human ratings, semantic distancing has emerged as a promising automated tool for assessing creativity. This technique is based on the associative theory of creativity, which describes creative thought as a byproduct of semantic knowledge (Kenett & Faust, 2019; Mednick, 1962). Semantic distance is computed using a combination of computational semantic models that show high correspondence to human ratings of novelty and creativity, and has been shown to correlate strongly with human judgements of creative quality across a range of divergent thinking tasks (Beaty & Johnson, 2020; Dumas et al., 2020). However, its application has been limited to task-based fMRI studies and has not yet been extended to resting-state data.
          </p>,
        },
        {
          id: "gap",
          title: "The Gap",
          text: <p>
              It is unknown how individual differences during resting state can relate to automated assessments and whether similar automated creativity assessments will produce the same neural correlates as human assessments.
          </p>,
        },
        
      ]
    },
    researchquestions: {
      title: "Research Questions",
      sections: [
        {
          id: "questions",
          text: 
          <div>
          <h2>Big Picture Question</h2>
          <p>
              Can automated creativity assessments replace human assessments in <Term defKey="dtt">DT tasks</Term>?
              </p>
          <h2>Research Question</h2>
          <p>
            Do resting-state functional connectivity patterns identified by using 
            <Term defKey="wd">weighted degree</Term> 
            & 
            <Term defKey="lla">linked-level (graph theory) analysis</Term>
            relate to creative thinking ability measured through both human ratings and automated semantic distance? 
          </p>
          </div>
        },
        {
          id:"hypothesis1",
          title:"Hypothesis",
          text: <p>
            It is important to note that the study is both <u>correlational</u> and <u>exploratory</u>. 
            It is correlational as the study uses Pearson correlation coefficients and linear regression techniques to find associations between creativity scores and brain connectivity. At the same time, it is exploratory as the authors are interested in seeing how individual differences in resting-state networks are associated with a computational method of scoring, not seeking to manipulate specific tasks.
          </p>
        },
        {
          id:"hypothesis2",
          title:"Hypothesis",
          text: 
            <div>
              <p>
                The authors' hypothesis in regards to the use of automated creativity assessments: 
              </p>
              <div style={{ paddingLeft: '1rem'}}>
                <b>
                  Semantic distance measures will capture individual differences in divergent thinking ability similar to human creativity ratings and therefore show comparable associations with resting-state brain connectivity. 
                </b>
                </div>
            </div>
        }
    ]},
    methodology: {
      title: "Methodology",
      sections: [
        {
          id: "participants",
          title: "Participants",
          text: <p>
            The study used data collected from a larger study on individual differences in creativity and imagination. From the dataset, 177 participants from the University of North Carolina, Greensboro and members of the community were used. Of those university students, those with an art, music, or science major were oversampled to represent individuals coming from creative backgrounds. Two participants were excluded from the final sample due to distortion of structured data, resulting in a final sample of 175 participants (127 women, mean age = 22.67 years). 
          </p>
        },
        {
          id: "tasks-overview",
          title: "Procedure - Tasks",
          text: 
            <div>
              <p>
                <Term defKey="dt">DT</Term> performance was assessed using the <Term defKey="aut">AUT</Term> across two formats. 
                The first was a <i>separate task-based fMRI scan</i>, whereas the second was on a computer outside the scanner. 
                The AUT is a classic test to measure DT, where participants are prompted to think of alternative uses for a common object. 
              </p>
              {data_coll}
            </div>
        },
        {
          id: "tasks-1",
          title: "Procedure - Tasks",
          text:
            <div>
              <p>
                In the task-based fMRI session, participants had 12 seconds to think of a single alternative use for a list of 23 objects, with 5 seconds to verbally report each of their responses. 
                <br />
                In the computer-based assessment, participants had 3 minutes to generate as many alternative uses for two objects (box and rope) as possible. 
              </p>
            </div>
        },
        {
          id: "tasks-2",
          title: "Procedure - Tasks",
          text:
            <div>
              <p>
                Finally, participants completed a test of visuospatial intelligence (Gv) to measure the ability to mentally manipulate visual stimuli assessed through three tasks: paper-folding, block-rotation, and cube comparisons. This served as a control measure to demonstrate that semantic distance captures creative thinking independently of general intelligence.
                <br/>
                Participants also underwent a 5-minute resting-state scan on a 3 T Siemens MRI system, during which they were instructed to close their eyes, relax, but be awake. It is unclear from the study description of when the resting-state scan occurred. 
                </p>
            </div>
        },
        {
          id: "scoring",
          title: "Procedure - Scoring",
          text: <p>
            Both the fMRI and lab-based divergent thinking responses were scored for creative quality by four trained human raters who independently scored the creative quality of each response through qualities of uncommonness, remoteness, and cleverness. Each quality was judged on a scale from 1 (<i>not at all creative</i>) to 5 (<i>very creative</i>). The responses were further scored by computational models using semantic distance. 
          </p>
        },
        {
          id: "semantic dist",
          title: "Measurement of Semantic Distance",
          text: <p>
            In natural language processing (NLP), words can be represented as vectors in a semantic space where similar words are located closer together. Semantic distance refers to how far apart two concepts are in this space. Connecting back to this study, greater distance between an object and a participant's alternative use indicates increased originality in divergent thinking. 
            <br/>
            SemDis estimates this semantic distance between an <Term defKey="aut">AUT</Term> object and a participant's response by leveraging five NLP models, and averaging all of their distance scores together to produce an automated originality measure.
          </p>,
          sideContent: sem_dis
        },
        {
          id: "variables-disclaimer",
          title: "Experimental Variables",
          text: <p>
            In noting that the experiment is both exploratory and correlational, the study does not manipulate variables to observe effects, and as such have no independent or dependent variables. 
          </p>
        },
        {
          id: "variables",
          title: "Experimental Variables",
          text: 
          <div>
            <p>
              The primary variables used to predict differences in brain connectivity were measures of divergent thinking measured through:
            </p>
            <ol>
              <li>
                Semantic Distance: An objective, automated score calculated by computational models that measures the distance between an object and the participant's creative response.
              </li>
              <li>
                Human Ratings of Creativity: A subjective score provided by trained human raters who evaluated the creative quality of between an object and the participant's creative response.
              </li>
            </ol>
            <p>
              The authors further measured for <Term defKey="gv">Gv</Term> as a control. 
            </p>
          </div>
        }

      ]
    },
    results: {
      title: "Results",
      sections: [
        {
          id: "relationship",
          title: "Relationship Between Semantic and Human Creativity Ratings",
          text: <div>
            Using a <Term defKey="cfa">confirmatory factor analysis (CFA)</Term> that 
            measured semantic distance, human creative ratings, and <Term defKey="gv">Gv</Term>, the authors discovered a strong correlation (r = 0.81, p &lt; 0.001) between semantic distance and human creative ratings, indicating a high degree of overlap between the two (as displayed in Figure 3). In addition, Gv was found to be significantly correlated with human creativity (r= 0.46, p &lt; 0.001) but not semantic distance (r = 0.11, p = 0.29). This indicates that automated assessments of creativity, like semantic distance, share less variance with general cognitive behavior than human ratings.
          </div>,
          sideContent: dts
        },
        {
          id: "brain-areas",
          title: "Brain Areas Associated with Divergent Thinking",
          text:
          <div>
            <p>
              Using a weighted degree (WD) analysis, <Term defKey="dt">DT</Term> semantic distance was found to be negatively correlated with weighted degree of voxels in the occipital cortex, the parietal-occipital, and temporal regions. There were no positive associations between weighted degree and DT. 
            </p>
            <p>
              Furthermore, WD analysis with the human ratings of  DT revealed a 51% overlap in shared voxels between the two maps. Human ratings of DT were negatively correlated with WD of voxels in the occipital cortex and right temporal regions. WD of the right temporal pole was negatively associated with DT. There were no positive associations between WD and human ratings of DT. 
            </p>
          </div>,
          sideContent: brain_region_graphic
        },
        {
          id: "connectivity1",
          title: "Individual Connectivity Patterns and Divergent Thinking",
          text: <div>
            <p>
              A link-level analysis was used to discover brain regions associated with semantic distance of <Term defKey="dt">DT</Term>. Strength of connectivity between primary visual areas and the precuneus was negatively associated with DT. A similar connection was found with human ratings of DT, where connectivity across the occipital cortex and projection to the right primary motor and somatosensory areas were negatively associated with human ratings of DT
            </p>
          </div>,
          sideContent: llc_graphic
        },
        {
          id: "connectivity2",
          title: "Individual Connectivity Patterns and Divergent Thinking",
          text: <div>
            <p>
              In addition, projections from the precuneus to the right inferior occipital cortex (fusiform), right inferior temporal, and occipital cortices were positively correlated with <Term defKey="dt">DT</Term> semantic distance. No positive associations were found with human ratings of DT. 
            </p>
            <p>
              This means that semantic distance shows a positive association between individual connectivity strength and DT, which human ratings do not reveal. 
            </p>
          </div>,
          sideContent: llc_graphic
        }
      ]
    },
    discussion: {
      title: "Discussion",
      sections: [
        {
          id: 'discussion',
          title: 'Discussion',
          text: <div>
            <p>
              The study shows that the use of semantic distance can reliably reflect neural differences in measuring <Term defKey="dt">DT</Term> performance, providing future researchers with an objective and automated assessment that may prove to be more reliable than subjective human raters. In addition, the study found that rather than one brain region being responsible for creativity, it instead emerges through a balance of connectivity between sensory systems and the precuneus, reinforcing the view that the neuroscience of creativity should be studied through a systems approach. Finally, the study suggests that more work is needed to validate their findings on positive associations between DT and connectivity with the precuneus to the right inferior temporal regions and the negative associations between resting-state connectivity in the occipital cortex and DT, to discover how such associations are involved in generating creative thought. 
            </p>
          </div>
        },
        {
          id: 'interp1',
          title: 'Interpretation 1: Creativity is linked to less reliance on raw sensory input',
          text: <div>
            <p>
              The authors argue that people with higher <Term defKey="dt">DT</Term> (people who are more creative) are more prone to engage in internally directed cognition in the absence of an external task. These people show reduced connectivity in the primary visual areas which suggests a shift away from what the immediate visual input is. They connect this to the phenomenon of perceptual decoupling, which is the ability to disengage from the attention from perception. 
            </p>
            <p>
              As such, the authors believe that creativity depends on the integration of selective information, rather than greater holistic connectivity. By contrasting the lower connectivity in basic visual regions with the stronger connectivity between higher-level visual areas, they believe that this pattern demonstrates a suppression of low-level sensory noise and enhances communication between abstract processing and integration systems. 
            </p>
          </div>
        },
        {
          id: 'interp2',
          title: "Interpretation 2: The precuneus' role is in coordination",
          text: <div>
            <p>
              Given that the linked-level analysis showed that the precuneus is both positively and negatively associated with <Term defKey="dt">DT</Term>, where it had stronger links with higher order visual areas, which supports the generation and integration of ideas, but also weaker links with primary sensory organs like the primary visual cortex, which indicates reduced constraint from perception. Based on this, the authors intercept the precuneus as a multimodal integration hub and that is also responsible for creative problem solving.
            </p>
          </div>
        },
        {
          id: 'interp3',
          title: "Interpretation 3: Semantic distance captures variance in creativity",
          text: <div>
            <p>
              Although previous studies of task-based and resting-state data have found that default mode network activity contributes to idea generation and where executive control networks are the top-down process to meet external constraints, the current study did not reflect this interaction. This leads the authors to interpret that the use of semantic distance measures captures a different dimension of creativity that previous studies do not account for. 
            </p>
          </div>
        },
      ]
    },
    conclusion: {
      title: "Conclusion",
      sections: [
        {
          id: 'strengths',
          title: "Strengths",
          text: <div>
            <ol>
              <li>
                <u>Large Sample Size</u>: With 175 participants after exclusion, the results are backed with high power when establishing functional connections between the brain associated with divergent thinking. Furthermore, certain participants were oversampled (by major) to discover the qualities (creativity) the study was examining. 
              </li>  
              <li> 
                <u>High Construct Validity</u>: Semantic distancing has high construct validity for creativity. Based on the results from <Term defKey="cfa">CFA</Term>, a strong correlation (r = 0.81) was found to be statistically significant between human ratings and semantic distancing.
              </li>
              <li>
                <u>High Discriminant Validity</u>: Semantic distancing has discriminant validity with <Term defKey="gv">Gv</Term>. The correlation between semantic distancing Gv was weak (r = 0.21) and statistically insignificant, further cementing the argument that semantic distancing reliably only measures divergent thinking. 
              </li>
            </ol>
          </div>
        },
        {
          id: "weaknesses",
          title: "Weaknesses",
          text: 
          <div>
            <ol>
              <li>
                <u>Noise in Resting-state fMRI Data</u>: 
                Because participants are at rest and not tasked in any way, their mood or state of mind cannot be controlled even despite having a large sample size.
              </li>  
              <li> 
                <u>Quality of Ideas is only a Subset of Creativity</u>: 
                Semantic distance focuses only on the creative quality of ideas, thus this measurement reflects a limited view into the cognitive basis in creativity. Depending on other methods of operationalization, the use of semantic distance may be less applicable. 
              </li>
              <li>
                <u>No Benchmark for <Term defKey="wd">WD</Term> maps</u>: 
                  Despite the observed overlap between WD maps generated from human ratings and semantic distance of 51% of common voxels, there is no standardized magnitude for determining whether that overlap is significant, nor is there a clear explanation for its function. 
              </li>
            </ol>
          </div>
        },
        {
          id: "rigor",
          title: "Rigour & Appropriateness of Methods",
          text: <div>
            <p>
              The methods selected to examine resting-state brain connectivity in relation to divergent thinking were appropriate:
            </p>  
            <ul>
              <li>
                Resting-state fMRI with weighted degree and link-level analysis allowed researchers to examine both global network properties and specific functional connections associated with divergent thinking performance. 
              </li>
              <li>
                Furthermore, <Term defKey="cfa">CFA</Term> was an appropriate statistical method to test whether semantic distance and human creativity ratings reflected a shared latent construct, revealing a strong latent correlation between the two measures (r = .81, p &lt; 0.001). This supports semantic distancing as a reliable and valid metric of creativity.  
              </li>
            </ul>
          </div>
        },
        {
          id: 'findings',
          title: "Do the Authors' Conclusion Follow From the Findings?",
          text: <div>
            <p>
              The authors conclusions follow findings from past studies and data from their own study. 
            </p>
            <p>
              The finding that reduced occipital connectivity is associated with higher divergent thinking is consistent across both semantic distance and human ratings, which strengthens the reliability of the result. The perceptual decoupling interpretation is grounded in prior literature, giving it theoretical backing. 
            </p>
            <p>
              The conclusion about precuneus connectivity being positively associated with divergent thinking also follows reasonably from the link-level findings, and is consistent with the precuneus being a known hub of the <Term defKey="dmn">DMN</Term> involved in multimodal integration.
            </p>
            <p>
              Given the correlational and exploratory nature of the study, the author did well in isolating data points that did not match prior research and offered sufficient reasoning on why such differences may have occurred due to differences in methodology. 
            </p>
          </div>
        },
        {
          id: 'future',
          title: "Future Directions",
          text:
          <div>
            <p>
              While this study identifies correlation between resting-state connectivity and <Term defKey="DT">DT</Term> performance, it is not clear whether these brain regions play a casual role in creativity. Neuromodulation techniques, such as Transcranial Magnetic Stimulation, could test whether manipulating activity in these identified regions leads to significant changes in DT performance. 
            </p>
            <p>
              DT represents only one operationalized component of creativity. Thus, it is worth investigating how well semantic distance measures predict creativity across different tasks outside of divergent thinking.
            </p>
            <p>
              The authors theorize that the negative association between occipital cortex connectivity and divergent thinking is potential evidence for perceptual decoupling. While this explanation is plausible, future research should verify this. 
            </p>
          </div>
        },
        {
          id: 'takehome',
          title: "Take Home Message",
          text:
          <div>
            <ol>
              <li>
                It is possible for automated measures to be aligned closely with human creativity judgements, with semantic distancing having been demonstrated to be a reliable method for objectively assessing divergent thinking.
              </li>
              <li>
                Performance in divergent thinking is associated with specific patterns of resting-state brain connectivity. The identified connections between the precuneus and right inferior temporal regions and weaker connectivity within occipital networks, this suggests that creativity reflects a large-scale network organization
              </li>
            </ol>
          </div>
        }
      ]
    }
  }
}