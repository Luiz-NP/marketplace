"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.products = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const product_1 = require("./product");
exports.products = [];
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
