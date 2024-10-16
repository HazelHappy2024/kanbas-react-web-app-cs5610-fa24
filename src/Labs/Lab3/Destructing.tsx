export default function Destructing() {
    const person = { name: "John", age: 25 };
    const { name, age } = person; // 对象解构赋值
  
    const numbers = ["one", "two", "three"];
    const [first, second, third] = numbers; // 数组解构赋值
  
    return (
      <div id="wd-destructing">
        <h2>Destructing</h2>
  
        {/* 对象解构赋值的结果 */}
        <h3>Object Destructing</h3>
        &#123; name, age &#125; = &#123; name: "John", age: 25 &#125; <br />
        name = {name} <br />
        age = {age} <hr />
  
        {/* 数组解构赋值的结果 */}
        <h3>Array Destructing</h3>
        const &#91;first, second, third&#93; = &#91;"one","two","three"&#93;<br />
        first = {first} <br />
        second = {second} <br />
        third = {third} <hr />
      </div>
    );
  }
  