import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handleFeriadoGetAll(req:NextApiRequest,res:NextApiResponse){
    if(req.method === 'GET'){
        try{
            const feriado = await prisma.feriados314.findMany();
            res.status(200).json(feriado)
            await prisma.$disconnect()
        }
        catch(e){
            res.status(500).send(e)
            await prisma.$disconnect()
        }
    }
    else{
        res.status(404).send('Not Found.')
    }
}