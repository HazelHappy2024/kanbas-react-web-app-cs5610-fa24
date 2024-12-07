import TodoItem from "./TodoItem";
import todos from "./todos.json";

const TodoList = () => {
  return (
    <div>
      <h3>Todo List</h3>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.title} todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default TodoList;
