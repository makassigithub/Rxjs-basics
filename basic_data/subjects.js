"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// Implemeting Hot Observable multicasting.
// By introducting a subject in between the observables and the
// Observers, any time a value is produced, it is passes to them all.
var timeInter$ = rxjs_1.interval(1000).pipe(operators_1.take(4));
var timeSubject$ = new rxjs_1.Subject();
timeInter$.subscribe(timeSubject$);
timeSubject$.subscribe(function (value) { return console.log('Observer 1: ' + value); });
setTimeout(function () {
    timeSubject$.subscribe(function (value) { return console.log('Observer 2: ' + value); });
}, 1000);
setTimeout(function () {
    timeSubject$.subscribe(function (value) { return console.log('Observer 3: ' + value); });
}, 2000);
