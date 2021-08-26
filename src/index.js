import React from "react"
import ReactDOM from "react-dom"

function Myapp(){
  return(
<div>
  <div>
    <h1> Pratica de React</h1>
    <p>Andreina, Dully e Macglorys estão praticando React</p>
  </div>
  <div>
    <p> Tiziano entrou a supervisar a tarefa </p>
  </div>
  <div>
    <p> Construção de uma pagina web</p>
    <ol>
      <li> html</li>
      <li>Css</li>
      <li>Javascript</li>
    </ol>
  </div>
  </div>


  )
}
ReactDOM.render(<Myapp/>,document.getElementById("root"))


