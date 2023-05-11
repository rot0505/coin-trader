import React from "react";
import { Question } from "types";
import styles from "./SurveyFreeText.module.scss"

interface SurveyFreeTextProps {
  textQuestions: Question[];
}

const SurveyFreeText: React.FC<SurveyFreeTextProps> = ({ textQuestions }) => {

  return (
    <div className={styles.div}>
      {textQuestions.map((question: Question, index: number) =>
        <div key={index} className={styles.item}>
          {question.question_text}
        </div>)}
    </div>
  );
};

export default SurveyFreeText;
