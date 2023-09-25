import { createContext, useState } from "react";

const MainContext = createContext()


export function MainProvider({children})
{
    const [frog, setFrog] = useState("fish")
    return(
        <MainContext.Provider value={{frog, setFrog}}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContext;