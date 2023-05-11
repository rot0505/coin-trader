import React, { useEffect, useState } from "react";
import { SurveyFreeText } from "components/SurveyFreeText";
import { getSurveyResult } from "api/index";
import { Question, SurveyResult } from "types";

const Survey: React.FC = () => {
  const [survey, setSurvey] = useState<SurveyResult>({
    survey_title: "",
    created_at: "",
    questions: [],
  });

  useEffect(() => {
    const init = async () => {
      const result = await getSurveyResult();
      setSurvey(result);
    };
    init();
  }, []);

  const getTextQuestions = (): Question[] => {
    return survey?.questions.filter((question: Question) => question.type === "text");
  };

  return (
    <SurveyFreeText textQuestions={getTextQuestions()} />
  );
};

export default Survey;
