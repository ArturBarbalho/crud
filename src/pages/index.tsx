import type { NextPage } from 'next'
import Produtos from '../components/Produtos'
import { useEffect, useContext } from 'react';
import { UserContext } from '../context/Context';
import Login from '../components/Login';
import { parseCookies } from 'nookies';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import cookie from 'cookie';
import {props} from '../components/Produtos/types'

export const getServerSideProps:GetServerSideProps = async (context)=>{
  try{
  const {req} = context 
  const cookies = cookie.parse(req.headers.cookie || '')
  axios.defaults.headers.common['Authorization'] = cookies.token
  //const url = process.env.GET_PROD
  //const data = await axios.get(`${url}/api/produtos/get`)
  const data = await axios.get('https://artcrud.netlify.app/api/produtos/get')
 return{
  props:{data:data.data.produtos}
 }
}
 catch(err){
  return { props: { error: 'Something went wrong' }}
 }
}


const Home: NextPage = (props:props) => {
 const {logado} = useContext(UserContext)
 const {setLogado} = useContext(UserContext)
 const cookies = parseCookies()
 const data=props.data
 

 function isLog(){
   if(cookies.token){
        setLogado(true)
    } 
    else{
       setLogado(false)
    }
 }
  useEffect(
    ()=>{
      isLog()
    },[]
  )
  
 
  return (
    < >
    {logado?<Produtos data={data} />:<Login/>}
    </>
  )
}

export default Home






