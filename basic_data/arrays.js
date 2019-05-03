"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
//#region Creating an observer
//Each subscription to an observable triggers it's execution
//Then leading to a new data streaming 
const timeObservable$ = new rxjs_1.Observable(subscriber => {
    const currentTime = new Date().toLocaleTimeString();
    subscriber.next(currentTime);
});
timeObservable$.subscribe((value) => console.log('subscriber 1 time is: ' + value));
setTimeout(() => timeObservable$.subscribe((value) => console.log('subscriber 2 time is: ' + value)), 1000);
setTimeout(() => timeObservable$.subscribe((value) => console.log('subscriber 3 time is: ' + value)), 2000);
//#endregion
