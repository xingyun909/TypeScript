/**
 * 泛型函数
 */

// 需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值。
// 我们给identitys添加了类型变量T。 T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 之后我们再次使用了
// T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。 泛型类型   T代表任何类型 定义泛型函数

function identitys < T > (arg : T) : T {return arg;}

// 可以用两种方法使用 传入所有的参数，包含类型参数,这里明确的指定了T是string类型，并做为一个参数传给函数
let output = identity < string > ("myString"); // type of output will be 'string'
// 第二种方法更普遍,类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型
let output_2 = identity("myString"); // type of output will be 'string'

// 注意我们没必要使用尖括号（<>）来明确地传入类型；编译器可以查看myString的值，然后把T设置为它的类型。
// 类型推论帮助我们保持代码精简和高可读性。如果编译器不能够自动地推断出类型的话，只能像上面那样明确的传入T的类型，在一些复杂的情况下，这是可能出现的。
// 如果我们想同时打印出arg的长度。 我们很可能会这样做：

function loggingIdentity < T > (arg : T) : T {
    console.log(arg.length); // Error: T doesn't have .length
    return arg;
}
// 编译器会报错说我们使用了arg的.length属性，但是没有地方指明arg具有这个属性。
// 记住，这些类型变量代表的是任意类型，所以使用这个函数的人可能传入的是个数字，而数字是没有 .length属性的。 下面是两种创建方式
// loggingIdentity的类型：泛型函数loggingIdentity，接收类型参数T和参数arg，它是个元素类型是T的数组，并返回元素类型是T的数
// 组 如果我们传入数字数组，将返回一个数字数组，因为此时 T的的类型为number。
// 这可以让我们把泛型变量T当做类型的一部分使用，而不是整个类型，增加了灵活性。 1
function loggingIdentity_1 < T > (arg : T[]) : T[] {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
// 2
function loggingIdentity_2 < T > (arg : Array < T >) : Array < T > {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}



