"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const members_1 = __importDefault(require("../members"));
// form creates en Obsevable from a collection type
rxjs_1.from(members_1.default).subscribe(member => console.log(`${member.firstName}:${member.age}`));
//of creates an Observable of all the random value ags.
rxjs_1.of(1, 2, 3, 4, 5, 6, 7, 8).subscribe(value => console.log(value));
// use concat when conbining many Observables
rxjs_1.concat(rxjs_1.of(1, 2, 3), rxjs_1.from(['a', 'b', 'c'])).subscribe(value => console.log(value));
