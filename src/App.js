import React, { Component } from "react";

class App extends Component{
  render(){
    let date = new Date();
    let jour = date.getDate();
    let mois = date.getMonth();
    let annee = date.getFullYear();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();
    return(
      <div>
        <h1>Hello, aujourd'hui nous somme le {jour}/{mois}/{annee}. Et il est {heure}h{minute}:{seconde}sec</h1>
      </div>
    )
  };
}

export default App;
