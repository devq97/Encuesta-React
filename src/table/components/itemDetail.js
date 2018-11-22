import React from 'react';
import './table.css';

function ItemDetail(props) {
  return (
      props.result.map((elem) => {
        return (
          <React.Fragment>
            <tr>
              <td className="question" colSpan="5">{elem.name}</td>
              <td className="question">{elem.data}</td>
              <td className="question">{((elem.data*100)/props.dataSum).toFixed(2)}</td>
            </tr>
          </React.Fragment>
        )
      })
  )
}

export default ItemDetail
