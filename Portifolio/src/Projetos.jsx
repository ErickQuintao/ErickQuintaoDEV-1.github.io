import React from 'react';
import {Link, Route, Routes , BrowserRouter} from 'react-router-dom';
import ProjLol from './ProjLol';
import './App.css';
class Projetos extends React.Component {
    render(){
        <BrowserRouter>
        <Routes>
            <Route  exact path="/ProjLol" element={<ProjLol/>} />
            </Routes>
        </BrowserRouter>
        return(
            <div>
            <div>
                <p>Projeto Tela de Login do League of Legends </p>
                <img src="./public/prj-1-lol.jpeg" alt="img de lol" width="500"/>
                <Link exact to="/ProjLol">ver mais</Link> 
            </div>
            </div>
        );
    }
}
export default Projetos