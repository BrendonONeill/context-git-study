import { Children, createContext, useState } from "react";

const test = createContext({})


export function MainProvider({children})
{
    const [c, setC] = useState(true)
    return(
        <test.Provider value={{c}}>
            {children}
        </test.Provider>
    )
}

export default test;