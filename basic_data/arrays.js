"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const members_1 = __importDefault(require("../members"));
function memberSubscriiber(subscriber) {
    for (let member of members_1.default) {
        if (member.firstName === 'xxxxxxxxxx') {
            //When error or complete is called, no more streamed data is produced.
            subscriber.error('stoping on mai....');
        }
        subscriber.next(member);
    }
    setTimeout(() => subscriber.complete(), 500);
    return () => console.log('cleanUp is happeneing here');
}
// Different ways of creating an Observable
const members$ = new rxjs_1.Observable(memberSubscriiber); // or Observable.create(memberSubscriiber);
members$.subscribe((member) => console.log(member.firstName));
