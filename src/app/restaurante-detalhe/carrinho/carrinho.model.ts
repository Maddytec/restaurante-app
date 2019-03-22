import { Item } from './../item/item-model';

export class Carrinho {

    constructor( public item: Item, public quantidade: Number = 1) {
    }

    valor(): Number {
        return this.item.price * this.quantidade.valueOf();
    }
}
