/**
 * 带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。
 * 
 * @interface SquareConfig
 */
interface SquareConfig {
    color?: string;
    width?: number;
    // [propName: string]: any;// 这样可以有任意数量的属性
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black", width: 30 });


// 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
// 例如 传入createSquare的参数拼写为colour而不是color。 在JavaScript里，这会默默地失败。

// 绕开这些检查非常简单。 三种方法

// 1  最简便的方法是使用类型断言
let mySquare2 = createSquare({ colour: "black", width: 30 } as SquareConfig);

// 2 将这个对象赋值给一个另一个变量:因为squareOptions不会经过额外属性检查，所以编译器不会报错。
let obj = { colour: "black", width: 30 };
let mySquare3 = createSquare(obj);

// 3 接口加入属性 [propName: string]: any;  这样可以有任意数量的属性
console.log(mySquare)