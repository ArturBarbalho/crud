import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

export function autenticate(req:NextApiRequest, res:NextApiResponse){
   
    const token = req.headers.authorization
    const secret = process.env.ACCESS_TOKEN_SECRET
    //const taken = taken?.substring(1,taken.length -1)

    if(token && secret){
    jwt.verify(token,secret,(err)=>{

        if(err) return res.status(403).json({err})
    })

    }
   else{
    return res.status(403).json({error:'no token detected'})
   }
}

