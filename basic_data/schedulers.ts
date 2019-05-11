import { asyncScheduler, asapScheduler, queueScheduler, of, merge } from 'rxjs';

// Scheduler allow us to have fine grained control over how the observables are executed.

console.log('++++++++srcipt starts executing++++++');

const queue$ = of('queueScheduler', queueScheduler); //runs synchronously
const asap$ = of('asapScheduler', asapScheduler); // runs asychronously with higher priority than normal queued tasks.
const async$ = of('asyncScheduler', asyncScheduler); // Run asynchronously.

merge(async$,asap$,queue$).subscribe(value => console.log(value));
console.log('+++++++++++Script ended executing+++++++');

/* OUTPUT:
    ++++++++srcipt starts executing++++++
    queueScheduler
    +++++++++++Script ended executing+++++++
    asapScheduler
    asyncScheduler
*/