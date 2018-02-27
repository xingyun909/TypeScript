/**
 * 
 * 为了使用接口表示函数类型，需要给接口定义一个调用签名。
 * 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
 * 
 * @interface SearchFunc
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}

// 下例展示了如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量。

// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。
// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。 
// 如果你不想指定类型，TypeScript的类型系统会推断出参数类型，因为函数直接赋值给了 SearchFunc类型变量。 
// 函数的返回值类型是通过其返回值推断出来的（此例是 false和true）。
//  如果让这个函数返回数字或字符串，类型检查器会警告我们函数的返回值类型与 SearchFunc接口中的定义不匹配
let mySearch: SearchFunc;
mySearch = (src: string, sub: string): boolean => {
    let result = src.search(sub);
    return result > -1;
}
