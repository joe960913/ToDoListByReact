import React from "react";
import "./App.less";
import ToDo from './ToDo'
function App() {
  return (
    <div id="container">
      <h1 id="header">TODO</h1>
      <div style={{textAlign:'center'}}><span>每一个不曾起舞的日子都是对生命的辜负</span></div>
      <ToDo/>
    </div>
  );
}

export default App;
