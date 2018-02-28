
/** 
* 泛型类
* 泛型类使用（ <> ）括起泛型类型，跟在类名后面
*/

class GenericNumber < T > {
    zeroValue : T;
    add : (x : T, y : T) => T;
}

let myGenericNumber = new GenericNumber < number > ();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};

let stringNumeric = new GenericNumber < string > ();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
    return x + y;
};

alert(stringNumeric.add(stringNumeric.zeroValue, "test"));