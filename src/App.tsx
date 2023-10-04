import { FC } from 'react';
import Botao from './componentes/formulario/botao';
import './style.css';
//import Formulario from './componentes/formulario/formulario';

export default function App() {
  return (
    <>
    <div className="formulario">
    <form className="caixaform">
      <section className="section">
    <div>
      <h1 className="cadaluno"> Cadastro de aluno </h1>
    </div>
    </section>
    <section>
    <div>
      <label htmlFor="nome"> Nome completo </label>
    </div>
    <div>      
      <input type="text" name="nome" id="nome" placeholder="Digite seu nome completo" required/>
    </div>
    </section>
    <div>
      <label htmlFor="datanascimento"> Data de nascimento </label>
    </div>
    <div>
      <input type="date" name="data" id="datanascimento" placeholder="Digite sua data de nascimento" required />
    </div>
    <div>
    <label htmlFor="genero"> Genero </label>
      <select id="genero">
      <option value="selecione" defaultChecked>Selecionar</option>
      <option value="masculino">Masculino</option>
      <option value="feminino">Feminino</option>
      </select>
    </div>
    <div>
      <label htmlFor="nomemae"> Nome da mãe </label>
    </div>
    <div>
      <input type="text" name="nomemae" id="nomemae" placeholder="Digite o nome de sua mãe" />
    </div>
    <div>
      <label htmlFor="nomepai"> Nome do pai </label>
    </div>
    <div>
      <input type="text" name="nomepai" id="nomepai" placeholder="Digite o nome de seu pai" />
    </div>
    <div>
      <Botao/>
    </div>
  </form>
  </div>
    </>
  );
}
