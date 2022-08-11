# 多态性

## 理解多态

一个对象采用不同的形式进行表现

这里实现了 Person Student Teacher 3个类

```ts
class Person {
    constructor(
      public firstName: string,
      public lastName: string
    ) {}
    get fullName() {
        return this.firstName + ' ' + this.lastName
    } 
    walk() {
        console.log('walking')
    }
}
class Student extends Person {
    constructor(
      public studentId: number,
      firstName: string,
      lastName: string
    ) { super(firstName, lastName)}
    takeTest() {
        console.log('Taking a test')
    }
}
class Teacher extends Person {
    override get fullName() {
        return 'Wow' + super.fullName // this.firstName + ' ' + this.lastName
    }
}
```

通过代码来看看 多态

每一次迭代 person 变量的类型都是不一样的

第一次是 student 第二次是 teacher

都拥有 `fullName` 作为共同的输出，但是展现的形态不一样！

```ts
printNames([
    new Student(1, 'XDD', 'Nothing')
    new Teacher('YYX', 'Vue')
])
function printNames(people: Person[]) {
    for (let person of people)
        console.log(person.fullName)
}
// XDD Nothing
// YYX Vue
```



## 多态的扩展

不用改变函数就能扩展，不做任何改变的情况下就能增强程序

```ts
class Principal extends Person {
    override get fullName() {
        return 'Principal' + super.fullName
    }
}
printNames([
    new Student(1, 'XDD', 'Nothing')
    new Teacher('YYX', 'Vue')
	new Principal('XiaoHu', 'LOL')
])
function printNames(people: Person[]) {
    for (let person of people)
        console.log(person.fullName)
}
// XDD Nothing
// Wow YYX Vue
// Principal XiaoHu LOL
```

