var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问。
 *
 * 不能在Person类外使用name，但是仍然可以通过Employee类的实例方法访问，因为Employee是由Person派生而来的。
 *
 * @class Person
 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employees = /** @class */ (function (_super) {
    __extends(Employees, _super);
    function Employees(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employees.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employees;
}(Person));
var howard = new Employees("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error
