export default function Spreading() {
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5, 6]; // 使用扩展运算符展开 arr1
  
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { ...obj1, d: 4, e: 5, f: 6 }; // 将 obj1 展开到 obj2 中
    const obj3 = { ...obj1, b: 4 }; // obj1 中 b 的值被 obj3 中的 b: 4 覆盖
  
    return (
      <div id="wd-spreading">
        <h2>Spread Operator</h2>
        <h3>Array Spread</h3>
        arr1 = {JSON.stringify(arr1)} <br />
        arr2 = {JSON.stringify(arr2)} <hr />
        <h3>Object Spread</h3>
        {JSON.stringify(obj1)} <br />
        {JSON.stringify(obj2)} <br />
        {JSON.stringify(obj3)} <br />
        <hr />
      </div>
    );
  }
  