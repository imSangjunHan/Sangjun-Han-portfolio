import { Education, ResearchExperience, Publication, Conference, Patent, Award, SkillCategory, Project, MediaExposure } from '../types';

export const personalInfo = {
  name: "Sangjun Han",
  koreanName: "한상준",
  title: "Nanophotonics · Metasurfaces · Diffractive Optics · Optical Engineering",
  role: "Postdoctoral Scholar, Mechanical Engineering",
  institution: "University of California, Berkeley",
  location: "Berkeley, CA, USA",
  email: "sangjun.han@berkeley.edu",
  googleScholar: "https://scholar.google.com/citations?user=4_YaxWMAAAAJ",
  github: "https://github.com/sangjunhan-optics",
  avatar: "https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/b3b7a9eaf03705367379d06f2f38c9982ec6eea7/Sangjun%20Han_profile.jpg", // High-quality professional avatar fallback
  office: "5101 Etcheverry Hall, University of California, Berkeley, Berkeley, CA, USA",
  phone: "+1-510-561-3433",
  tagline: "Designing light across scales — from active metasurfaces to diffractive optics for advanced manufacturing.",
  bio: "I am an optical engineering and nanophotonics researcher working at the intersection of diffractive optics, metasurfaces, computational wavefront design, nanofabrication, and optical measurement. My current research at UC Berkeley focuses on designing and fabricating diffractive optical elements for fast, high-resolution volumetric additive manufacturing. My Ph.D. research at KAIST focused on active metasurfaces, graphene plasmonics, complex amplitude modulation, electro-optic beam switching, and electromagnetic analysis of nanophotonic devices.",
  researchInterests: [
    "Metasurfaces and Flat Optics",
    "Diffractive Optical Elements",
    "Nanophotonics and Graphene Plasmonics",
    "Optical Beam Shaping & Wavefront Engineering",
    "Volumetric Additive Manufacturing (3D Printing)",
    "Active Optoelectronic Devices with 2D Materials",
    "Numerical Optimization & Nanophotonic Inverse Design",
    "Fourier- & Hankel-based Wave Propagation Simulations",
    "Automated Optical Characterization Systems"
  ]
};

export const educationList: Education[] = [
  {
    degree: "Doctor of Electrical Engineering",
    field: "Electrical Engineering",
    institution: "Korea Advanced Institute of Science and Technology (KAIST)",
    location: "Daejeon, South Korea",
    period: "Mar. 2020 – Feb. 2025"
  },
  {
    degree: "Master of Electrical Engineering",
    field: "Electrical Engineering",
    institution: "Korea Advanced Institute of Science and Technology (KAIST)",
    location: "Daejeon, South Korea",
    period: "Feb. 2018 – Feb. 2020"
  },
  {
    degree: "Bachelor of Physics",
    field: "Physics",
    institution: "Korea Advanced Institute of Science and Technology (KAIST)",
    location: "Daejeon, South Korea",
    period: "Mar. 2013 – Feb. 2018"
  }
];

export const researchExperiences: ResearchExperience[] = [
  {
    role: "Postdoctoral Scholar",
    institution: "University of California, Berkeley",
    advisor: "Prof. Hayden Taylor",
    location: "Berkeley, CA, USA",
    period: "Apr. 2025 – Present",
    bullets: [
      "Design and fabrication of quartz-based diffractive optical elements (DOEs) for fast, high-resolution volumetric additive manufacturing (VAM).",
      "Investigation of various optical beam types (e.g., long depth-of-focus beams) optimized for high-speed 3D printing.",
      "Numerical simulation of light propagation, diffractive optical systems, and photopolymerization kinetics.",
      "Experimental characterization of generated beam profiles and propagation behavior using customized automated optical systems."
    ]
  },
  {
    role: "Graduate Research Assistant",
    institution: "Korea Advanced Institute of Science and Technology (KAIST)",
    advisor: "Prof. Min Seok Jang",
    location: "Daejeon, South Korea",
    period: "Mar. 2018 – Feb. 2025",
    bullets: [
      "Numerical nanophotonic optimization, experimental demonstration, and quasinormal mode analysis of single-gate electro-optic beam switching metasurfaces.",
      "Development of electronically tunable graphene plasmonic metamolecules enabling independent control of amplitude and phase of reflected mid-infrared light.",
      "Formulated a surface-admittance and equivalent-circuit-based design framework for intuitive metasurface impedance matching.",
      "Performed electromagnetic analysis and numerical validation of a synergistic multimodal gas-sensing platform combining chemo-resistive and surface-enhanced Raman spectroscopy (SERS).",
      "Conducted electromagnetic and circuit-oriented analysis for Josephson junction spectroscopy in scanning tunneling microscopes (STM).",
      "Designed and set up automated optical characterization setups including automated mid-infrared phase-shifting interferometry and beam-steering measurement rigs with QCLs, lock-in amplifiers, MCT detectors, and thermocouple sensors."
    ]
  },
  {
    role: "Undergraduate Research Assistant",
    institution: "Korea Advanced Institute of Science and Technology (KAIST)",
    advisor: "Prof. Min Seok Jang",
    location: "Daejeon, South Korea",
    period: "Jan. 2017 – Feb. 2018",
    bullets: [
      "Explored novel design concepts of active metasurfaces for complex amplitude modulation in reflection mode.",
      "Conducted electromagnetic wave simulations (FDTD, RCWA) of graphene-based optical modulators."
    ]
  }
];

export const publications: Publication[] = [
  {
    id: 1,
    authors: "Daehun Kim, Dahye Ahn, Huiju Kim, Sangjun Han, Sung Gap Im, & Youngmin Yoo",
    title: "Vapor-Phase-Induced Interfacial Interpenetration for High-Performance Polymeric Dehydration Membranes",
    journal: "Journal of Membrane Science",
    volumeAndPages: "751, 125555",
    year: 2026,
    doi: "10.1016/j.memsci.2026.125555",
    doiUrl: "https://doi.org/10.1016/j.memsci.2026.125555",
    isFirstAuthor: false,
    status: "Published",
    abstractSummary: "This work develops a polymeric dehydration membrane strategy based on vapor-phase-induced interfacial interpenetration. The approach uses vapor-phase deposition to form an ultrathin, conformal top layer while preserving the underlying water-swellable polymer layer. The interpenetrated interface improves structural integration between the selective layer and support, targeting high-performance dehydration applications where water-selective transport, membrane stability, and thin-film integrity are critical.",
    portfolioEmphasis: ["Polymeric membrane design", "Vapor-phase processing", "Interfacial engineering", "Dehydration membrane performance", "Contribution area: formal analysis and validation"]
  },
  {
    id: 2,
    authors: "Juyoung Kim, Ruzan Sokhoyan, Minkyoon Yi, Sangjun Han, Harry A. Atwater, & Min Seok Jang",
    title: "Overcoming Barriers to Dynamic Phase-Only Modulation in Transmissive Metasurfaces via Diffraction Control",
    journal: "ACS Nano",
    volumeAndPages: "20(8), 6622–6631",
    year: 2026,
    doi: "10.1021/acsnano.5c13223",
    doiUrl: "https://doi.org/10.1021/acsnano.5c13223",
    isFirstAuthor: false,
    status: "Published",
    abstractSummary: "Dynamic phase-only modulation in transmissive metasurfaces is challenging because the phase and amplitude of transmitted light are often coupled by interference between continuum and resonance modes. This work presents a diffraction-based framework to overcome these constraints. It develops the underlying theoretical model, establishes a theoretical performance bound, and demonstrates proof-of-concept transmissive metasurface designs based on electro-optic modulation. The study shows that diffraction control can enable large phase shifts while maintaining relatively uniform transmission amplitude, supporting applications in wavefront shaping and optical information processing.",
    portfolioEmphasis: ["Dynamic transmissive metasurfaces", "Phase-only modulation", "Diffraction engineering", "Electro-optic wavefront control", "Simulation and data analysis contribution"]
  },
  {
    id: 3,
    authors: "Sangjun Han, Jinseok Kong, Junho Choi, Won Chegal, & Min Seok Jang",
    title: "Single-Gate Electro-Optic Beam Switching Metasurfaces",
    journal: "Light: Science & Applications",
    volumeAndPages: "14, 292",
    year: 2025,
    doi: "10.1038/s41377-025-01967-y",
    doiUrl: "https://doi.org/10.1038/s41377-025-01967-y",
    isFirstAuthor: true,
    status: "Published",
    abstractSummary: "This work demonstrates an active graphene metasurface that switches an optical beam between diffraction orders using only a single global gate bias. Unlike conventional active metasurfaces that require many individually controlled local electrodes, this device simplifies the driving architecture while maintaining strong beam-switching performance. The metasurface operates in the mid-infrared and achieves a large angular switching range by tuning the Fermi level of monolayer graphene. The device design is optimized using a genetic algorithm, and quasinormal mode (QNM) analysis explains the switching mechanism as interference between a gate-tunable resonant mode and a non-resonant background response.",
    portfolioEmphasis: ["First-author publication", "Active graphene metasurfaces", "Single-gate electro-optic beam switching", "Mid-infrared beam control", "Genetic-algorithm-based inverse design", "Nanofabrication and optical measurement", "Quasinormal mode analysis"],
    suggestedProjectTitle: "Single-Gate Beam Switching with Active Graphene Metasurfaces"
  },
  {
    id: 4,
    authors: "Margaret A. Fortman, David C. Harrison, Ramiro H. Rodriguez, Zachary J. Krebs, Sangjun Han, Min Seok Jang, Robert McDermott, Caglar O. Girit, & Victor W. Brar",
    title: "Implementing Josephson Junction Spectroscopy in a Scanning Tunneling Microscope",
    journal: "arXiv preprint (under review)",
    year: 2024,
    arxiv: "2410.03009",
    arxivUrl: "https://arxiv.org/abs/2410.03009",
    isFirstAuthor: false,
    status: "Under Review",
    abstractSummary: "This work advances the implementation of Josephson junction spectroscopy in a scanning tunneling microscope (STM) geometry. The study explores high-capacitance superconducting STM tips and planar Nb-based Josephson junction devices to reduce linewidth, improve elevated-temperature performance, and mitigate thermal-noise and P(E)-broadening effects. The approach aims to enable local microwave spectroscopy as a diagnostic tool for probing microscopic noise sources relevant to superconducting qubits.",
    portfolioEmphasis: ["Electromagnetic and circuit-oriented analysis", "Superconducting spectroscopy platform", "Scanning tunneling microscope integration", "Device physics relevant to quantum information systems"]
  },
  {
    id: 5,
    authors: "Yongha Kim, Anthony W. Jung, Sanmun Kim, Kevin Octavian, Doyoung Heo, Chaejin Park, Jeongmin Shin, Sunghyun Nam, Chanhyung Park, Juho Park, Sangjun Han, Jinmyoung Lee, Seolho Kim, Min Seok Jang, & Chan Y. Park",
    title: "Meent: Differentiable Electromagnetic Simulator for Machine Learning",
    journal: "arXiv preprint",
    year: 2024,
    arxiv: "2406.12904",
    arxivUrl: "https://arxiv.org/abs/2406.12904",
    isFirstAuthor: false,
    status: "Preprint",
    abstractSummary: "Meent is a Python-based differentiable electromagnetic simulator built around rigorous coupled-wave analysis (RCWA). It is designed to connect nanophotonic simulation with machine learning by supporting automatic differentiation and gradient-based optimization. The platform enables applications such as dataset generation for neural operators, reinforcement-learning-based nanophotonic device optimization, and inverse design using gradient-based solvers.",
    portfolioEmphasis: ["Differentiable electromagnetic simulation", "RCWA", "Machine learning for optics", "Nanophotonic inverse design", "Python-based research software"]
  },
  {
    id: 6,
    authors: "Hyeuk Jin Han, Seunghee H. Cho, Sangjun Han, Ji-Soo Jang, Gyu Rac Lee, Eugene N. Cho, Sang-Joon Kim, Il-Doo Kim, Min Seok Jang, Harry L. Tuller, Judy J. Cha, & Yeon Sik Jung",
    title: "Synergistic Integration of Chemo-Resistive and SERS Sensing for Label-Free Multiplex Gas Detection",
    journal: "Advanced Materials",
    volumeAndPages: "33(44), 2105199",
    year: 2021,
    doi: "10.1002/adma.202105199",
    doiUrl: "https://doi.org/10.1002/adma.202105199",
    isFirstAuthor: false,
    status: "Published",
    abstractSummary: "This work introduces a label-free multimodal gas sensor that combines chemo-resistive sensing and surface-enhanced Raman spectroscopy (SERS) in a 3D cross-point multifunctional nanoarchitecture. The system integrates semiconducting SnO₂ nanowire frameworks with dual-functioning Au nanoparticles, enabling enhanced electrical and Raman sensing responses. By combining complementary sensing information, the platform can selectively and quantitatively estimate mixed-gas compositions at sub-100 ppm levels, including mixtures of structurally similar aromatic compounds such as nitrobenzene and toluene.",
    portfolioEmphasis: ["Multimodal sensing", "Chemo-resistive gas sensors", "SERS", "Plasmonic nanoparticles", "Electromagnetic analysis of sensing enhancement"]
  },
  {
    id: 7,
    authors: "Sangjun Han, Seyoon Kim, Shinho Kim, Tony Low, Victor W. Brar, & Min Seok Jang",
    title: "Complete Complex Amplitude Modulation with Electronically Tunable Graphene Plasmonic Metamolecules",
    journal: "ACS Nano",
    volumeAndPages: "14(1), 1166–1175",
    year: 2020,
    doi: "10.1021/acsnano.9b09277",
    doiUrl: "https://doi.org/10.1021/acsnano.9b09277",
    isFirstAuthor: true,
    isCoverArticle: true,
    status: "Published",
    abstractSummary: "This work proposes and analyzes electronically tunable graphene plasmonic metamolecules for complete complex amplitude modulation in the mid-infrared. Each metamolecule consists of two independently gated graphene plasmonic metaatoms, providing the two degrees of freedom needed to independently control the amplitude and phase of reflected light. The work develops a graphical design framework based on surface admittance and impedance, providing intuitive guidelines for metasurface design. The platform is demonstrated through simulations of dynamic beam steering and holographic wavefront reconstruction.",
    portfolioEmphasis: ["First-author publication", "Front Cover Article", "Graphene plasmonics", "Complete amplitude and phase control", "Active metasurfaces", "Surface admittance and equivalent circuit modeling", "Beam steering and holographic wavefront reconstruction"],
    suggestedProjectTitle: "Graphene Plasmonic Metamolecules for Complete Optical Wavefront Control"
  }
];

export const conferences: Conference[] = [
  {
    id: 1,
    authors: "J. Kang, S. Han, J. Kim, S. Lee, and M. S. Jang",
    title: "Free-Space Mid-Infrared Complex Modulation by Dual-Channel Graphene Nanoribbon Metasurfaces",
    conferenceName: "2024 MRS Fall Meeting",
    location: "Boston, USA",
    date: "Dec. 2024"
  },
  {
    id: 2,
    authors: "S. Han, J. Kong, and M. S. Jang",
    title: "Single-gate active beam steering graphene metasurface",
    conferenceName: "2024 MRS Spring Meeting",
    location: "Seattle, USA",
    date: "Apr. 2024"
  },
  {
    id: 3,
    authors: "S. Han, S. Kim, S. Kim, T. Low, V. W. Brar, and M. S. Jang",
    title: "Electrically Tunable Metasurface for Complex Amplitude Modulation",
    conferenceName: "META 2021 The 11th International Conference on Metamaterials, Photonic Crystals and Plasmonics",
    location: "Warsaw, Poland (Online)",
    date: "Jul. 2021"
  },
  {
    id: 4,
    authors: "S. Han, J. Cha, S. Kim, S. Kim, T. Low, V. W. Brar, and M. S. Jang",
    title: "Complete complex amplitude modulation with graphene plasmonic active metamolecules",
    conferenceName: "SPIE Optics + Photonics 2020",
    location: "San Diego, USA (Online)",
    date: "Aug. 2020"
  },
  {
    id: 5,
    authors: "S. Han, S. Kim, J. Y. Kim, J. Park, and M. S. Jang",
    title: "Electronic Tuning of Complex Reflectivity with Graphene-based Metasurface",
    conferenceName: "2019 MRS Fall Meeting & Exhibit",
    location: "Boston, USA",
    date: "Dec. 2019"
  },
  {
    id: 6,
    authors: "S. Han, S. Kim, S. Menabde, S. Kim, T. Low, V. W. Brar, H. Atwater, and M. S. Jang",
    title: "Recent Advances in Mid-Infrared Graphene Plasmonics: Metasurface for Complex Amplitude Modulation and Compact Waveguide Switch",
    conferenceName: "RPGR 2019: Recent Progress in Graphene and 2D Materials Research",
    location: "Matsue, Japan",
    date: "Oct. 2019"
  },
  {
    id: 7,
    authors: "S. Han, S. Kim, S. Menabde, V. W. Brar, H. Atwater, and M. S. Jang",
    title: "Recent Advances in Mid-Infrared Graphene Plasmonics: Metasurface for Complex Amplitude Modulation and Compact Waveguide Switch",
    conferenceName: "META 2019 The 10th International Conference on Metamaterials, Photonic Crystals and Plasmonics",
    location: "Lisbon, Portugal",
    date: "Jul. 2019"
  },
  {
    id: 8,
    authors: "S. Han, H. Ha, and M. S. Jang",
    title: "Electrical tuning of complex reflectivity with graphene-based metasurface",
    conferenceName: "The 9th International Conference on Surface Plasmon Photonics",
    location: "Copenhagen, Denmark",
    date: "May 2019"
  },
  {
    id: 9,
    authors: "J. Park, S. Kim, S. Han, H. Ha, S. Menabde, and M. S. Jang",
    title: "Ultimate light trapping in the free-form MIM plasmonic waveguide",
    conferenceName: "The 9th International Conference on Surface Plasmon Photonics",
    location: "Copenhagen, Denmark",
    date: "May 2019"
  }
];

export const patents: Patent[] = [
  {
    id: 1,
    title: "Optical Display Device Having Variable Conductivity Patterns",
    patentNumber: "US 11747706B2",
    publicationDate: "September 5, 2023",
    inventors: "Min Seok Jang, Sangjun Han, Shinho Kim",
    assignee: "Korea Advanced Institute of Science and Technology (KAIST)",
    link: "https://patents.google.com/patent/US11747706B2/en",
    country: "US",
    abstractSummary: "This patent describes an optical device and manufacturing method based on a multilayer structure containing a lower electrode, an insulating layer, upper electrodes, and variable-conductivity patterns located adjacent to the upper electrodes. The electrode arrangement includes alternating first and second electrodes with asymmetric distances to adjacent electrodes, enabling an engineered optical response. The device is designed for active optical modulation and can be applied to functions such as wavefront control, beam steering, lensing, LiDAR, high-speed communication, and active thermal radiation control.",
    portfolioEmphasis: ["Active optical modulation", "Variable-conductivity pattern design", "Graphene/metasurface-inspired optical device architecture", "Independent control of amplitude and phase in mid-infrared reflection"]
  },
  {
    id: 2,
    title: "광소자 및 그의 제조방법 (Optical Device and Method for Manufacturing the Same)",
    patentNumber: "KR 102730614B1",
    publicationDate: "November 15, 2024",
    inventors: "Min Seok Jang, Sangjun Han, Shinho Kim",
    assignee: "Korea Advanced Institute of Science and Technology (KAIST)",
    link: "https://patents.google.com/patent/KR102730614B1/ko",
    country: "KR",
    abstractSummary: "This Korean patent covers an active optical device and its fabrication method. The device includes a lower electrode, an insulating film, upper electrodes, and variable-conductivity patterns arranged adjacent to the upper electrodes. The specific geometric arrangement of alternating electrodes is designed to improve optical modulation efficiency and enable electronic control over phase, amplitude, polarization, refraction, transmission, or reflection.",
    portfolioEmphasis: ["Korean patent grant", "Active optical device design", "Optical modulation using engineered electrode and conductivity patterns", "Fabrication-oriented device architecture"]
  },
  {
    id: 3,
    title: "Optical Device and Method for Manufacturing the Same (Chinese Grant)",
    patentNumber: "CN 111856783B",
    publicationDate: "March 14, 2025",
    inventors: "Min Seok Jang, Sangjun Han, Shinho Kim",
    assignee: "Korea Advanced Institute of Science and Technology (KAIST)",
    link: "https://patents.google.com/patent/CN111856783B/en",
    country: "CN",
    abstractSummary: "This Chinese patent is part of the same optical-device patent family. It covers an optical device architecture with lower electrodes, insulating layers, upper electrodes, and variable-conductivity patterns. The structural asymmetry in electrode spacing and variable-conductivity pattern geometry enables improved optical characteristics for light modulation.",
    portfolioEmphasis: ["International patent coverage", "Optical modulator structure", "Electrode-pattern-based optical control", "Variable-conductivity material integration"]
  },
  {
    id: 4,
    title: "Optical Element and Method for Manufacturing Same (PCT)",
    patentNumber: "WO 2020218698A1",
    publicationDate: "October 29, 2020",
    inventors: "Min Seok Jang, Sangjun Han, Shinho Kim",
    assignee: "Korea Advanced Institute of Science and Technology (KAIST)",
    link: "https://patents.google.com/patent/WO2020218698A1/en",
    country: "PCT",
    abstractSummary: "This PCT publication describes the international version of the optical-device invention. The invention relates to an optical element and manufacturing method involving lower electrodes, insulating films, upper electrodes, and variable-conductivity patterns. The device architecture uses alternating electrode arrangements and asymmetric spacing to achieve improved optical modulation characteristics.",
    portfolioEmphasis: ["International PCT publication", "Optical element and manufacturing method", "Variable-conductivity optical modulation", "Foundation for later national-phase patent grants"]
  }
];

export const awards: Award[] = [
  {
    title: "Outstanding Ph.D. Thesis Award",
    date: "Mar. 31, 2025",
    institution: "School of Electrical Engineering, KAIST",
    description: "Awarded to the most outstanding doctoral dissertation demonstrating exemplary research contributions and scientific impact in Electrical Engineering."
  },
  {
    title: "Program Directors Award",
    date: "Apr. 21, 2023",
    institution: "Samsung Science & Technology Foundation",
    description: "Prestigious national research recognition for innovative and pioneering scientific achievements under funded Samsung research grants."
  },
  {
    title: "Kim Choong-Ki Award: Best Research Achievement Award",
    date: "Apr. 5, 2021",
    institution: "School of Electrical Engineering, KAIST",
    description: "Awarded to elite graduate researchers showing exceptionally high-impact research publications and experimental accomplishments in honor of semiconductor pioneer Prof. Kim Choong-Ki."
  }
];

export const technicalSkills: SkillCategory[] = [
  {
    title: "Device Fabrication",
    skills: [
      { name: "Develop", level: "Advanced" },
      { name: "O2 plasma ashing", level: "Advanced" },
      { name: "Resist removal", level: "Advanced" },
      { name: "Spin coating", level: "Advanced" },
      { name: "Wafer dicing", level: "Advanced" },
      { name: "Atomic layer deposition (ALD)", level: "Advanced" },
      { name: "Graphene transfer", level: "Advanced" },
      { name: "Metal etching (ICP-RIE; Al)", level: "Advanced" },
      { name: "Metal etching (wet; Al)", level: "Advanced" },
      { name: "Metal thin-film deposition (Thermal evaporator)", level: "Advanced" },
      { name: "Photolithography (Mask Aligner)", level: "Advanced" },
      { name: "Wafer membrane handling", level: "Advanced" },
      { name: "Wire bonding", level: "Advanced" },
      { name: "Metal thin-film deposition (Sputter)", level: "Advanced" },
      { name: "MOS cleaning", level: "Advanced" },
      { name: "Non-MOS cleaning", level: "Advanced" },
      { name: "Photolithography (DUV)", level: "Advanced" },
      { name: "Photolithography (Maskless)", level: "Advanced" },
      { name: "PMDS mold making/casting", level: "Advanced" },
      { name: "Quartz etching (ICP-RIE)", level: "Advanced" },
      { name: "Quartz wafer based fabrication", level: "Advanced" },
      { name: "Si etching (ICP-RIE; Si)", level: "Advanced" },
      { name: "Wafer geometry gauge", level: "Advanced" }
    ]
  },
  {
    title: "Automated Set-up for Optical Measurements",
    skills: [
      { name: "Detector (MCT)", level: "Advanced" },
      { name: "Detector (Mid-IR array detector)", level: "Advanced" },
      { name: "Detector (Thermocouple)", level: "Advanced" },
      { name: "Keithley sourcemeter", level: "Advanced" },
      { name: "Lock-in amplifier", level: "Advanced" },
      { name: "Phase shift interferometry", level: "Advanced" },
      { name: "Probe station", level: "Advanced" },
      { name: "Quantum cascade laser (QCL)", level: "Advanced" }
    ]
  },
  {
    title: "Characterization Equipment",
    skills: [
      { name: "Atomic force microscope (AFM)", level: "Advanced" },
      { name: "Digital optical microscope", level: "Advanced" },
      { name: "Fourier transform infrared spectroscopy (FTIR)", level: "Advanced" },
      { name: "Scattering Scanning Near-field Optical Microscopy (s-SNOM)", level: "Advanced" },
      { name: "Confocal microscope", level: "Advanced" },
      { name: "Scanning electron microscope", level: "Advanced" },
      { name: "Surface profilometer", level: "Advanced" }
    ]
  },
  {
    title: "Simulation Software & Programming",
    skills: [
      { name: "KLayout (Ruby Code)", level: "Advanced" },
      { name: "Lumerical FDTD", level: "Advanced" },
      { name: "MATLAB (Automated optical set-up, Post-processes for the experiments, RCWA, Optimization algorithms, Quasinormal mode analysis)", level: "Advanced" },
      { name: "AutoCAD", level: "Advanced" },
      { name: "COMSOL Multiphysics (Wave optics module)", level: "Advanced" },
      { name: "Python (RCWA, Optimization algorithm)", level: "Advanced" },
      { name: "Wolfram Mathematica", level: "Advanced" }
    ]
  },
  {
    title: "Algorithms & Optimization Methods",
    skills: [
      { name: "Numerical optimization algorithms (Genetic algorithms, BOBYQA)", level: "Advanced" },
      { name: "Rigorous coupled wave analysis (RCWA; Reticolo, S4)", level: "Advanced" },
      { name: "Adjoint Method", level: "Advanced" },
      { name: "Fourier (or Hankel)-based electromagnetic wave propagation simulation (Angular spectrum method)", level: "Advanced" },
      { name: "Gerchberg-Saxton algorithm", level: "Advanced" }
    ]
  }
];

export const mediaExposures: MediaExposure[] = [
  {
    id: 1,
    title: "KAIST research team develops graphene-based metasurface for complete optical phase control",
    source: "Phys.org",
    date: "Feb. 13, 2020",
    description: "Press release highlighting Dr. Sangjun Han's ACS Nano publication on graphene plasmonic metamolecules. The research demonstrated a novel methodology to modulate the amplitude and phase of mid-infrared light independently, paving the way for ultra-compact holograms and beam steering LiDAR devices.",
    link: "https://phys.org/news/2020-02-graphene-based-metasurface-capable-independent-amplitude.html",
    type: "News"
  },
  {
    id: 2,
    title: "ACS Nano Front Cover Feature",
    source: "ACS Publications",
    date: "Jan. 2020",
    description: "Dr. Sangjun Han's research paper, 'Complete Complex Amplitude Modulation with Electronically Tunable Graphene Plasmonic Metamolecules,' was selected as the prestigious Front Cover Article for ACS Nano, Volume 14, Issue 1.",
    type: "Cover"
  },
  {
    id: 3,
    title: "Samsung Science & Technology Foundation Program Directors Award Presentation",
    source: "Samsung Research News",
    date: "Apr. 21, 2023",
    description: "Recognized with the Samsung Science & Technology Foundation PD Award for breakthroughs in active metasurfaces and pioneering beam-steering technologies.",
    type: "Achievement"
  },
  {
    id: 4,
    title: "Publication in Light: Science & Applications: Breakthrough in Single-Gate Active Beam Steering",
    source: "Springer Nature",
    date: "Nov. 2025",
    description: "Dr. Sangjun Han's first-author paper demonstrated switching optical beams between diffraction orders with only a single global gate bias. This work dramatically simplifies the driving architecture of active beam control systems, presenting a monumental leap for practical mid-infrared LiDAR.",
    link: "https://www.nature.com/articles/s41377-025-01967-y",
    type: "News"
  }
];

export const projectsList: Project[] = [
  {
    id: "vam-diffractive-optics",
    title: "Diffractive Optics for Volumetric Additive Manufacturing (VAM)",
    tagline: "Shaping green laser propagation to enable sub-second high-resolution 3D printing",
    category: "Diffractive Optics & 3D Printing",
    image: "https://images.unsplash.com/photo-1615840287214-7fe58a8f668f?auto=format&fit=crop&q=80&w=600&h=450",
    duration: "Apr. 2025 – Present",
    role: "Lead Optical Designer & Fabricator",
    collaboration: "University of California, Berkeley (Taylor Lab)",
    description: "At UC Berkeley, this project addresses the optical design and micro-fabrication of glass-based diffractive optical elements (DOEs) for fast, high-resolution volumetric 3D printing. Traditional layer-by-layer 3D printing is slow. Volumetric additive manufacturing shines a patterned 3D light field into a rotating vial of photopolymer resin, solidifying the entire object simultaneously within seconds. My role is to develop computational phase-shaping algorithms to generate long-depth-of-focus beams, fabricate these quartz DOEs in the cleanroom, and align the complex optical projection setups.",
    keyDetails: [
      "Designed and fabricated micro-structured quartz-based diffractive optical elements in cleanroom facilities.",
      "Developed advanced wave-propagation algorithms using Hankel and Fourier transforms to simulate light propagation through highly refractive resins.",
      "Generated custom optical beams with exceptionally long depth-of-focus to maintain printed feature resolution across the container volume.",
      "Assembled and automated a spatial 3D beam profile characterization setup using precise motorized stages and high-dynamic-range CMOS cameras."
    ],
    achievements: [
      "Reduced volumetric printing time while preserving sub-100-micrometer lateral feature resolution.",
      "Successfully modeled polymerization kinetics in relation to the dynamic 3D light distribution of Bessel and structured optical beams.",
      "Established a high-accuracy, automated beam diagnostics rig to match experimental profiles with numerical angular spectrum propagation models."
    ]
  },
  {
    id: "single-gate-graphene-metasurface",
    title: "Single-Gate Electro-Optic Beam Switching Metasurfaces",
    tagline: "Simplifying active flat optics architecture down to a single global gate bias",
    category: "Metasurfaces & Nanophotonics",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=600&h=450",
    duration: "2022 – 2025",
    role: "First Author / Lead Graduate Researcher",
    collaboration: "KAIST (Jang Lab)",
    description: "Standard beam-steering active metasurfaces require hundreds of individually addressed sub-wavelength electrodes, leading to severe wire-bonding bottlenecks, complex circuit control, and massive parasitics. This research (published in Light: Science & Applications, 2025) solved this fundamental roadblock by proposing and demonstrating an active graphene metasurface that switches an optical beam between diffraction orders using only a single global gate bias. We utilized genetic algorithms for inverse design, fabricating the device with high-uniformity CVD graphene and demonstrating switching in the mid-infrared.",
    keyDetails: [
      "Invented an asymmetric electrode spacing architecture that translates uniform gate bias into custom spatial phase-gradients.",
      "Utilized genetic optimization algorithms coupled with RCWA electromagnetic solvers to find optimal sub-wavelength geometries.",
      "Conducted rigorous Quasinormal Mode (QNM) analysis to mathematically explain the switching mechanism as interference between a tunable resonant mode and a non-resonant background.",
      "Fabricated the device using state-of-the-art lithography, high-quality graphene transfer, and atomic layer deposition (ALD) of gate dielectrics.",
      "Developed an automated mid-infrared optical characterization rig utilizing Quantum Cascade Lasers (QCLs) and lock-in amplifiers."
    ],
    achievements: [
      "Published as a first-author paper in the prestigious journal Light: Science & Applications (Nature Publishing Group, 2025).",
      "Achieved a large angular beam switching angle in the mid-infrared spectral regime.",
      "Eliminated the need for localized sub-wavelength electrode addressing, easing fabrication limits for active metasurfaces."
    ],
    publicationId: 3
  },
  {
    id: "graphene-metamolecules-amplitude-phase",
    title: "Graphene Metamolecules for Complete Complex Optical Control",
    tagline: "Achieving full 360-degree phase modulation and amplitude control in the mid-IR",
    category: "Nanophotonics & Graphene Plasmonics",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=600&h=450",
    duration: "2018 – 2020",
    role: "First Author / Lead Graduate Researcher",
    collaboration: "KAIST, Caltech, & University of Wisconsin-Madison",
    description: "Modulating the phase of light over a full 360-degree range while maintaining constant amplitude is the holy grail of dynamic holography and beam shaping. However, optical resonators inherently couple amplitude and phase. In this project (featured as the Front Cover Article of ACS Nano, 2020), we proposed an electronically tunable graphene plasmonic metamolecule containing two independently gated meta-atoms. This provides two independent degrees of freedom, completely decoupled, enabling arbitrary control over both reflected amplitude and phase. We established an intuitive surface admittance/impedance-based equivalent circuit design framework.",
    keyDetails: [
      "Conceived the multi-gated graphene plasmonic metamolecule concept supporting decoupled complex reflectivity control.",
      "Developed a surface admittance-based graphical design chart analogous to the Smith chart for microwave network engineering.",
      "Performed detailed numerical electromagnetic wave simulations of dynamic beam steering, continuous 2D lensing, and active holographic wavefront reconstructions.",
      "Analyzed the localized surface plasmon resonance (LSPR) properties of patterned graphene nanoribbons under electrostatic doping."
    ],
    achievements: [
      "Published as a first-author paper in ACS Nano (2020) and highlighted as the Front Cover Article.",
      "The research was widely spotlighted in scientific media outlets (Phys.org, KAIST News, etc.) for its pioneering approach to active flat optics.",
      "Successfully patented the technological core under a family of patents in the US, South Korea, China, and PCT.",
      "Received the Kim Choong-Ki Best Research Achievement Award (2021) for this contribution."
    ],
    publicationId: 7
  },
  {
    id: "meent-differentiable-simulation",
    title: "Meent: Differentiable RCWA Electromagnetic Simulator",
    tagline: "Connecting nanophotonic simulations to modern machine learning gradient pipelines",
    category: "Simulation & Machine Learning",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600&h=450",
    duration: "2023 – 2024",
    role: "Co-Developer / Simulation Expert",
    collaboration: "ML2 Research & KAIST",
    description: "Electromagnetic simulations like RCWA (Rigorous Coupled-Wave Analysis) are critical for analyzing periodic nanostructures. However, standard solvers are black boxes that do not supply gradients, hindering machine learning and gradient-based optimization. In this collaborative project, we developed 'Meent', an open-source, fully differentiable, Python-based RCWA solver supporting JAX and PyTorch backends. Meent allows users to calculate analytical gradients of optical properties with respect to geometric parameters in milliseconds, enabling ultra-fast inverse design, reinforcement learning, and neural operator training.",
    keyDetails: [
      "Co-authored and integrated mathematical solvers for differentiable RCWA algorithms.",
      "Optimized Fourier-series matrix calculations and eigenvalue computations to maintain stability during backpropagation.",
      "Built rigorous validation comparisons against commercial tools like Lumerical FDTD and Reticolo, ensuring absolute accuracy.",
      "Demonstrated end-to-end gradient-based optimization of complex metasurface lenses and beam splitters in seconds."
    ],
    achievements: [
      "Published as an open-source codebase on GitHub with an accompanying arXiv preprint (2024).",
      "Provided the nanophotonics community with a free, high-performance, machine-learning-compatible RCWA simulation engine.",
      "Enabled novel reinforcement-learning-based searches of large-scale optical metamaterial parameter spaces."
    ],
    publicationId: 5
  },
  {
    id: "multimodal-gas-sensor",
    title: "Synergistic Chemo-Resistive and SERS Multimodal Sensor",
    tagline: "Enhancing gas sensor selectivity using SnO₂ nanowires and Au plasmonic nanoparticles",
    category: "Sensing & Spectroscopy",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600&h=450",
    duration: "2020 – 2021",
    role: "Electromagnetic Analysis Lead",
    collaboration: "KAIST, MIT, and Yale University",
    description: "Chemo-resistive gas sensors are highly sensitive but struggle with selectivity, while SERS (Surface-Enhanced Raman Spectroscopy) provides molecular specificity but lacks simple quantitative response. This project (published in Advanced Materials, 2021) integrated both sensing modalities into a single 3D cross-point nanoarchitecture. I led the optical electromagnetic modeling of the plasmonic hot-spots. By combining the SnO2 metal-oxide nanowire electrical changes with SnO2/Au nanoparticle SERS spectra, we achieved sub-100 ppm selective gas mixture analysis of highly identical molecules like nitrobenzene and toluene.",
    keyDetails: [
      "Constructed 3D finite-difference time-domain (FDTD) models of gold nanoparticle clusters on SnO₂ nanowire crossings.",
      "Simulated localized electric field enhancements (hot-spots) at nanometer-scale gaps to calculate Raman enhancement factors.",
      "Optimized the plasmonic nanoparticle size, shape, and distribution to maximize spatial overlap between electric fields and target gas molecules.",
      "Provided physical insights linking localized plasmon resonances with chemical enhancement mechanisms."
    ],
    achievements: [
      "Published in the high-impact journal Advanced Materials (2021).",
      "Demonstrated quantitative, multiplex, label-free detection of volatile organic compounds (VOCs) and environmental gases.",
      "Proved that combining orthogonal electrical and spectroscopic datasets resolves traditional gas mixtures selectivity bottlenecks."
    ],
    publicationId: 6
  }
];
