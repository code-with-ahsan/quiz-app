export interface QuizQuestion {
  id: string;
  correctAnswerId: string;
  answers: Record<string, string>;
  asked?: boolean;
  question: string;
}
