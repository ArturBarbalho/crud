import { prisma } from "./db";


export async function getUsersDB(){
    return  prisma.public_users.findMany()
}

export async function createUserDB(name:string, email:string, passwordC:string){
    return prisma.public_users.create({
        data:{
            name:name,
            email:email,
            password:passwordC
        }
    })
}

export async function login(email:string, ){
    return prisma.public_users.findFirst({
        where:{
           email:email,
        }
    })
}