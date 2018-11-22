import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import Issue from './issue';
import Question from './question';
import './table.css';

class TableContainer extends Component {
  render(){
    return (
      <Table striped bordered condensed hover>
        <thead>
        <tr className="header">
          <th>ID</th>
          <th className="center">Apreciación</th>
          <th>Estudiantes</th>
          <th>Profesores</th>
          <th>Admin</th>
          <th>Egresados</th>
          <th>State</th>
        </tr>
        </thead>
        <tbody>
        {
          this.props.encuesta.map((item) => {
            return (
              <Issue
                key={item.id}
                {...item}
              />
            )
          })
        }
        </tbody>
      </Table>
    )

  }
}

export default TableContainer;
