import { createUserDB } from "../db/users";
import { NextApiResponse, NextApiRequest } from 'next';
import bcrypt from 'bcrypt';

export default async (req:NextApiRequest, res:NextApiResponse)=>{
    const {name, email, password} = req.body
    

    const salt = await bcrypt.genSalt(10)
    const passwordC = await bcrypt.hash(password, salt)

    const createUser = await createUserDB(name, email, passwordC)
    res.json({result: createUser})
}