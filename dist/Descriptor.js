Object.defineProperty(exports, "__esModule", { value: true });
exports.printObj = exports.descriptor = void 0;
require("reflect-metadata");
const key = Symbol.for("descriptor");
function descriptor(description) {
    return Reflect.metadata(key, description);
}
exports.descriptor = descriptor;
function printObj(obj) {
    const cons = Object.getPrototypeOf(obj);
    if (Reflect.hasMetadata(key, cons)) {
        console.log(Reflect.getMetadata(key, cons));
    }
    else {
        console.log(cons.constructor.name);
    }
    for (const k in obj) {
        if (Reflect.hasMetadata(key, obj, k)) {
            console.log(`\t${Reflect.getMetadata(key, obj, k)}:${obj[k]}`);
        }
        else {
            console.log(`\t${k}:${obj[k]}`);
        }
    }
}
exports.printObj = printObj;
