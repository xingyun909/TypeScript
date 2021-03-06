/**
 * 
 * 可以使用readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化
 * @class Octopus
 */
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.