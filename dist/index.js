Object.defineProperty(exports, "__esModule", { value: true });
const animals_1 = require("./animals");
const animals = [
    new animals_1.Lion('王富贵', 12),
    new animals_1.Tiger('坤坤', 13),
    new animals_1.Monkey('小刘', 14),
    new animals_1.Dog('旺财', 18),
    new animals_1.Dog('王d贵', 12),
];
function hasFireShow(ani) {
    if (ani.singleFire && ani.doubleFire) {
        return true;
    }
    return false;
}
animals.forEach(a => {
    if (hasFireShow(a)) {
        a.singleFire();
        a.doubleFire();
    }
});
