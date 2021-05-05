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

    if (argv.length < 2) {
        console.error('Usage: ./a.out next.txt info.json');
        std.exit(1);
    }

    const themes_fname = argv[0];
    const info_fname = argv[1];

    let f = std.open(themes_file, 'r');
    let themes = f.readAsString().split();

}

main();
