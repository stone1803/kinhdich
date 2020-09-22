import React from 'react';

function QuestionCount(props) {

  return (
    <div className="questionCount">
      Tổng câu   <span>{props.counter}</span> hỏi <span>{props.total}</span>
       {props.counter === 3 ? (<a className="result-link" href="" onClick={props.viewreults}>Xem Kết quả</a>) : (<div></div>)}
    </div>
  );

}

export default QuestionCount;