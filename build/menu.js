"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const operations_1 = require("./operations");
const stock_1 = require("./stock");
const options = ["register an item", "see registered items"];
let option;
let firstVisit = true;
const menu = () => {
    if (firstVisit) {
        console.clear();
        console.log("Hi, Welcome\n");
        readline_sync_1.default.keyInPause();
        firstVisit = false;
    }
    console.clear();
    option = readline_sync_1.default.keyInSelect(options, "what do you want?");
    switch (option) {
        case 0:
            (0, operations_1.register)();
            break;
        case 1:
            (0, stock_1.stock)();
            break;
        case -1:
            {
                console.clear();
                option = readline_sync_1.default.keyInYNStrict("do you really want to leave?\n");
                if (option === true)
                    process.exit();
            }
            break;
    }
    menu();
};
menu();
