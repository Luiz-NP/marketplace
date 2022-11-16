"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.editItem = exports.register = exports.products = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const product_1 = require("./product");
exports.products = [];
let option;
let option2;
const register = () => {
    console.clear();
    const obj = {
        name: "",
        price: 0,
        amount: 0,
    };
    obj.name = readline_sync_1.default.question("item name: ");
    obj.price = readline_sync_1.default.questionFloat("item price: ");
    obj.amount = readline_sync_1.default.questionInt("amount: ");
    const item = new product_1.Product(obj.name, obj.price, obj.amount);
    exports.products.push(item);
    console.clear();
    console.log("successfully registered item\n");
    readline_sync_1.default.keyInPause();
};
exports.register = register;
const editItem = () => {
    console.clear();
    console.table(exports.products);
    option = readline_sync_1.default.questionInt("enter item index: ");
    if (option > exports.products.length - 1) {
        console.clear();
        console.log(`item not found, the index of the last item is ${exports.products.length - 1}\n`);
        option2 = readline_sync_1.default.keyInYNStrict("try again?");
        if (option2 === true)
            return (0, exports.editItem)();
        return;
    }
    console.clear();
    console.table(exports.products[option]);
    exports.products[option].name = readline_sync_1.default.question("item name: ");
    exports.products[option].price = readline_sync_1.default.questionFloat("item price: ");
    exports.products[option].amount = readline_sync_1.default.questionInt("amount: ");
    console.clear();
    console.log("successfully edited item\n");
    console.table(exports.products[option]);
    readline_sync_1.default.keyInPause();
};
exports.editItem = editItem;
const deleteItem = () => {
    console.clear();
    console.table(exports.products);
    option = readline_sync_1.default.questionInt("enter item index: ");
    if (option > exports.products.length - 1) {
        console.clear();
        console.log(`item not found, the index of the last item is ${exports.products.length - 1}\n`);
        option2 = readline_sync_1.default.keyInYNStrict("try again?");
        if (option2 === true)
            return (0, exports.deleteItem)();
        return;
    }
    console.clear();
    console.table(exports.products[option]);
    option2 = readline_sync_1.default.keyInYNStrict(`Are you sure you want to delete "${exports.products[option].name}" from the list?`);
    if (option2 === true) {
        console.clear();
        exports.products.splice(option, 1);
        console.log("successfully deleted\n");
        readline_sync_1.default.keyInPause();
    }
};
exports.deleteItem = deleteItem;
