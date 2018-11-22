import React from 'react';
import './table.css';
import ItemDetail from './itemDetail';

function BodyQuestion(props) {
  return (
      props.items.map((elem) => {
        return (
          <React.Fragment>
            <tr>
              <td className="question center bold" colSpan="4">Número de personas que respondieron</td>
              <td className="question center bold" colSpan="3">
                {
                  elem.results.reduce(function(sum, d) {
                    return sum + d.data;
                  }, 0)
                }
              </td>
            </tr>
            <tr>
              <td className="question center bold" colSpan="7">{elem.item}</td>
            </tr>
            <ItemDetail
              dataSum={
                elem.results.reduce(function(sum, d) {
                  return sum + d.data;
                }, 0)
              }
              result={elem.results}
            />
          </React.Fragment>
        )
      })
  )
}

export default BodyQuestion
