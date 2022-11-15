import { cadastrar } from "../db/produtos";
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req:NextApiRequest, res:NextApiResponse)=>{
    const {name, price, description, categorie, userId} = req.body 

    const post = await cadastrar(name, price, description, categorie,userId)
    res.json({msg:post}) 
}