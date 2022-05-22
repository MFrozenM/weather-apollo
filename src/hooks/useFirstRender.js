import {useEffect, useRef} from "react";

export function useFirstRender(fn, inputs) {
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) {
            return fn();
        }
        didMountRef.current = true;
    }, inputs);
}
