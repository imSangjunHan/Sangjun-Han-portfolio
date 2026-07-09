import { Education, ResearchExperience, Publication, Conference, Patent, Award, SkillCategory, Project, MediaExposure } from '../types';

export const personalInfo = {
  name: "Sangjun Han",
  koreanName: "한상준",
  title: "Nanophotonics · Metasurfaces · Diffractive Optics · Optical Engineering",
  role: "Postdoctoral Scholar, Mechanical Engineering",
  institution: "University of California, Berkeley",
  location: "Berkeley, CA, USA",
  email: "sangjun.han.contact@gmail.com",
  googleScholar: "https://scholar.google.com/citations?user=4_YaxWMAAAAJ",
  linkedin: "https://www.linkedin.com/in/sangjunhan-optics/",
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
      "Investigation of various optical beam types (e.g., long depth-of-focus beams) optimized for high-speed volumetric additive manufacturing.",
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
    thumbnailImage: "https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/3c37185b01e3f71e40d04b1c8ab34b2c976de49c/2026JourMemSci.jpg",
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
    thumbnailImage: "https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/316fee8e078cf59c43967ea4b3ddb82064dade4a/2026ACSNano.jpg",
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
    thumbnailImage: "https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/316fee8e078cf59c43967ea4b3ddb82064dade4a/2025LSA.jpg",
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
    thumbnailImage: "https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/316fee8e078cf59c43967ea4b3ddb82064dade4a/2024arXiv5.jpg",
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
    thumbnailImage: "https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/316fee8e078cf59c43967ea4b3ddb82064dade4a/2024arXiv2.jpg",
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
    thumbnailImage: "https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/316fee8e078cf59c43967ea4b3ddb82064dade4a/2021AdvMater.jpg",
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
    coverImage: "https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/8d53b5e246797a1a43d7001fcbb5c954b1abaa20/2020ACSNano_Cover_Full.jpg",
    thumbnailImage: "https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/316fee8e078cf59c43967ea4b3ddb82064dade4a/2020ACSNano.jpg",
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
    type: "News",
    image: "https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/d7ad88230865e47fc31e000d28340fc0e7cbe763/newgrapheneb_physorg.jpg",
    detailedParagraphs: [
      "KAIST research team led by Professor Min Seok Jang described a new strategy of designing metamolecules that incorporates two independently controllable subwavelength meta-atoms. This two-parametric control of the metamolecule secures the complete control of both amplitude and the phase of light.",
      "Traditional metasurfaces suffered from coupled amplitude and phase responses, which limited their efficiency and functionality in applications like dynamic holography and active beam steering. When the phase is modified, the amplitude changes, causing high loss and poor imaging reconstruction.",
      "To resolve this, the team introduced two-parametric control using graphene plasmonic metamolecules. Each metamolecule consists of two independently gate-tunable subwavelength meta-atoms. By applying separate voltage biases to these gates, they successfully demonstrated independent tuning of both the phase and amplitude of mid-infrared light."
    ],
    keyTakeaways: [
      "Dual-Gate Metamolecule Design: Incorporates two independently controllable subwavelength meta-atoms within a single metamolecule unit cell.",
      "Complete Amplitude & Phase Control: Achieves a full 360-degree phase modulation with uniform amplitude, or 0-to-100% amplitude modulation at a specific target phase.",
      "Broad Device Applicability: Lays the foundation for ultra-compact, high-speed spatial light modulators, dynamic holograms, and lensless imaging systems."
    ]
  },
  {
    id: 4,
    title: "KAIST research team simplifies active beam steering using single-gate graphene metasurfaces",
    source: "EurekAlert",
    date: "Nov. 2025",
    description: "Press release highlighting Dr. Sangjun Han's first-author publication in Light: Science & Applications. The research demonstrated an active graphene metasurface that switches optical beams between diffraction orders with only a single global gate bias, dramatically reducing control electronic complexity for practical mid-infrared LiDAR.",
    link: "https://www.eurekalert.org/news-releases/1096885",
    type: "News",
    image: "https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/316fee8e078cf59c43967ea4b3ddb82064dade4a/2025LSA.jpg",
    detailedParagraphs: [
      "A KAIST research team led by Professor Min Seok Jang has developed a groundbreaking graphene-based active metasurface that can switch reflected optical beams between specific diffraction orders using a single, global gate voltage bias. This innovative technology dramatically simplifies the control architectures of active wavefront shaping devices.",
      "Conventional active beam steering metasurfaces require dense arrays of individually-addressable control electrodes (pixel-by-pixel voltage tuning). This pixelated approach leads to significant routing overheads, massive interconnect complexity, and high fabrication costs, severely limiting their practical translation to mass market sensors.",
      "To bypass these scaling challenges, the team engineered a tailored resonant system utilizing quasinormal mode (QNM) interference. By carefully tuning the Fermi level of monolayer graphene on a global scale, the metasurface achieves high-efficiency switching of mid-infrared beams between different discrete diffraction states, paving a robust pathway for low-cost, compact, and highly reliable solid-state LiDAR scanners."
    ],
    keyTakeaways: [
      "Single-Gate Architecture: Simplifies beam steering systems by eliminating dense array routing, drastically reducing electronic overheads.",
      "Quasinormal Mode (QNM) Resonance: Leverages custom electromagnetic resonance and mode interference to toggle diffraction states efficiently.",
      "Automotive & LiDAR Integration: Delivers a highly scalable, robust platform for solid-state LIDAR rangefinders, dynamic holograms, and range-sensing systems."
    ]
  }
];

export const projectsList: Project[] = [
  {
    id: "diffractive-optics",
    title: "Diffractive Optics Design & Fabrication",
    tagline: "Shaping light fields for high-resolution, high-speed Volumetric Additive Manufacturing (VAM)",
    category: "Diffractive Optics & Volumetric Additive Manufacturing",
    image: "https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/8d53b5e246797a1a43d7001fcbb5c954b1abaa20/DiffractiveOpticsThumbnails2.png",
    duration: "Apr. 2025 – Present",
    role: "Postdoctoral Scholar / Lead Optical Designer & Fabricator",
    collaboration: "University of California, Berkeley (Taylor Lab)",
    description: "At UC Berkeley, this project focuses on the design, cleanroom nanofabrication, and optical validation of quartz-based diffractive optical elements (DOEs) for volumetric additive manufacturing (VAM). Unlike conventional layer-by-layer additive manufacturing, VAM forms 3D structures by delivering spatially controlled light into a volume of photocurable resin, enabling rapid fabrication of complex geometries. My work involves designing and fabricating microstructured quartz DOEs that shape laser beams into optimized propagation profiles with extended depth of focus. By tailoring the axial and transverse beam structure, this work aims to support sub-micron-scale optical resolution across millimeter-scale printing volumes.",
    keyDetails: [
      "Contributing to the **DARPA AMME / REVAMP** program in Prof. Hayden Taylor's group (UC Berkeley) in collaboration with Lawrence Livermore National Laboratory (LLNL), **focusing on the hardware design, cleanroom fabrication, alignment, and characterization** of advanced DOEs for computed axial lithography (CAL).",
      "Designed and modeled diverse novel optical architectures—including axicons, generalized axicons, lensicon (lens-axicon hybrid), inverted pin beam generator, phase erasers, and amplitude apodizers—to **overcome resolution vs. depth-of-focus trade-offs** in volumetric printing.",
      "Developed **custom wave-propagation models** (Hankel/Fourier-transform, angular spectrum) and full-wave FDTD simulations (Ansys Lumerical) to evaluate beam formation, axial localization, dose efficiency, and alignment tolerances.",
      "Successfully **fabricated centimeter-scale quartz DOEs, experimentally demonstrating** clean Bessel-beam formation with submicron central-lobe FWHM (< 0.674 μm) matching theoretical designs (using ~700 nm minimum feature size on quartz and alternative PDMS-cast prototypes).",
      "Engineered a halftoned aluminum amplitude apodizer to control both phase and amplitude, successfully suppressing transverse sidelobes, and analyzed trade-offs of scanning polygon facets, oblique incidence, and alternative beam-forming configurations."
    ],
    achievements: [],
    publicationIds: []
  },
  {
    id: "active-metasurfaces",
    title: "Active Metasurface Design & Fabrication",
    tagline: "Developing active graphene metasurfaces for advanced mid-IR beam control and complex amplitude modulation",
    category: "Active Flat Optics & Graphene Plasmonics",
    image: "https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/8d53b5e246797a1a43d7001fcbb5c954b1abaa20/ActiveMetasurfaceThumbnails2.png",
    duration: "Mar. 2018 – Feb. 2025",
    role: "Graduate Research Assistant / Ph.D. Candidate",
    collaboration: "KAIST (Jang Lab)",
    description: "This project focused on the design, cleanroom nanofabrication, and optoelectronic characterization of active graphene metasurfaces for mid-infrared wavefront control. Conventional optical modulators typically provide limited control over the complex optical response, making it difficult to independently tune reflection amplitude and phase. To address this challenge, I developed graphene plasmonic active metamolecules based on multi-gated resonators, enabling complete complex amplitude modulation for electrically reconfigurable wavefront shaping and dynamic holography. Building on this platform, I also developed a single-gate electro-optic beam-switching metasurface that controls diffraction through a global voltage bias. This approach significantly simplifies the physical driving architecture compared with conventional reconfigurable flat optics that rely on dense arrays of individually addressed subwavelength electrodes.",
    keyDetails: [
      "Invented an asymmetric electrode-spacing metasurface architecture that translates a uniform, global gate bias into a spatial phase-gradient.",
      "Designed multi-gated graphene plasmonic metamolecules containing independently tunable meta-atoms to decouple reflection phase and amplitude.",
      "Developed a surface admittance and equivalent-circuit-based mapping methodology (comparable to microwave Smith charts) for intuitive metasurface impedance matching.",
      "Fabricated devices in semiconductor cleanrooms using electron-beam lithography, high-uniformity chemical vapor deposition (CVD) graphene transfer, and atomic layer deposition (ALD) of thin-film gate dielectrics.",
      "Assembled a fully automated mid-infrared optical characterization bench integrating Quantum Cascade Lasers (QCLs), Lock-in Amplifiers, and motorized goniometer stages."
    ],
    achievements: [
      "Published first-author paper in Light: Science & Applications (2025) introducing single-gate active beam steering.",
      "Published first-author paper in ACS Nano (2020) on decoupling phase and amplitude, selected as the prestigious Front Cover Article.",
      "Demonstrated complete 360° phase control in the mid-infrared utilizing highly localized graphene plasmon resonances.",
      "Patented the core optoelectronic architectural concepts under a family of patents spanning the US, South Korea, China, and PCT.",
      "Received the Samsung Science & Technology Foundation PD Award and the KAIST Kim Choong-Ki Best Research Achievement Award."
    ],
    publicationIds: [7, 3]
  },
  {
    id: "nano-optics-simulation",
    title: "Nano-Optics Simulation & Computational Modeling",
    tagline: "Developing differentiable electromagnetic solvers and rigorous multi-physics models to accelerate optical discovery",
    category: "Computational Photonics & Machine Learning",
    image: "https://raw.githubusercontent.com/imSangjunHan/Sangjun-Han-portfolio/8d53b5e246797a1a43d7001fcbb5c954b1abaa20/OpticsSImulationThumbnails2.png",
    duration: "2018 – Present",
    role: "Electromagnetic Simulation Expert",
    collaboration: "ML2 Research, KAIST, MIT, Yale, & Caltech",
    description: "This research theme highlights my computational work in nanophotonics, electromagnetic modeling, and physics-based device analysis. My primary contributions include nanoscale field-distribution and hot-spot simulations for multimodal chemo-resistive/SERS gas sensors, as well as diffraction-aware modeling of transmissive metasurfaces for dynamic phase-only modulation. These studies used rigorous electromagnetic analysis to connect device geometry, resonant optical response, and experimentally relevant performance metrics.\nI have also contributed to broader collaborative projects involving Josephson junction spectroscopy, differentiable RCWA simulation for machine-learning-based photonic design, and materials-oriented modeling for polymeric dehydration membranes. Across these works, my role has centered on applying numerical simulation and computational modeling to interpret complex physical mechanisms and guide optical or materials-device design.",
    keyDetails: [
      "Constructed rigorous 3D FDTD simulations of localized surface plasmons (LSPRs) at gold-nanoparticle and metal-oxide nanowire crossings for SERS gas sensing.",
      "Derived mathematical formulations of Quasinormal Modes (QNMs) to interpret active metasurface switching behaviors as interference between resonant and non-resonant responses.",
      "Analyzed the electromagnetic microwave environment of superconducting tunneling microscope (STM) tips to model Josephson junction linewidth broadening.",
      "Contributed to Meent, a fully differentiable RCWA solver, through validation, testing, and bug reporting to improve its reliability for electromagnetic simulation workflows.",
      "Conducted formal analysis and validation of vapor-phase interpenetrated interfaces for high-performance polymeric dehydration membranes."
    ],
    achievements: [
      "Co-authored a high-impact paper in Advanced Materials (2021) combining electrical SnO₂ chemo-resistors with spectroscopic SERS, resolving multi-gas selectivity limits.",
      "Co-authored a paper in ACS Nano (2026) demonstrating dynamic phase-only transmissive modulation via diffraction control.",
      "Published Meent as an open-source project on GitHub with an accompanying arXiv preprint (2024), establishing a free differentiable solver for the optics community.",
      "Co-authored a paper in the Journal of Membrane Science (2026) analyzing vapor-phase interface enhancements."
    ],
    publicationIds: [6, 5, 4, 2, 1]
  }
];
