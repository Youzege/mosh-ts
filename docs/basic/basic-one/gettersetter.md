# class中的 getter 和 setter

## getter

想访问一个属性

```ts
class User() {
    constructor(private _balacne: number) {}
    get balance(): number {
        return this._balance
    }
}
let userB = new User(200)
userB.balance // 200
```

 

## setter

想改变一个属性值

```ts
class User() {
    constructor(private _balacne: number) {}
    set balance(value: number) {
        if (value < 0)
            throw new Error('无效值')
        this._balance = value
    }
}
let userB = new User(200)
userB.balance = 300
```

