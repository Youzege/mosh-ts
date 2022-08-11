# class 继承

## Extends

创建一个 Person 类

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
```

创建一个 Student 类

```ts
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
let studentA = new Student(1, 'XDD', 'yzg@gmail.com')
student. // 可以.出Person的属性和方法
```



## 改变继承的属性

`tsconfig.json ->`  `noImplicitOverride` 明确覆盖方法

`override`关键字，用来改变继承类的某些属性方法

创建一个 Teacher 类

```ts
class Teacher extends Person {
    override get fullName() {
        return 'Wow' + super.fullName // this.firstName + ' ' + this.lastName
    }
}
let TeacherA = new Teacher('YZG', 'XDD')
TeacherA.fullName // Wow YZG XDD
```

