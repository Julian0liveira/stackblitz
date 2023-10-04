import { FC } from 'react';
import Botao from './componentes/formulario/botao';
import './style.css';
//import Formulario from './componentes/formulario/formulario';

export default function App() {
  return (
    <>
    <form>
    <div>
      <h1> Cadastro de aluno </h1>
    </div>
    <div>
      <label htmlFor=""> Nome completo </label>
    </div>
    <div>      
      <input type="text" name="nome" id="nome" placeholder="Digite seu nome completo" required/>
    </div>
    <div>
      <label htmlFor=""> Data de nascimento </label>
    </div>
    <div>
      <input type="date" name="data" id="datanascimento" placeholder="Digite sua data de nascimento" required />
    </div>
    <div>
      <label htmlFor=""> Genero </label>
      <label>
      <input type="radio" name="genero" id="genero" value="masculino" checked/>Masculino
      </label>
      <label>
      <input type="radio" name="genero" id="genero" value="feminino"/>Feminino
      </label>
    </div>
    <div>
      <Botao/>
    </div>
  </form>
    </>
  );
}
