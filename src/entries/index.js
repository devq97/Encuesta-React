import React from 'react';
import { render } from 'react-dom'; ///////// Renderizar los componenetes - ponerlos dentro del bnavegador
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
import data from '../../api.json';

// ReactDOM.render(que voy a renderizar, donde lo haré);
const homeContainer = document.getElementById('home-container');
// const holaMundo = <h1>hola estudiao</h1>;
render(<Home data={data}/>, homeContainer);
