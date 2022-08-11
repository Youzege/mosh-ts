# 索引签名

## 动态添加属性

设置座位

```ts
class SseatAssignment {
    [seatNumber: string]: string
}
let seats = new SeatAssignment()
seats.A1 = 'XDD' // seats['A1'] = 'XDD'
seats.A2 = 'HHH'
```

