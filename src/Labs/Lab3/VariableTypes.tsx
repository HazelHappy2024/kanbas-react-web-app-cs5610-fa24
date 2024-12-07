export default function VariableTypes() {
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let stringVariable = 'Hello World!';
    let booleanVariable = true;
  
    // 使用 typeof 获取变量的类型
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;
  
    // 返回 HTML 结构，展示变量的值和类型
    return (
      <div id="wd-variable-types">
        <h4>Variables Types</h4>
        numberVariable = {numberVariable}<br />
        floatingPointNumber = {floatingPointNumber}<br />
        stringVariable = {stringVariable}<br />
        booleanVariable = {booleanVariable + ""}<br /> {/* 将 boolean 转为字符串 */}
        isNumber = {isNumber}<br />
        isString = {isString}<br />
        isBoolean = {isBoolean}<hr />
      </div>
    );
  }
  
