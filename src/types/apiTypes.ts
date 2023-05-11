export type Question = {
  question_text: string;
  type: string;
  responses: number[] | string[];
};

export type SurveyResult = {
  survey_title: string;
  created_at: string;
  questions: Question[];
};
