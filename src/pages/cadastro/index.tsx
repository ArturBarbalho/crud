import type { NextPage } from 'next'
import Cadastrar from '../../components/Cadastrar'
import Login from '../../components/Login'
import {useContext} from 'react'
import { UserContext } from '../../context/Context'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'
const Cadastro:NextPage = ()=>{
    const {logado} = useContext(UserContext)
    const {setLogado}=useContext(UserContext)
    const cookies = parseCookies()

    //const [logado, setLogado]=useState(false)

    function isLog(){
      if(cookies.token){
           setLogado(true)
       } 
       else{
          setLogado(false)
       }
    }
     useEffect(
       ()=>{isLog()},[]
     )
    
    
    return(
        <>
        {logado?<Cadastrar/>:<Login/>}
        
        </>
    )
}
export default Cadastro