class Order{
constructor(public adress: string,
            public number: number,
            public optinalAdress: string,
            public paymenteOption: string,
            public orderItem: OrderItem[] = []){}
}
class OrderItem{
    constructor(public quantity: number, public menuId :string){}
}

export{Order,OrderItem}