/**
 * 一个对象可以同时做为函数和对象使用，并带有额外的属性。混合类型
 */

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

//创建一个返回多类型对象的函数
function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
console.log(c)
c.reset();
console.log(c)
c.interval = 5.0;
console.log(c)