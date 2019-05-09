import { Observable, Subject, interval } from 'rxjs';
import { take } from 'rxjs/operators';

// Implemeting Cold Observable unicasting.
// Each subcscription triggers an excution of the observable
// Because the producer is inside the observable

const timeInter$ = interval(10).pipe(
    take(4)
)

timeInter$.subscribe(
    value => console.log('Observer 1: '+ value),
)

setTimeout(() => {
    timeInter$.subscribe(
        value => console.log('Observer 2: '+ value),
    )
}, 1000);

setTimeout(() => {
    timeInter$.subscribe(
        value => console.log('Observer 3: '+ value),
    )
}, 2000);