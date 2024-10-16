const TodoItem = ({ todo }: { todo: { done: boolean, title: string, status: string } }) => {
    return (
      <li className="list-group-item">
        {/* 使用复选框显示每个 Todo 的状态 */}
        <input type="checkbox" className="me-2" defaultChecked={todo.done} />
        {todo.title} ({todo.status})
      </li>
    );
  };
  
  export default TodoItem;
  