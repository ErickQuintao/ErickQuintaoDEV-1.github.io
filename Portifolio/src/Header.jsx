import React from "react";
import './App.css';

// import {Link, Route,Routes , BrowserRouter} from 'react-router-dom';
// import App from"./App";

class Header extends React.Component{
    render(){
        const {handleValue, handleChange} =this.props;
        return(
        <div>
            {/* <BrowserRouter>
            <Routes>
            <Route exact path="/App" element={<App/>} />
            <Route exact path="/Projetos" element={<Projetos/>} />
            </Routes>
            <Link exact to="/Projetos" >Projetos</Link>
            <Link exact to="/App" >Home</Link>
            </BrowserRouter> */}
            {/* <button  value={this.handleChange} onChange={this.handleValue}>Ver mais</button> */}
		</div>
     )
    }
}
export default Header