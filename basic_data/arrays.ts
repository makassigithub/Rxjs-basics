import {ajax} from 'rxjs/ajax';
import { XMLHttpRequest } from 'xmlhttprequest';

function createXHR() {
  return new XMLHttpRequest();
}

const membersUrl = 'http://0.0.0.0:8080/members';
(function getMembers() {
    ajax({
        createXHR,
        url: membersUrl,
    })
        .subscribe(data => {
            const members = data.response;
            for(let member of members){
                console.log(`${member.firstName}:${member.age}`);
            }
        },
        error => console.log(`Error:${error}`)
    )
}());