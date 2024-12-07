export default function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    
    // 定义一个函数，用于计算一个数的平方
    const square = (a: number) => a * a;
    
    // 定义一个待办事项数组
    const todos = ["Buy milk", "Feed the pets"];
    
    // 使用 map 函数计算平方和立方
    const squares = numberArray1.map(square);
    const cubes = numberArray1.map((a) => a * a * a);
    
    return (
      <div id="wd-map-function">
        <h4>Map Function</h4>
        squares = {squares} <br />
        cubes = {cubes} <br />
        Todos:
        <ol>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ol>
        <hr />
      </div>
    );
  }
  