import { mergeMap, filter, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { XMLHttpRequest } from 'xmlhttprequest';

const url = 'http://0.0.0.0:8080/members';

function createXHR() {
  return new XMLHttpRequest();
}

//Creating my own operator by wrapping a built-in one:
function memberFilterOperator(){
  return filter(member => member.age >= 35 ),
  tap( member => console.log('tap-FirstName: '+member.firstName))
}
ajax({createXHR,url: url }).pipe(
    mergeMap(members => members.response),
    memberFilterOperator(),
).subscribe(
    member => console.log("subs-member: "+JSON.stringify(member))
)