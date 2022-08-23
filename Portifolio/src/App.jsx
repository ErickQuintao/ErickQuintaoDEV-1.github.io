import React from 'react'
import './App.css';
import Header from './Header';
import SectionMain from './SectionMain'
 import Projetos from "./Projetos";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      IsLoading:false
    }
  }
  handleValue = () => {
    this.setStatus({Isloading:true});
  }
   handleChange = ()=> {
    if(IsLoading === false){
      return <App/>
      
    }
    {
      return <Projetos />
      
    }
   }
  render(){
  return (
    <div className="App">
      <Header />
    <SectionMain />
    </div>
  )
  }
}

export default App
