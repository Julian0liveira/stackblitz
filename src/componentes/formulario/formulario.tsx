import React from 'react'

export default function Formulario(){
  return(
    <div>
      <form>
        <div>
          <label htmlFor="tarefa"></label>
        </div>
        <div>
          <input type="text" name="tarefa" id="tarefa" placeholder="Informe a tarefa:" required/>
        </div>
        <div>
          
        </div>
      </form>
    </div>
  )
}