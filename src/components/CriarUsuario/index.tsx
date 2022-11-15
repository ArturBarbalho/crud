import * as S from './styles'
import {Wrapper} from '../Login/styles'
import { UserContext } from '../../context/Context';
import { useContext, useState } from 'react';
import axios from 'axios'

const CriarUsuario = () => {
const {setHasAccount} = useContext(UserContext)
const [email,setEmail]=useState('')
const [senha,setSenha]=useState('')
const [nome, setNome]=useState('')



function criarUser(){
const data = {
  name:nome,
  email:email,
  password:senha
}
axios.post('/api/users/createUser', data)
  .then(()=>{
    setHasAccount(true)
  })
  .catch((err)=>{console.log(err)})
  
  
}


 return( 
  <Wrapper>
    <h1>Criar Conta</h1>
    <input type="text" placeholder='digite seu nome' onChange={(e)=>{setNome(e.target.value)}} />
    <input type="text" placeholder='defina um email' onChange={(e)=>{setEmail(e.target.value)}}/>
    <input type="password" placeholder='defina uma senha' onChange={(e)=>{setSenha(e.target.value)}}/>
    <S.Button onClick={()=>{criarUser()}} >Criar conta</S.Button> 
  </Wrapper>
)
}
export default CriarUsuario
