import { NextApiRequest, NextApiResponse } from "next";
import { getUsersDB } from "../db/users";


export default async (req:NextApiRequest, res:NextApiResponse) => {
 const getUsers = await getUsersDB()
 const response = getUsers.map((e)=>{
    const n = {
    email: e.email, 
     name: e.name  
    }
    return  n
 })
 res.json({result:response})
}

