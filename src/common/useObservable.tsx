import { useEffect, useState } from "react";
import { Observable } from "rxjs";

const useObservable = <T extends unknown>(observable: Observable<T>) => {
    const [value, setValue] = useState<T>();

    useEffect(() => {
        const subscription = observable.subscribe(setValue);
        return () => subscription.unsubscribe();
    }, [observable]);

    return value;
};

export default useObservable;
