class Pedido {
    constructor(
        public pedidoId: string,
        public endereco: string,
        public numero: number,
        public complemento: string,
        public formaPagamento: string,
        public itensCompra: ItemPedido[] = []
        ) { }
}

class ItemPedido {
    constructor(public quantidade: Number, public menuId: string ) {}
}

export { Pedido, ItemPedido }
