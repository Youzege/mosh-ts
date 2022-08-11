<!--
 * @Author: Youzege
 * @Date: 2022-08-10 22:16:30
 * @LastEditors: Youzege
 * @LastEditTime: 2022-08-10 22:18:48
 * @FilePath: \dd-typescript-docs\docs\basic\basic2.md
-->
# TS中的修饰符号

## readonly

不希望被修改

```ts
class User {
    readonly id: number
    constructor(id: number) {
        this.id = id
    }
}
let userA = new User(1)
userA.id = 2 //  error
```



## 可选属性

非必须的

```ts
class User {
    nickname?: string
    constructor() {}
}
let userA = new User()
```



## Public

默认情况下，都是属性都是public修饰符修饰...不需要额外加

```ts
class User {
    name: string // public name: string
    constructor(name: string) {
        this.name = name
    }
}
let userA = new User('XDD')
```



## Private

只能在类中访问这个属性/方法，私有变量

私有属性最好用下划线来命名，`_xxx`

本类内部可以调用，子类不可以，类也不可以

```ts
class User {
    readonly id: number
    private _balance: number
    constructor(id: number, balance: number) {
        this.id = id
        this._balance = balance
    }
}
let userA = new User(1, 1)
userA._balance = 2 //  error
```



## 快速定义属性

这样需要写好多次呀

```ts
class User {
    readonly id: number
    name: string
    private _balance: number
    constructor(id: number, name: string, _balance: number) {
        this.id = id
        this.name = name
        this._balance = balance
    }
}
let userA = new User(1, 'XDD', 100)
```

这样可以快速初始化属性

```ts
class User {
    constructor(
     public readonly id: number, 
     public name: string,
     private _balance: number
    ) {}
}
let userA = new User(1, 'XDD', 100)
```



## Static 静态属性

 设置静态属性

类本身可以调用，子类可以调用...

```ts
class User {
    private static _userNumber: number = 0
    start() { User.userNumber++ }
    stop() { User.userNumber-- }
    
    static get userNumber():number {
        return User._userNumber
    }
}

let userA = new User()
userA.start()
let userB = new User()
userB.start()

User.userNumber // 2
```



## Private VS Protected

对比一下两者

`protected`

可以继承访问父类的方法！

```ts
class Person {
    protected walk() {
        console.log('Walking')
    }
}
class Student extends Person {
    takeTest() {
        this.walk()
    }
}
```

`private`

不能继承

```ts
class Person {
    private walk() {
        console.log('Walking')
    }
}
class Student extends Person {
    takeTest() {
        this.walk() // error
    }
}
```

不过不常用 protected，除非你知道你要干嘛用。。。
