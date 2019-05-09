"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// Using multicast operators
// The Observable return a connection to be called
// before execution starts.
var timeInter$ = rxjs_1.interval(1000).pipe(operators_1.take(4), operators_1.multicast(new rxjs_1.Subject()));
timeInter$.subscribe(function (value) { return console.log('Observer 1: ' + value); });
setTimeout(function () {
    timeInter$.subscribe(function (value) { return console.log('Observer 2: ' + value); });
}, 1000);
setTimeout(function () {
    timeInter$.subscribe(function (value) { return console.log('Observer 3: ' + value); });
}, 2000);
timeInter$.connect();
