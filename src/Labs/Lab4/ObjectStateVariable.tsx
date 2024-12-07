import React, { useState } from "react";

export default function ObjectStateVariable() {
  const [person, setPerson] = useState({ name: "Peter", age: 24 }); 

  return (
    <div>
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre> {/* 显示 person 对象的 JSON 结构 */}
      
      <input
        defaultValue={person.name} // 输入框默认显示 person.name 的值
        onChange={(e) => setPerson({ ...person, name: e.target.value })} // 更新 name 属性
      />
      <input
        defaultValue={person.age} // 输入框默认显示 person.age 的值
        onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) })} // 更新 age 属性，并将输入值转换为整数
      />
      <hr/>
    </div>
  );
}
