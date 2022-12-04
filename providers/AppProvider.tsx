import { useRouter } from 'next/router'
import React, { createContext, PropsWithChildren, useEffect, useState } from 'react'

export type IFSCData = {
    bank?: string,
    state?: string
}

export type AppContextPrams = {
    ifscData?: IFSCData,
    setIfscData: (ifscData: IFSCData)=>void
}

export const AppContext = createContext<AppContextPrams>({} as AppContextPrams)

const AppProvider = (props: PropsWithChildren<{}>) => {
    const [ifscData, setData] = useState<IFSCData>();
    const router = useRouter();

    const setIfscData = (ifscData: IFSCData) => {
        setData(ifscData);
    }

    useEffect(() => {
        setIfscData(router.query)
    }, [router])
  return (
    <AppContext.Provider value={{ifscData, setIfscData}}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider