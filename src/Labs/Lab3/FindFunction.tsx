export default function FindFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2", "string3"];
    
    // 使用 find 方法查找 numberArray1 中的元素 4
    const four = numberArray1.find((a) => a === 4);
    
    // 使用 find 方法查找 stringArray1 中的元素 "string3"
    const string3 = stringArray1.find((a) => a === "string3");
  
    return (
      <div id="wd-find-function">
        <h4>Find Function</h4>
        four = {four} <br />
        string3 = {string3} <hr />
      </div>
    );
  }
  