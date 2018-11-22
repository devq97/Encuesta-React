import React, { Component } from 'react';
import TableContainer from '../../table/components/table';
import './home.css';

class Home extends Component {
  render() {
    return (
      <TableContainer encuesta={this.props.data.Encuesta}/>
    )
  }
}

export default Home;
