
/**
 * 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
 * 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 
 * 接口同样会继承到类的private和protected成员。这意味着当你
 * 创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接
 * 口类型只能被这个类或其子类所实现（implement）。
 * 
 * @class Control
 */
class Control {
    private state: any;
}

//在Control类内部，是允许通过SelectableControl的实例来访问私有成员state的
interface SelectableControl extends Control {
    select(): void;
   
}

class Button extends Control implements SelectableControl {
    select() { };
}

class TextBox extends Control {

}
// SelectableControl包含了Control的所有成员，包括私有成员state。 
// 因为 state是私有成员，所以只能够是Control的子类们才能实现SelectableControl接口。
// 因为只有 Control的子类才能够拥有一个声明于Control的私有成员state，这对私有成员的兼容性是必需的。

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
    select() { }
}

class Location {

}