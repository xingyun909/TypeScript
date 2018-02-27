/**
 * 和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。
 * 
 * @interface Shape
 */
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{}; //创建一个对象
square.color = "blue";
square.sideLength = 10;


interface PenStroke {
    penWidth: number;
}

//可以多继承
interface Square2 extends Shape, PenStroke {
    sideLength: number;
}

let square2 = <Square2>{};
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;

