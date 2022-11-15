import {update} from '../db/produtos'
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req:NextApiRequest, res:NextApiResponse)=>{
    const post = req.body
    const postar = await update(post)
    res.json({res:postar})
}