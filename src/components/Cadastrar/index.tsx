import * as S from './styles'
import { useState } from 'react';
import axios from 'axios'
import { parseCookies } from 'nookies';

const Cadastrar = () => { 
  const [nome,setNome] = useState('')
  const [categoria,setCategoria] = useState('')
  const [preço,setPreço] = useState('')
  const [descrição,setDescrição] = useState('')
  const cookie = parseCookies()
  const userId = Number(cookie.id)
  const token = cookie.token
  const [resposta,setResposta]=useState('')
  const [bgColor,setBgColor]=useState(false)
  function send(){
    const data = {
      "name": nome,
      "price":Number(preço),
      "description": descrição,
      "categorie":categoria,
      "userId":userId 
    }
    if((nome && categoria && descrição )==''){
      setResposta('preencha os campos para cadastrar o produto')
      setBgColor(false)
    }
    else{
    const head = {
      headers:{
        'Authorization':token
      }
    }
    axios.post('/api/produtos/cadastrar', data,head)
     .then(()=>{
      setBgColor(true)
      setResposta('produto adicionado com sucesso')
      setNome('')
      setCategoria('')
      setPreço('')
      setDescrição('')
    })
     .catch((err)=>{console.log(err)})
    } 
  }
console.log(preço)
  return(
  <S.Wrapper>
    <h1>Cadastrar produto</h1>

    <input type="text"
     value={nome}
     maxLength={9}
     onChange={(e)=>{setNome(e.target.value)}} 
     placeholder='nome' />

    <input type="text"
     value={categoria}
     maxLength={9}
     onChange={(e)=>{setCategoria(e.target.value)}} 
    placeholder='categoria' />

    <input type="number"
     value={preço}
     onChange={(e)=>{setPreço(e.target.value)}}
     placeholder='preço' />

    <textarea  
    value={descrição}
    onChange={(e)=>{setDescrição(e.target.value)}} 
    placeholder='descrição' />

    <button onClick={()=>{send()}} >Cadastrar</button>

    <S.Response bgcolor={bgColor} >{resposta}</S.Response>
  </S.Wrapper>
)
}
export default Cadastrar