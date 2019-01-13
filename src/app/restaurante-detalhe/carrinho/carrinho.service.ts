import { Item } from 'app/restaurante-detalhe/item/item-model';
import { Carrinho } from './carrinho.model';

export class CarrinhoService {
    itens: Carrinho[] = [];

    addItem(item: Item) {
        let foundItem = this.itens.find((mItem) => mItem.item.id === item.id);
        if (foundItem) {
            foundItem.quantidade = foundItem.quantidade + 1;
        } else {
            this.itens.push(new Carrinho(item));
        }
    }

    removeItem(item: Carrinho) {
        this.itens.splice(this.itens.indexOf(item), 1);
    }


    limpar() {
        this.itens = [];
    }

    total(): number {
        return this.itens
        .map(item => item.valor())
        .reduce((prev, value) => prev + value, 0);
    }
}