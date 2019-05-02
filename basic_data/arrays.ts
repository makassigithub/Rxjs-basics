import { Observable } from 'rxjs';

import members from '../members';

function memberSubscriiber(subscriber: any): any {
    for( let member of members){
        if(member.firstName === 'xxxxxxxxxx') {
            //When error or complete is called, no more streamed data is produced.
            subscriber.error('stoping on mai....')
        }

        subscriber.next(member);
    }
    setTimeout(()=>  subscriber.complete(), 500);
   

    return ()=> console.log('cleanUp is happeneing here');
}

// Different ways of creating an Observable

const members$: any = new Observable(memberSubscriiber) // or Observable.create(memberSubscriiber);

members$.subscribe( (member: any) => console.log( member.firstName))