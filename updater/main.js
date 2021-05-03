import * as std from "std";

function log(obj) {
    console.log(JSON.stringify(obj, null, 2));
}

function logMap(map) {
    for (let [key, value] of map) {
        console.log(`${key}: ${JSON.stringify(value)}`);
    }
}

function main() {
    let argv = scriptArgs;
    argv.shift();
}

main();
