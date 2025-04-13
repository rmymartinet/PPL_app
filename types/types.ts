export interface SubCard {
  title: string;
  icon: string; // chemin de l'image ou icône
  isNew?: boolean;
}

export interface CourseCardProps {
  title: string;
  subtitle: string;
  status?: "in-progress" | "completed";
  lessonsRead?: number;
  totalLessons?: number;
  qcmDone?: number;
  qcmTotal?: number;
  avgScore?: number;
  lessonsToReview?: number;
  subCards: SubCard[];
}

export interface SubCard {
  title: string;
  icon: string;
  isNew?: boolean;
  avgScore: number;
  lessonsToReview: number;
  keyConcepts: string[];
  lessonsRead: number;
  totalLessons: number;
}
