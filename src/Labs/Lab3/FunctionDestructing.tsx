export default function FunctionDestructing() {
    // 普通的箭头函数
    const add = (a: number, b: number) => a + b;
    const sum = add(1, 2);
  
    // 使用解构的箭头函数
    const subtract = ({ a, b }: { a: number; b: number }) => a - b;
    const difference = subtract({ a: 4, b: 2 });
  
    return (
      <div id="wd-function-destructing">
        <h2>Function Destructing</h2>
  
        {/* 使用普通函数 */}
        const add = (a, b) = &gt; a + b;<br />
        const sum = add(1, 2);<br />
        sum = {sum} <br />
  
        {/* 使用解构的函数 */}
        const subtract = (&#123; a, b &#125;) =&gt; a - b;<br />
        const difference = subtract(&#123; a: 4, b: 2 &#125;);<br />
        difference = {difference} <hr />
      </div>
    );
  }
  