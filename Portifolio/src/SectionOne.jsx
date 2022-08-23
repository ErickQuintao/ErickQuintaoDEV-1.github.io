import React from "react";
import './App.css';
class SectionOne extends React.Component {
    render(){
    return(
        <div>
        <div class="center">
        <img src="./public/img-1.png" alt="img"></img>
	 <h1>Erick Quintão</h1>
	 <h2>Desenvolvedor de Software</h2>
     </div>
        <div>
        <h3>Sobre mim</h3>
        <p>
         Eu sou Erick Quintao, atualmente tenho 15 anos. Eu sou uma pessoa muito inteligente e disciplinado
          para alcançar oque eu desejo. 
         Eu me descobrir uma pessoa apaixonado por programaçao e fico horas aprendendo e fazendo projetos e concertando erros dos projectos meus e dos outros.
         Eu pretendo seguir como carreira sendo desenvolvedor de Software e mais para frente fazer faculdade de Engenheria de Software.
        </p>
    </div>
    </div>
    );
    }
}
export default SectionOne