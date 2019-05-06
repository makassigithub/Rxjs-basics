import { flatMap, filter, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { XMLHttpRequest } from 'xmlhttprequest';
import { Observable } from 'rxjs';
import { Member } from './model';

const url = 'http://0.0.0.0:8080/members';

function createXHR() {
  return new XMLHttpRequest();
}

//Creating my own operator by wrapping a built-in one:
function memberFilterOperator(age: number, log: boolean){
  // returns  a function that will be called with the obeservable.
  return (source$: Observable<Member>) => {
    //This function must return an observable for the next operator 
    //Or to be subscribe to.
    return new Observable(
      subscriber => {
        //must subscribe to the incoming obsevable.
        source$.subscribe(
           //value
          member => {
            if(member.age >= age){
              if(log){
                console.log(member.firstName+ ': passed');
              }
              subscriber.next(member);
            }
          },
          //error
          err => subscriber.error(err),
          //completed
          () => subscriber.complete()
        )
      }
    )
  }
}

ajax({createXHR,url: url }).pipe(
    flatMap(members => members.response),
    memberFilterOperator(35,true),
).subscribe(
    (member: Member) => console.log("subs-member: "+JSON.stringify(member))
)