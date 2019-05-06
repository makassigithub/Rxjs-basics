"use strict";
exports.__esModule = true;
var operators_1 = require("rxjs/operators");
var ajax_1 = require("rxjs/ajax");
var xmlhttprequest_1 = require("xmlhttprequest");
var url = 'http://0.0.0.0:8080/members';
function createXHR() {
    return new xmlhttprequest_1.XMLHttpRequest();
}
//Creating my own operator by wrapping a built-in one:
function memberFilterOperator() {
    return operators_1.filter(function (member) { return member.age >= 35; }),
        operators_1.tap(function (member) { return console.log('tap-FirstName: ' + member.firstName); });
}
ajax_1.ajax({ createXHR: createXHR, url: url }).pipe(operators_1.mergeMap(function (members) { return members.response; }), memberFilterOperator()).subscribe(function (member) { return console.log("subs-member: " + JSON.stringify(member)); });
