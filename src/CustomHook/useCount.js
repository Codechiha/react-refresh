import { useState } from 'react';

/*      Custom Hooks
    Main Purpose: Maintains the principle of DRY. Reusability
    Prime Use: Can utilize multiple built-in hooks to create one reusable hook
    3 Rules:
     1. Best Practice: must be named with "use" prefix (useState, useEffect, etc...)
     2. Must be at the highest level of a component
     3. Has to be inside a component
*/

export const useCount = (init = 0) => {
    const [ count, setCount ] = useState(init)

    const increase = () => {
        setCount((val) => val + 1)
    };
    const decrease = () => {
        setCount((val) => val - 1)
    };

    const reset = () => {
        setCount((val) => val = 0)
    };

    return { count, increase, decrease, reset };
};

