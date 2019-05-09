import { Observable, Subject, interval } from 'rxjs';
import { take } from 'rxjs/operators';

// Implemeting Hot Observable multicasting.
// By introducting a subject in between the observables and the
// Observers, any time a value is produced, it is passes to them all.


const timeInter$ = interval(1000).pipe(
    take(4)
)

const timeSubject$ = new Subject();
timeInter$.subscribe(timeSubject$);

timeSubject$.subscribe(
    value => console.log('Observer 1: '+ value),
)

setTimeout(() => {
    timeSubject$.subscribe(
        value => console.log('Observer 2: '+ value),
    )
}, 1000);

setTimeout(() => {
    timeSubject$.subscribe(
        value => console.log('Observer 3: '+ value),
    )
}, 2000);