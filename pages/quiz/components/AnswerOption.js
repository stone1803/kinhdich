import React from "react";

function AnswerOption(props) {
  return (
    <div className="answerOption flex flex-wrap">
      <button
        type="button"
        id={props.answerType}
        value={props.index}
        className={props.selectedAnswer === props.index ? "selected-btn" : ""}
        onClick={props.onAnswerSelected}
      >
        {props.answerContent}
      </button>
    </div>
  );
}

export default AnswerOption;
