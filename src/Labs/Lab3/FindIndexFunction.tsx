export default function FindIndexFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    let stringArray1 = ["string1", "string3"];
    
    // 使用 findIndex 方法查找 numberArray1 中元素 4 的索引
    const fourIndex = numberArray1.findIndex((a) => a === 4);
    
    // 使用 findIndex 方法查找 stringArray1 中元素 "string3" 的索引
    const string3Index = stringArray1.findIndex((a) => a === "string3");
  
    return (
      <div id="wd-findindex-function">
        <h4>FindIndex Function</h4>
        fourIndex = {fourIndex} <br />
        string3Index = {string3Index} <hr />
      </div>
    );
  }
  