"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stock = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const operations_1 = require("./operations");
const options = ["edit an item", "delete an item"];
let option;
const stock = () => {
    console.clear();
    console.table(operations_1.products.length > 0 ? operations_1.products : "no items...\n");
    if (operations_1.products.length > 0) {
        option = readline_sync_1.default.keyInSelect(options);
        switch (option) {
            case 0:
                (0, operations_1.editItem)();
                break;
            case 1:
                (0, operations_1.deleteItem)();
                break;
        }
    }
    else {
        readline_sync_1.default.keyInPause();
    }
};
exports.stock = stock;
