/**
 *
 * 可以使用readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化
 * @class Octopus
 */
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.
