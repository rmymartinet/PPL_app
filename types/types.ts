export interface SubCard {
  title: string;
  icon: string; // chemin de l'image ou icône
  isNew?: boolean;

  slug: string;
}

export interface CourseCardProps {
  title: string;
  subtitle: string;
  category: string;
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

// app/revision/types.ts
export type SpaceRepetitionRow = {
  id: string;
  title?: string;
  subject?: string;
  subCardTitle?: string;
  phaseTitle?: string;
  lastLearned: string;
  nextRevision: string;
  repetitions: boolean[];
};

export interface FilterAndSortControlsProps {
  currentFilter: "all" | "today";
  setFilter: (value: "all" | "today") => void;
  onSortChange: (key: string, order: "asc" | "desc") => void;
  selectedReps: number[];
  setSelectedReps: React.Dispatch<React.SetStateAction<number[]>>;
  search: string;
  setSearch: (val: string) => void;
}
