import React, { useState } from "react";

export default function Todo() {
  const [thing, setThing] = useState([]); //所有的待办事项
  const [add, addThing] = useState(""); //表单输入值
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
    e.preventDefault();
    setThing(thing.concat([add]));
    addThing("");
  };
  let handleChange = e => {
    let val = e.target.value;
    addThing(val);
  };
  return (
    <div>
      <form onSubmit={handleAdd} id="input">
        <input type="text" value={add} onChange={handleChange} />
        <button value="Submit">add</button>
      </form>
      <ul id="context">
        {thing.map((item, index) => {
          return (
            <div key={index}>
              <li>
                {item}
                <button value={item} onClick={handleDelete}>
                  done
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
