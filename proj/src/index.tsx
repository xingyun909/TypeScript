import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello} from "./components/Hello";
import App from "./app";

// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React"/>, document.getElementById("example")as HTMLElement);
ReactDOM.render(<App/>, document.getElementById("example") as HTMLElement);

// 就是最后一行document.getElementById('root') as HTMLElement。 这个语法叫做类型断言，有时也叫做转换。
// 当你比类型检查器更清楚一个表达式的类型的时候，你可以通过这种方式通知TypeScript。
// 这里，我们之所以这么做是因为getElementById的返回值类型是HTMLElement | null。
// 简单地说，getElementById返回null是当无法找对对应id元素的时候。
// 我们假设getElementById总是成功的，因此我们要使用as语法告诉TypeScript这点。 TypeScript还有一种感叹号（
// !）结尾的语法，它会从前面的表达式里移除null和undefined。
// 所以我们也可以写成document.getElementById('root')!，但在这里我们想写的更清楚些。