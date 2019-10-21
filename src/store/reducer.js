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

export default function todoApp(state = { todos: [], done: [] }, action) {
  switch (action.type) {
    case "ADD":
      return { todos: [...state.todos, action.text], done: state.done };
    case "DELETE":
      return {
        todos: [...remove(state.todos, action.text)],
        done: [...state.done, action.text]
      };
    case "CLEAR":
      return {
        todos: [...state.todos],
        done: []
      };
    default:
      return state;
  }
}
