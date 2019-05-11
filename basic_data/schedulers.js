"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
// Scheduler allow us to have fine grained control over how the observables are executed.
console.log('++++++++srcipt starts executing++++++');
var queue$ = rxjs_1.of('queueScheduler', rxjs_1.queueScheduler); //runs synchronously
var asap$ = rxjs_1.of('asapScheduler', rxjs_1.asapScheduler); // runs asychronously with higher priority than normal queued tasks.
var async$ = rxjs_1.of('asyncScheduler', rxjs_1.asyncScheduler); // Run asynchronously.
rxjs_1.merge(async$, asap$, queue$).subscribe(function (value) { return console.log(value); });
console.log('+++++++++++Script ended executing+++++++');
