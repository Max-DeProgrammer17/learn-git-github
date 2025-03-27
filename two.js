"use strict";
const {mul, div} = await import("./one.js");

const prom = promise.all([await import("./one.js")])
prom.then((promises) => {
    console.log(promises[0].mul());
})