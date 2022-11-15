import { prisma } from "./db";
export async function getProdutosDB(){
    return prisma.public_produtos.findMany()
}
export async function cadastrar(name:string, price:number, description:string, categorie:string, userId:number){
    return prisma.public_produtos.create({
        data:{
            name, 
            price,
            description,
            categorie,
            userId
        }
    })
}
 type up = {
    id:number
    name?:string
    price?:number
    description?:string
    categorie?:string
}
export async function update(post:up){
    return prisma.public_produtos.update({
        where:{
            id:post.id
        },
        data:post
    })
}

export async function deletar(id:number){
    return prisma.public_produtos.delete({
        where:{
            id:id
        }
    })
}