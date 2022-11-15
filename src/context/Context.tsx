import {createContext, ReactNode, useState} from 'react'

const log = {
    logado:false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setLogado:()=>{},

    hasAccount:true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setHasAccount:()=>{}
}
 
interface ctx {
    logado:boolean
    setLogado:(newState:boolean)=>void
    hasAccount:boolean
    setHasAccount:(newState:boolean)=>void
}
 
export const UserContext = createContext<ctx>(log)
 
 
interface propes{
    children: ReactNode
  }
 
export function Contexto ({children}:propes){
 
	const [logado,setLogado]=useState(log.logado)
    const [hasAccount,setHasAccount]=useState(log.hasAccount)
    
	return(
    <UserContext.Provider
    value={{logado,setLogado, hasAccount, setHasAccount}}
    >{children}</UserContext.Provider>)
}
