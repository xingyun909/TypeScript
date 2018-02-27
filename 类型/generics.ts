

//泛型  Array<元素类型>
let arraytNumber: Array<number> = [1, 2, 3];
let arrayString: Array<string> = ['1', ' 2', '3'];


// 泛型类型   T代表任何类型
function identify<T>(arg: T[]): T[] {
    console.log(arg.length);// Error: T doesn't have .length
    return arg;
}

//泛型函数  
let myIdentify: <U>(arg: U[]) => U[] = identify;


// 泛型参数当做一个接口的参数  这样就可以知道这个接口具体用的是那种类型
interface GenericIdnetify<T> {
    (arg: T): T;
}


function identity<T>(arg: T): T {
    return arg;
}


// x = ['hello', 10]; // OK
let myGenericidentify: GenericIdnetify<string> = identity;
