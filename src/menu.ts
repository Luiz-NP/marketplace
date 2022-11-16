import readline from "readline-sync";
import { register } from "./operations";
import { stock } from "./stock";

const options: string[] = ["register an item", "see registered items"];
let option: number | boolean;

let firstVisit = true;

const menu = (): void => {
    if (firstVisit) {
        console.clear();
        console.log("Hi, Welcome\n");
        readline.keyInPause();
        firstVisit = false;
    }

    console.clear();

    option = readline.keyInSelect(options, "what do you want?");

    switch(option) {
        case 0: register();
        break;
        case 1: stock();
        break;
        case -1: {
            console.clear();
            option = readline.keyInYNStrict("do you really want to leave?\n");

            if (option === true) process.exit();
        }
        break;
    }


    menu();
}

menu();