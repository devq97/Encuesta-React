import React from 'react';
import './table.css';

function Apretiate(props) {
  return (
    <React.Fragment>
      <td className="apretiate">{props.id}</td>
      <td className="apretiate">{props.apreciacion}</td>
      <td className="apretiate center">{props.Estudiantes}</td>
      <td className="apretiate center">{props.Profesores}</td>
      <td className="apretiate center">{props.Admin}</td>
      <td className="apretiate center">{props.Egresados}</td>
    </React.Fragment>
  )
}

export default Apretiate
