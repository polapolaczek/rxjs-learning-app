import { interval, concat, of, Observable } from "rxjs";
import { startWith, scan, takeWhile } from "rxjs/operators";
import useObservable from "../common/useObservable";

const countdown$ = interval(1000).pipe(
    startWith(10),
    scan((acc) => acc - 1),
    takeWhile((value) => value >= 0)
);

const timer$ = concat<Observable<string | number>>(
    countdown$,
    of("Your time is up")
);

const useTimer = () => useObservable<number | string>(timer$);

export default useTimer;
