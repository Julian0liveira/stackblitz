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
      <label htmlFor=""> Data de nascimento </label>
      <input type="date" name="data" id="datanascimento" placeholder="Digite sua data de nascimento" required />
    <div>
      <label htmlFor=""> Genero </label>
    </div>
    <div>
      <label>
      <input type="radio" name="genero" id="genero" value="masculino" checked/>Masculino
      </label>
    </div>
    <div>
      <label>
      <input type="radio" name="genero" id="genero" value="feminino"/>Feminino
      </label>
    </div>
      <Botao/>
  </form>
    </>
  );
}
