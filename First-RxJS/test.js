console.log('RxJS included?', !!Rx);

/* 1.1 Observable from array */
console.info("1.1 Observable from array");

let numbers = [1, 2, 3, 4];

let numbers$ = Rx.Observable.from(numbers);

numbers$.subscribe(
	v=> console.log(v),
	e=> console.log(e),
	f=> console.log("Finish 1")
);

/* 1.2 Observable from array */
console.info("1.2 Observable from array");

const obsSource$ = Rx.Observable.from(['Jonn', 'Smith', 'Neo'])
	.filter(v=> v.length >= 4)
	.map(v=> v.toUpperCase())
	.map(v=> `My name is: ${v}`);

obsSource$.subscribe(
	v=> console.log(v)
);
/* 2 */
console.info("2 Create empty observable");

const source$ = new Rx.Observable(observer=> {
	console.log("Create observer");
	observer.next("Hello world");
	observer.next("Another value");

	observer.error(new Error("Error: Something went wrong."));

	setTimeout(()=>{
		observer.next("Another value 2");
		observer.complete();
	}, 2000);
});

source$
	.catch(err=> Rx.Observable.of(err))
	.subscribe(
		v=> console.log(v),
		e=> console.log(e),
		f=> console.log("Finish 2")
	);