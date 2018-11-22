import React from 'react';
import './table.css';
import BodyQuestion from './bodyQuestion';
import ButtonShow from './buttonShow';

function Question(props) {
  return (
      props.question.map((elem) => {
        return (
          <React.Fragment>
            <tr key={elem.id}>
              <td className="question bold">{elem.id}</td>
              <td className="question bold" colSpan="6">{elem.pregunta}</td>
            </tr>
            <tr>
              <td className="question center bold" colSpan="4">Quién respondió</td>
              <td className="question center bold" colSpan="3">{elem.respondida}</td>
            </tr>
            {
              <BodyQuestion
                items={elem.items}
              />
            }
          </React.Fragment>
        )
      })
  )
}

export default Question
