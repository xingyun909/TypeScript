
/**
 * 
 * 
 * @interface ClockInterface
 */
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {  //实现接口方法
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }   //  可以有自己的构造函数
}
