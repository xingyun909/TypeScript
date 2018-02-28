
/** 
* 泛型接口
*/
interface GenericIdentityFn {
     < T > (arg : T) : T;
}

function identity < T > (arg : T) : T {
    return arg;
}

let myIdentity : GenericIdentityFn = identity;


// 泛型约束
// 定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，
// 使用这个接口和extends关键字还实现约束。

interface Lengthwise {
    length : number;
}

function loggingIdentity < T extends Lengthwise > (arg : T) : T {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}

loggingIdentity(3); // Error, number doesn't have a .length property

loggingIdentity({length: 10, value: 3});