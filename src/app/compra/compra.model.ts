class Pedido {
    constructor(
        public endereco: string,
        public numero: number,
        public complemento: string,
        public formaPagamento: string,
        public itensCompra: ItemPedido[] = [],
        public id: String
        ) { }
}

class ItemPedido {
    constructor(public quantidade: number, public menuId: string ) {}
}

export { Pedido, ItemPedido }
