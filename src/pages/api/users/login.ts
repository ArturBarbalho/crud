import { NextApiRequest, NextApiResponse } from 'next';
import { login } from '../db/users';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export default async (req:NextApiRequest, res:NextApiResponse)=>{
    const {email, password} = req.body
    const Login = await login(email)

    if(Login && (await bcrypt.compare(password, Login.password))){ 
    const secret = process.env.ACCESS_TOKEN_SECRET
    if(secret){
      const token = jwt.sign({email},secret,{expiresIn:'2h'})
      res.json({accessToken:token, id:Login.id})
}
  } 
  else {
    res.status(403).json({ msg: "usuário ou senha inválidos" })
  }

}

  
    
