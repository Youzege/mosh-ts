# 接口

## 抽象类

类似于接口的关键字

有一个形状类，可能是某种形状，定义了一个渲染方法和颜色属性。

```ts
abstract class Shape {
    constructor(public color: string) {}
    
    abstract render() :void;
}
class Circle extends Shape {
    constructor(public radius: number, color: string) { super(coloer) }
    
    override render() :void {
        console.log('Render a Circle')
    }
}
```



## Interface 接口

通过接口来实现抽象类的功能

类似的，实现一个日历

日历有谷歌日历、iCal 日历、Outlook日历等

抽象类实现

```ts
abstract class Calendar {
    constructor(public name: string) {}
    abstract addEvent(): void
    abstract removeEvent(): void
}
```

换成接口来实现

更加简洁明了

```ts
interface Calendar {
    name: string
    addEvent(): void
    removeEvent(): void
}
```

渲染成`JS`后，`JS`文件是没有 `Interface` 的。

```js
// 好像是空的
```



## 接口继承

与 Class 一样的 extends 继承

```ts
interface CloudCalendar extends Calendar {
    sync(): void
}
```



## 使用接口

实现谷歌日历 类

`implements` 关键字 `GoogleCalendar` 类 上必须要有 `Calendar` 的属性和方法

```ts
class GoogleCalendar implements Calendar {
    constructor(public name: string) {}
    
    addEvent(): void {
        throw new Error('Method not implemented')
    }
    removeEvent(): void {
        throw new Error('Method not implemented')
    }
}
```

