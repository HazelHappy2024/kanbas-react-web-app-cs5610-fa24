export default function ForLoops() {
    let stringArray1 = ["string1", "string3"];
    let stringArray2: string[] = [];
    
    // 使用 for 循环遍历 stringArray1，并将每个元素转换为大写后推入 stringArray2
    for (let i = 0; i < stringArray1.length; i++) {
      const string1 = stringArray1[i];
      stringArray2.push(string1.toUpperCase());
    }
  
    return (
      <div id="wd-for-loops">
        <h4>Looping through arrays</h4>
        stringArray2 = {stringArray2} <hr />
      </div>
    );
  }
  