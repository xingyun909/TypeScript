// 布尔值
var isDone = false;
// 字符串
var names = "bob";
//  数组
var listN = [1, 2, 3];
var listS = ['1', ' 2', '3'];
//泛型  Array<元素类型>
var listNumber = [1, 2, 3];
var listString = ['1', ' 2', '3'];
// 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
var x; //声明一个元组类型
x = ['myString', 66]; // OK  赋值 
// x=[100,'hello'] // Error  错误的顺序会报错
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
// 当访问一个越界的元素，会使用联合类型替代：
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
console.log(x[3].toString()); // OK, 'string' 和 'number' 都有 toString
// x[6] = true; // Error, 布尔不是(string | number)类型
// 枚举
// enum类型是对JavaScript标准数据类型的一个补充。
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //默认情况下，从0开始为元素编号。 
var c = Color.Green;
// 或者，全部都采用手动赋值
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
console.log('Color:', Color);
console.log('Color:', Color2);
console.log('c:', c);
console.log('c2:', c2);
// 根据数值找名字
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 3] = "Blue";
})(Color3 || (Color3 = {}));
var colorName = Color3[2];
console.log('colorName:', colorName);
// 任意值
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// 当你只知道一部分数据的类型时，any类型也是有用的。
var list = [1, true, "free"];
list[1] = 100;
console.log('list:', list);
