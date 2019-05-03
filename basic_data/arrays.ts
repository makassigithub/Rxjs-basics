import { of,from } from 'rxjs';

import members from '../members';
const member$ = from(members);

//#region Creating an observer

const memberObserver = {
    next: (member: any) => console.log('The value is: '+member.firstName),
    error: () => console.log('An error has happened'),
    complete: ()=> console.log('No more streaming is left')
}

//Subscribing to the observable with a predefined observer object.
    member$.subscribe(memberObserver);
//Injecting an observer in an observable
member$.subscribe(
    (member: any) => console.log(`${member.firstName} is : ${member.age}`),
    () => console.log('An error has happened'),
    ()=> console.log('No more streaming is left')
)
//#endregion