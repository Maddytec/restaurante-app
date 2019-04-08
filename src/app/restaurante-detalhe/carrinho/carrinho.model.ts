import { Item } from './../item/item-model';

export class Carrinho {

    constructor( public item: Item, public quantidade = 1) {
    }

    valor(): number {
        return this.item.price * this.quantidade.valueOf();
    }
}
