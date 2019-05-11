import { asyncScheduler, asapScheduler, queueScheduler, of, merge, from } from 'rxjs';
import { tap, observeOn } from 'rxjs/operators';

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
from([1,2,3,4]).pipe(
    tap(value => console.log(`VALUE: ${value}`)),
    observeOn(asyncScheduler),
    tap(value => console.log(`DOUBLED VALUE: ${value * 2}`))
).subscribe();
console.log('script stops executing.....................');

/* OUTPUT:
script start executing....................
VALUE: 1
VALUE: 2
VALUE: 3
VALUE: 4
script stops executing.....................
DOUBLED VALUE: 2
DOUBLED VALUE: 4
DOUBLED VALUE: 6
DOUBLED VALUE: 8
*/