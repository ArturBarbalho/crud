import { getProdutosDB } from "../db/produtos";
import { NextApiResponse, NextApiRequest, NextApiHandler } from 'next';
import { autenticate } from "../jwt";
export default async (req:NextApiRequest,res:NextApiResponse,next:NextApiHandler)=>{
 autenticate(req,res)
 const produtos = await getProdutosDB()
 res.json({produtos: produtos})
}