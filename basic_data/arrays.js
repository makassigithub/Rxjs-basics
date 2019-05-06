"use strict";
exports.__esModule = true;
var operators_1 = require("rxjs/operators");
var ajax_1 = require("rxjs/ajax");
var xmlhttprequest_1 = require("xmlhttprequest");
var rxjs_1 = require("rxjs");
var url = 'http://0.0.0.0:8080/members';
function createXHR() {
    return new xmlhttprequest_1.XMLHttpRequest();
}
//Creating my own operator by wrapping a built-in one:
function memberFilterOperator(age, log) {
    // returns  a function that will be called with the obeservable.
    return function (source$) {
        //This function must return an observable for the next operator 
        //Or to be subscribe to.
        return new rxjs_1.Observable(function (subscriber) {
            //must subscribe to the incoming obsevable.
            source$.subscribe(
            //value
            function (member) {
                if (member.age >= age) {
                    if (log) {
                        console.log(member.firstName + ': passed');
                    }
                    subscriber.next(member);
                }
            }, 
            //error
            function (err) { return subscriber.error(err); }, 
            //completed
            function () { return subscriber.complete(); });
        });
    };
}
ajax_1.ajax({ createXHR: createXHR, url: url }).pipe(operators_1.flatMap(function (members) { return members.response; }), memberFilterOperator(35, true)).subscribe(function (member) { return console.log("subs-member: " + JSON.stringify(member)); });
