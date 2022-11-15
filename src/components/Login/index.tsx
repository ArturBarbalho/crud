import * as S from './styles'
import { useState, useContext } from 'react'
import { UserContext } from '../../context/Context';
import CriarUsuario from '../CriarUsuario';
import axios from 'axios'
import { setCookie } from 'nookies'
import { useRouter } from 'next/router'
const Login = () => {
  const router = useRouter()
  const {setLogado} = useContext(UserContext)
  const {hasAccount} = useContext(UserContext)
  const {setHasAccount} = useContext(UserContext)
  const [res,setRes]=useState('')
  type props = {
    email:string
    senha:string
  }

  function logar({email, senha}:props){
    const data = {
      email:email,
      password:senha
    }
    if(email && senha != ''){
    axios.post('/api/users/login',data)
     .then((res)=>{
        const token = res.data.accessToken
        const id = res.data.id.toString()
        setCookie(null,'token',token,{
          maxAge:7200,
          path:'/'
        } )
        setCookie(null,'id',id,{
          maxAge:7200,
          path:'/'
        } )
         setLogado(true)
        router.push('/')
     })
     .catch(()=>{setRes('Dados incorretos')})
    }
    else{
      setRes('Preencha os dados para entrar')
    }
  }

  

 const Logar = ()=>{
  const [email,setEmail]=useState('')
  const [senha,setSenha]=useState('')
  return(
    <S.Wrapper>
      <h1>Login</h1>
  
      <input 
      type="text"
       placeholder='Email' 
       onChange={(e)=>{setEmail(e.target.value)}} />
  
      <input 
      type="password" 
      placeholder='Senha' 
      onChange={(e)=>{setSenha(e.target.value)}}/>

      <S.Buttons>
      <button onClick={()=>{logar({email, senha})}} >Login</button>
      <button onClick={()=> {setHasAccount(false)} }>Create account</button>
      </S.Buttons>
      <S.Res>{res}</S.Res>
    </S.Wrapper>
  )
 } 

  return(
    <>
    {hasAccount?<Logar/>:<CriarUsuario/>}
    </>
  )



}


export default Login

