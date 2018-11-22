import React, { Component } from 'react';
import Question from './question';
import ButtonShow from './buttonShow';
import Apretiate from './apretiate';
import './table.css';

class Issue extends Component {
  state = {
    questionVisible : false,
    iconName : 'angle-down',
    bsStyle : 'success',
  }
  handleClick = (question) => {
    this.state.questionVisible ? (
      this.setState({
        questionVisible : !this.state.questionVisible,
        iconName: 'angle-down',
        bsStyle : 'success',
      })
    ) : (
      this.setState({
        questionVisible : !this.state.questionVisible,
        iconName: 'angle-up',
        bsStyle : 'danger',
      })
    )
    question
    console.log(this.state.questionVisible);
  }
  render () {
    return (
      <React.Fragment>
      <tr>
        <Apretiate {...this.props} />
        {
          <ButtonShow
            bsStyle={this.state.bsStyle}
            handleClick={this.handleClick}
            iconName={this.state.iconName}
          />
        }
      </tr>
      {
        this.state.questionVisible &&
        <Question
          question={this.props.preguntas}
        />
      }
      </React.Fragment>
    )
  }
}

export default Issue
