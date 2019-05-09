"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// Implemeting Cold Observable unicasting.
// Each subcscription triggers an excution of the observable
// Because the producer is inside the observable
var timeInter$ = rxjs_1.interval(10).pipe(operators_1.take(4));
timeInter$.subscribe(function (value) { return console.log('Observer 1: ' + value); });
setTimeout(function () {
    timeInter$.subscribe(function (value) { return console.log('Observer 2: ' + value); });
}, 1000);
setTimeout(function () {
    timeInter$.subscribe(function (value) { return console.log('Observer 3: ' + value); });
}, 2000);
