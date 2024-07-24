import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const SingleQuestions = ({ title, info }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="question-btn" onClick={() => setIsActive(!isActive)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};
