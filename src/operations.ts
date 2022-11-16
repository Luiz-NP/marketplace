import readline from "readline-sync";
import { Product } from "./product";

export const products: Product[] = [];
let option: number;
let option2: boolean;

interface Item {
    name: string;
    price: number;
    amount: number;
}

export const register = () => {
    console.clear();

    const obj: Item = {
        name: "",
        price: 0,
        amount: 0,
    };

    obj.name = readline.question("item name: ");
    obj.price = readline.questionFloat("item price: ");
    obj.amount = readline.questionInt("amount: ");

    const item = new Product(obj.name, obj.price, obj.amount);
    products.push(item);

    console.clear();
    console.log("successfully registered item\n");
    readline.keyInPause();
}

export const editItem = (): void => {
    console.clear();
    console.table(products);

    option = readline.questionInt("enter item index: ");

    if (option > products.length-1) {
        console.clear();
        console.log(`item not found, the index of the last item is ${products.length-1}\n`);
        option2 = readline.keyInYNStrict("try again?");

        if (option2 === true) return editItem();

        return;
    }

    console.clear();
    console.table(products[option]);

    products[option].name = readline.question("item name: ");
    products[option].price = readline.questionFloat("item price: ");
    products[option].amount = readline.questionInt("amount: ");

    console.clear();
    console.log("successfully edited item\n");
    console.table(products[option]);
    readline.keyInPause();
}

export const deleteItem = (): void => {
    console.clear();
    console.table(products);

    option = readline.questionInt("enter item index: ");

    if (option > products.length-1) {
        console.clear();
        console.log(`item not found, the index of the last item is ${products.length-1}\n`);
        option2 = readline.keyInYNStrict("try again?");

        if (option2 === true) return deleteItem();

        return;
    }

    console.clear();
    console.table(products[option]);

    option2 = readline.keyInYNStrict(`Are you sure you want to delete "${products[option].name}" from the list?`);

    if (option2 === true) {
        console.clear();
        products.splice(option, 1);
        console.log("successfully deleted\n");
        readline.keyInPause();
    }
}