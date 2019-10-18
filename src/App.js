import React, { useState } from "react";
import './App.less'
function App() {
  const [thing, setThing] = useState([]);//所有的待办事项
  const [add, addThing] = useState('');//表单输入值
  //定义了一个方法，从数组中删除指定元素后返回删除后的数组
  let remove = (arr, val) => {
    let res = [];
    for (let i of arr) {
      if (i !== val) {
        res.push(i);
      }
    }
    return res;
  };
  let handleDelete = e => {
    let val = e.target.value;
    setThing(remove(thing, val));
  };
  let handleAdd = e => {
     e.preventDefault()
    setThing(thing.concat([add]))
    addThing('')
  };
  let handleChange = e => {
    let val = e.target.value;
    addThing(val);
  };
  return (
    <div id='container'>
      <h1>TODO</h1>
      <form onSubmit={handleAdd}>
        <input type="text" value={add} onChange={handleChange}/>
        <button value="Submit">add</button>
      </form>
      <ul>
        {thing.map((item,index) => {
          return (
            <div key={index}>
              <li type='square'>{item}</li>
              <button value={item} onClick={handleDelete}>
                delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
