import { Observable } from "rxjs";

export const getNumbers = new Observable((subscriber) => {
  //we emit value
  subscriber.next(1); //emits 1
  subscriber.next(2); //emits 2
  subscriber.next(3); //emits 3
  setTimeout(() => {
    subscriber.next(4); //emits 4
    subscriber.complete(); //finally, the observable complete & finishes
  }, 1000);
});
