export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
}

export interface ResearchExperience {
  role: string;
  institution: string;
  advisor?: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Publication {
  id: number;
  authors: string;
  title: string;
  journal: string;
  volumeAndPages?: string;
  year: number;
  doi?: string;
  doiUrl?: string;
  arxiv?: string;
  arxivUrl?: string;
  isFirstAuthor: boolean;
  isCoverArticle?: boolean;
  coverImage?: string;
  thumbnailImage?: string;
  status?: string; // e.g. "Published", "Under Review", "Preprint"
  abstractSummary: string;
  portfolioEmphasis: string[];
  suggestedProjectTitle?: string;
}

export interface Conference {
  id: number;
  authors: string;
  title: string;
  conferenceName: string;
  location: string;
  date: string;
}

export interface Patent {
  id: number;
  title: string;
  patentNumber: string;
  publicationDate: string;
  inventors: string;
  assignee: string;
  link: string;
  country: string; // e.g., "US", "CN", "KR", "PCT"
  abstractSummary: string;
  portfolioEmphasis: string[];
}

export interface Award {
  title: string;
  date: string;
  institution: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: 'Advanced' | 'Intermediate' | 'Familiar' }[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  image: string;
  duration: string;
  role: string;
  collaboration?: string;
  description: string;
  keyDetails: string[];
  achievements: string[];
  publicationId?: number; // link to publications
  publicationIds?: number[]; // multiple links
  patentId?: number; // link to patents
}

export interface MediaExposure {
  id: number;
  title: string;
  source: string;
  date: string;
  description: string;
  link?: string;
  type: 'News' | 'Cover' | 'Achievement';
  detailedParagraphs?: string[];
  keyTakeaways?: string[];
  image?: string;
}
