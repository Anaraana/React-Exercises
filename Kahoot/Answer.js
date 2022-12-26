import React from "react";

export default function Answers({ questions, current }) {
  return (
    <div>
      {questions[current]?.answers.map((a) => {
        return <div className="kahoot-answers">{a.answer}</div>;
      })}
    </div>
  );
}
