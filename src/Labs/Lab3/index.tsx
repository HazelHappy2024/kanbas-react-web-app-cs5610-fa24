import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FindIndexFunction from "./FindIndexFunction";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import TodoList from "./todo/TodoList";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import Math from "./Math";
import DestructingImports from "./DestructingImports";
import Classes from './Classes';
import Styles from './Styles';
import Add from './Add';
import Square from "./Square";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters"; // 导入 PathParameters
import AddPathParameters from "./AddPathParameters";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";






export default function Lab3() { 
  console.log('Hello World!');
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-lab3"> 
      <h3>Lab 3</h3> 
      <ul className="list-group">
        {todos.map((todo: any) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <hr />
      <VariablesAndConstants/>
      <VariableTypes /> {/* 新增 VariableTypes 组件 */}
      <BooleanVariables /> {/* 新增 BooleanVariables 组件 */}
      <IfElse /> {/* 新增 IfElse 组件 */}
      <TernaryOperator /> {/* 新增 TernaryOperator 组件 */}
      <ConditionalOutputIfElse /> {/* 新增 ConditionalOutputIfElse */}
      <ConditionalOutputInline /> {/* 新增 ConditionalOutputInline */}
      <ArrowFunctions /> {/* 新增 ArrowFunctions 组件 */}
      <ImpliedReturn /> {/* 新增 ImpliedReturn 组件 */}
      <TemplateLiterals /> {/* 新增 TemplateLiterals 组件 */}
      <SimpleArrays /> {/* 新增 SimpleArrays 组件 */}
      <ArrayIndexAndLength /> {/* 新增 ArrayIndexAndLength 组件 */}
      <AddingAndRemovingToFromArrays /> {/* 新增 AddingAndRemovingDataToFromArrays 组件 */}
      <ForLoops /> {/* 新增 ForLoops 组件 */}
      <MapFunction /> {/* 新增 MapFunction 组件 */}
      <FindFunction /> {/* 新增 FindFunction 组件 */}
      <FindIndexFunction /> {/* 新增 FindIndexFunction 组件 */}
      <FilterFunction /> {/* 新增 FilterFunction 组件 */}
      <JsonStringify /> {/* 新增 JsonStringify 组件 */}
      <House /> {/* 新增 House 组件 */}
      <TodoList /> {/* 新增 TodoList 组件 */}
      <Spreading /> {/* 新增 Spreading 组件 */}
      <Destructing /> {/* 添加 Destructing 组件 */} 
      <FunctionDestructing /> 
      <DestructingImports />
      <Classes />
      <Styles /> {/* 新增 Styles 组件 */}
      <Add a={3} b={4} /> {/* 新增 Add 组件，传递 a 和 b 参数 */}
      <h4>Square of 4</h4>
      <Square>4</Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitprename eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
      </Highlight>


     

      {/* 添加 Path Parameters 链接 */}
      <h4>Path Parameters</h4>
      <Link to="add/1/2">1 + 2</Link> <br />
      <Link to="add/3/4">3 + 4</Link> <br />

      {/* 配置 PathParameters 路由 */}
      <Routes>
        <Route path="/add/:a/:b" element={<AddPathParameters />} />
      </Routes>
    
      
    </div>
  ); 
}
