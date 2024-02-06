import { useState } from "react";

export const useToggle = (init = false) => {
    const [state, setState] = useState(init);

    const toggle = () => {
        setState((val) => !val)
    }

    return [state, toggle]
}