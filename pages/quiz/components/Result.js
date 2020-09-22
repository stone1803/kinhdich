import React from 'react';

class Result extends React.Component {
  constructor(props){
    super(props);
  }
  renderQuestins(){
    return  this.props.quizResult.map((_data,index) =>{
        return <div className="list-grp">{_data.question} <br/>Kết quả trả lời : {_data.answerindex} :  và đây là kết quả bạn chọn {this.props.answers[index]+1} { ((this.props.answers[index]+1) === _data.answerindex) ? (<span className="status">Hay quá bạn :)</span>) : ''}</div>
    })
  }
  render (){
    return (
    <div  className="quiz-story">
      <div>
        <strong>Đây là kết quả của bạn </strong>!
        <div>{this.renderQuestins()}</div>
      </div>
    </div>
    )
  }
}

export default Result;