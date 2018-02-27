/**
 * 当成员被标记成private时，它就不能在声明它的类的外部访问
 * 
 * TypeScript使用的是结构性类型系统。 当我们比较两种不同的类型时，并不在乎它们从何处而来，
 * 如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。然而，当我们比较带有private
 * 或protected成员的类型的时候，情况就不同了。 如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个private成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 对于 protected成员也使用这个规则。
 * 
 * @class Animal
 */
class Animals {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

new Animals("Cat").name; // Error: 'name' is private;


class Rhino extends Animals {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animals("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // Error: Animal and Employee are not compatible


/**
 * 例子中有Animal和Rhino两个类，Rhino是Animal类的子类。 还有一个 Employee类，其类型看上去与Animal是相同的。
 * 我们创建了几个这些类的实例，并相互赋值来看看会发生什么。 因为 Animal和Rhino共享了来自Animal里的私有成员
 * 定义private name: string，因此它们是兼容的。 然而 Employee却不是这样。当把Employee赋值给Animal的时候，
 * 得到一个错误，说它们的类型不兼容。 尽管 Employee里也有一个私有成员name，但它明显不是Animal里面定义的那个
 */






