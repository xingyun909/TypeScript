/**
 * protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问。
 * 
 * 不能在Person类外使用name，但是仍然可以通过Employee类的实例方法访问，因为Employee是由Person派生而来的。
 * 
 * @class Person
 */
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employees extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employees("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error