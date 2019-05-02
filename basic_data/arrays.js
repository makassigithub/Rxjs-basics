"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ajax_1 = require("rxjs/ajax");
const xmlhttprequest_1 = require("xmlhttprequest");
function createXHR() {
    return new xmlhttprequest_1.XMLHttpRequest();
}
const membersUrl = 'http://0.0.0.0:8080/members';
(function getMembers() {
    ajax_1.ajax({
        createXHR,
        url: membersUrl,
    })
        .subscribe(data => {
        const members = data.response;
        for (let member of members) {
            console.log(`${member.firstName}:${member.age}`);
        }
    }, error => console.log(`Error:${error}`));
}());
