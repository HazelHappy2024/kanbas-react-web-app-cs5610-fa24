export default function IfElse() {
    let true1 = true, false1 = false;
  
    return (
      <div id="wd-if-else">
        <h4>If Else</h4>
        {/* 如果 true1 为 true，才渲染 <p>true1</p> */}
        { true1 && <p>true1</p> }
  
        {/* 三元运算符：根据 false1 的布尔值渲染不同的内容 */}
        { !false1 ? <p>!false1</p> : <p>false1</p> }
        <hr />
      </div>
    );
  }
  