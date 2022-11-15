import * as S from './styles'
import {props} from './types'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react';

const Produtos = (props:props) => {

const router = useRouter()

const prods = props.data || []
const [seach,setSeach]=useState('')
const [desc,setDesc]=useState('')
const [displayDesc, setDisplayDesc]=useState(false)

const description = (e:string)=>{
  setDesc(e)
  setDisplayDesc(true)
}

function del(e:number){
  const data = {
    id:e
  }
 axios.post('/api/produtos/delete',data)
  .then(()=>router.reload())
  .catch((err)=>console.log(err))
}

const prodFiltrer = prods.filter((e)=>{
  if(e.name.includes(seach))
  return e
})


const produtos = prodFiltrer.map((e)=>{
  return(
    <>
    <S.Produto  key={e.id}>
      <td onClick={()=>{description(e.description)}} >{e.name}</td>
      <td onClick={()=>{description(e.description)}}>{e.categorie}</td>
      <td onClick={()=>{description(e.description)}}>{e.price}</td>
      <td >
        <S.Button onClick={()=>del(e.id)} >Excluir</S.Button> 
      </td>
    </S.Produto>
    
    </>
  )
})




const proPag = produtos
const itensPerPage = 8 
const [currentPage,setCurrentPage]=useState(0)

const pages = Math.ceil(proPag.length/itensPerPage)
const start = currentPage * itensPerPage
const end = start + itensPerPage
const currentItens = proPag.slice(start,end)




return(
  <S.Wrapper>

     <S.Seach>
      <div>Pesquisar:</div>
      <S.Input type="text"
      onChange={(e)=>setSeach(e.target.value)}
      placeholder='digite o nome do produto' />

     </S.Seach>

    <S.Desc display={displayDesc}>
    <span onClick={()=>setDisplayDesc(false)} >X</span>
    <p>{desc}</p>
    </S.Desc>

    <S.Table>
    <tbody>
     <tr>
      <th>Nome</th>
      <th>Categoria</th>
      <th>Preço</th>
      <th>Ação</th>
     </tr>
     {currentItens}
     </tbody>
    </S.Table>
     
    <S.Pagination>
      {Array.from(Array(pages),(item,index)=>{
        return(
         <button 
          value={index} 
          onClick={(e)=>{      
            const a = Number(e.currentTarget.value)
            setCurrentPage(a)
          }} 
          key={index} >
          {index+1}
          </button>)
      })}
    </S.Pagination>

  </S.Wrapper>
)}

export default Produtos