/**
 * 泛型 Array < 元素类型 >
 * */
let arraytNumber : Array < number > = [1, 2, 3];
let arrayString : Array < string > = ['1', ' 2', '3'];


/*** 
* 泛型类型
*/

// 泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样：

function identity_3 < T > (arg : T) : T {
    return arg;
}

let myIdentity_1 : <T>(arg:T) => T = identity_3;

let myIdentity_2 : <U>(arg: U) => U = identity_3; //可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以

