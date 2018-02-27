// 布尔值
let isDone: boolean = false;

// 字符串
let names: string = "bob";


//  数组
let listN: number[] = [1, 2, 3];
let listS: string[] = ['1', ' 2', '3'];


//泛型  Array<元素类型>
let listNumber: Array<number> = [1, 2, 3];
let listString: Array<string> = ['1', ' 2', '3'];

// 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。


let x: [string, number];//声明一个元组类型
x = ['myString', 66]// OK  赋值 
// x=[100,'hello'] // Error  错误的顺序会报错

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

// 当访问一个越界的元素，会使用联合类型替代：
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[3].toString()); // OK, 'string' 和 'number' 都有 toString

// x[6] = true; // Error, 布尔不是(string | number)类型



// 枚举
// enum类型是对JavaScript标准数据类型的一个补充。

enum Color { Red, Green, Blue }//默认情况下，从0开始为元素编号。 
let c: Color = Color.Green;
// 或者，全部都采用手动赋值
enum Color2 { Red = 1, Green = 2, Blue = 4 }
let c2: Color2 = Color2.Green;

console.log('Color:', Color)
console.log('Color:', Color2)
console.log('c:', c)
console.log('c2:', c2)

//根据数值找名字
enum Color3 { Red = 1, Green, Blue }
let colorName: string = Color3[2];
console.log('colorName:', colorName)




// 任意值
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// 当你只知道一部分数据的类型时，any类型也是有用的。
let list: any[] = [1, true, "free"];

list[1] = 100;
console.log('list:', list)




// 空值
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。
// 当一个函数没有返回值时，你通常会见到其返回值类型是void：

function warnUser(): void {
    alert("This is my warning message");
}



// Never

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}


// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}


// 类型断言
// 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。


// 类型断言有两种形式。 其一是“尖括号”语法：
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;


let someValue2: any = "this is a string";

let strLength2: number = (someValue2 as string).length;