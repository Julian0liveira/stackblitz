import React from 'react';
import Botao from '../componentes/botao/botao';

export default function Formulario() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="tarefa">Tarefa</label>
        </div>
        <div>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="Informe a tarefa:"
            required
          />
        </div>
        <div>
          <label htmlFor="tempo">Tempo</label>
        </div>
        <div>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="23:59:99"
          />
        </div>
        <div>
          <Botao />
        </div>
      </form>
    </div>
  );
}
