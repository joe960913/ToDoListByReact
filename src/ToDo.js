import React, { useState } from "react";
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return { todos: state.todos }
  }
function ToDo(props) {
  const [add, addThing] = useState(""); //表单输入值
  const {dispatch,todos} = props
  let handleDelete = e => {
    let val = e.target.value;
    dispatch({type:'DELETE',text:val})
  };
  let handleAdd = e => {
    e.preventDefault();
    dispatch({type:'ADD',text:add})
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
        {todos.map((item, index) => {
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

export default connect(mapStateToProps)(ToDo)