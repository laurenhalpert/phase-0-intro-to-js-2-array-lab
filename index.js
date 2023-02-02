const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    return cats.push(name);
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    return cats.pop();
}
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}
function prependCat(name) {
    const copyCats = [name, ...cats];
    return copyCats;
}
function removeLastCat() {
    const sliceCats = cats.slice(0,2);
    return sliceCats;
}
function removeFirstCat() {
    const sliceAgainCats = cats.slice(1);
    return sliceAgainCats;
}