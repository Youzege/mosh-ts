<!--
 * @Author: Youzege
 * @Date: 2022-08-10 22:16:23
 * @LastEditors: Youzege
 * @LastEditTime: 2022-08-10 23:36:36
 * @FilePath: \dd-typescript-docs\docs\basic\basic-one\createClass.md
-->
# TS中创建类
## 创建 Class
类是创建对象的蓝图

将类当作一个工厂

例：创建一个用户 类

```ts
class User {
    // constructor 初始化属性
    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    // 创建一个获取用户信息的方法
    getUserInfo() {
        return {
            id: this.id,
            name: this.name
        }
    }
}
```

User类，提供了 实例化属性和方法，例如id属性、name属性，getUserInfo方法。

## 实例化对象

定义了一个User类，现在要实例化一个对象 userA

传入 参数：id、name

创建完成对象后，可以调用 User类中的属性和方法！

```ts
let userA = new User(1, 'XDD')
// userA.name
// userA.getUserInfo
```



## 类的类型

使用`typeof` `instanceof`检查 类

最好还是用 `instanceof` ！

```ts
typeof userA // object
userA instanceof Object // true
userA instanceof User // true
```

