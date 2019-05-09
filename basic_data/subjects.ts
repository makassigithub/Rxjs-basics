import { Observable, Subject, interval } from 'rxjs';
import { take, multicast} from 'rxjs/operators';

// Using multicast operators
// The Observable return a connection to be called
// before execution starts.

const timeInter$ = interval(1000).pipe(
    take(4),
    multicast(new Subject())
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

timeInter$.connect();