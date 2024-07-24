import React from "react";
import { SingleQuestions } from "./SingleQuestions";

export const Questions = ({ questions }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      <div className="questions">
        {questions.map((question) => {
          return <SingleQuestions key={question.id} {...question} />;
        })}
      </div>
    </section>
  );
};
