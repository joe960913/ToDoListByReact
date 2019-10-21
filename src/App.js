import React,{useState} from "react";
import "./App.less";
import ToDo from './ToDo'
import Done from './Done'
function App() {
  const [tab,setTab] = useState('todo')
  let ChangeTab = (e) =>{
    e.preventDefault()
    let val = e.target.value
    setTab(val)
  }
  return (
    <div id="container">
      <h1 id="header">TODO</h1>
      <div style={{textAlign:'center'}}><span>每一个不曾起舞的日子都是对生命的辜负</span></div>
      {
        tab === 'todo' ? <ToDo/> : <Done/>
      }
      <div style={{display:'flex',justifyContent:'space-around'}}>
        <button value='todo' onClick={ChangeTab}>todo</button>
        <button value='done' onClick={ChangeTab}>done</button>
      </div>
    </div>
  );
}

export default App;
