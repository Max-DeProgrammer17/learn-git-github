"use strict";
// const {mul, div} = await import("./one.js");

const prom = Promise.all([await import("./one.js")])
prom.then((promises) => {
    promises[0].mul();
    promises[0].div();

})