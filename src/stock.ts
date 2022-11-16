import readline from "readline-sync";
import { products, editItem, deleteItem } from "./operations";

const options: string[] = ["edit an item", "delete an item"];
let option: number;

export const stock = () => {
    console.clear();
    console.table(products.length > 0 ? products : "no items...\n");

    if (products.length > 0) {
        option = readline.keyInSelect(options);

        switch(option) {
            case 0: editItem();
            break;
            case 1: deleteItem();
            break;
        }
    } else {
        readline.keyInPause();
    }
}