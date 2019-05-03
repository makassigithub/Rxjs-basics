"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const members_1 = __importDefault(require("../members"));
const member$ = rxjs_1.from(members_1.default);
//#region Creating an observer
const memberObserver = {
    next: (member) => console.log('The value is: ' + member.firstName),
    error: () => console.log('An error has happened'),
    complete: () => console.log('No more streaming is left')
};
//Subscribing to the observable with a predefined observer object.
member$.subscribe(memberObserver);
//Injecting an observer in an observable
member$.subscribe((member) => console.log(`${member.firstName} is : ${member.age}`), () => console.log('An error has happened'), () => console.log('No more streaming is left'));
//#endregion
