import { Observable, of, from, concat } from 'rxjs';

import members from '../members';

// form creates en Obsevable from a collection type
from(members).subscribe(member => console.log(`${member.firstName}:${member.age}`));
//of creates an Observable of all the random value ags.
of(1,2,3,4,5,6,7,8).subscribe(value=> console.log(value));
// use concat when conbining many Observables
concat(of(1,2,3),from(['a','b','c'])).subscribe(value => console.log(value));
