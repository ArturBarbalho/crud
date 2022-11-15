import { deletar } from "../db/produtos";
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req:NextApiRequest, res:NextApiResponse)=>{
    const {id}=req.body
    const post = await deletar(id)
    res.json({msg:post})
}