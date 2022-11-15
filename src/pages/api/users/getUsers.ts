import { NextApiRequest, NextApiResponse } from "next";
import { getUsersDB } from "../db/users";


export default async (req:NextApiRequest, res:NextApiResponse) => {
 const getUsers = await getUsersDB()
 res.json({result:getUsers})
}

