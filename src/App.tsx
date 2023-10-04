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
      <select id="genero">
      <label htmlFor=""> Genero </label>
      <option value="selecione" defaultChecked>Selecionar</option>
      <option value="masculino">Masculino</option>
      <option value="feminino">Feminino</option>
      </select>
    </div>
    <div>
      <label htmlFor=""> Nome da mãe </label>
    </div>
    <div>
      <input type="text" name="nomemae" id="nomemae" placeholder="Digite o nome de sua mãe" />
    </div>
    <div>
      <label htmlFor=""> Nome do pai </label>
    </div>
    <div>
      <input type="text" name="nomepai" id="nomepai" placeholder="Digite o nome de seu pai" />
    </div>
    <div>
      <Botao/>
    </div>
  </form>
    </>
  );
}
