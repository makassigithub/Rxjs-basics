import { interval, Observable } from 'rxjs';

const ticker$ = interval(1000);

//#region 
// the complete function is not called when a subscriber unsubscribes before 
//steaming ends. One way of calling the complete() before exiting is to in implement a custon
// observable that returns a clean up function
// const tickerSubscriptionObject =  ticker$.subscribe(
//     (value:any) => console.log('value-ticker$: '+ value),
//     null,
//     ()=> console.log('tearing down subscription ticker$'),
// );

// setInterval(()=> {
//     console.log('unsubscribing.......')
//     tickerSubscriptionObject.unsubscribe();
//     return process.exit(0);
// },10000);
//#endregion


const ticker2$ = new Observable( subscriber => {
    let i = 0;
    const ID = setInterval( () => subscriber.next(i++), 1000);

    return () => {
        console.log('tearing down');
        clearInterval(ID);
    }
})

const tickerSubscriptionObject2 = ticker2$.subscribe(
    (value:any) => console.log('value:-ticker2$ '+ value),
    null,
    ()=> console.log('tearing down subscription ticker2$'),

)

setInterval(()=> {
        console.log('unsubscribing.......')
        tickerSubscriptionObject2.unsubscribe();
        return process.exit(0);
    },10000);