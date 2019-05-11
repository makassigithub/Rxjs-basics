"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// Scheduler allow us to have fine grained control over how the observables are executed.
// console.log('++++++++srcipt starts executing++++++');
// const queue$ = of('queueScheduler', queueScheduler); //runs synchronously
// const asap$ = of('asapScheduler', asapScheduler); // runs asychronously with higher priority than normal queued tasks.
// const async$ = of('asyncScheduler', asyncScheduler); // Run asynchronously.
// merge(async$,asap$,queue$).subscribe(value => console.log(value));
// console.log('+++++++++++Script ended executing+++++++');
/* OUTPUT:
    ++++++++srcipt starts executing++++++
    queueScheduler
    +++++++++++Script ended executing+++++++
    asapScheduler
    asyncScheduler
*/
// Scheduler operator are use to differe potential heavy operation to avoid blocking
console.log('script start executing....................');
rxjs_1.from([1, 2, 3, 4]).pipe(operators_1.tap(function (value) { return console.log("VALUE: " + value); }), operators_1.observeOn(rxjs_1.asyncScheduler), operators_1.tap(function (value) { return console.log("DOUBLED VALUE: " + value * 2); })).subscribe();
console.log('script stops executing.....................');
