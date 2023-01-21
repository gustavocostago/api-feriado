import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import verificaData from "../../services/verificaData";

const prisma = new PrismaClient()

export default async function handleFeriadoGetOne(req:NextApiRequest,res:NextApiResponse){
    if(verificaData(req.query.date.toString()) === false)
        res.status(400).send("Data invalida, use o formato feriadoGetOne?date=YYYY-MM-DD")
    else{
        if(req.method === 'GET'){
            try{
                const feriado = await prisma.feriados1.findMany({
                    where:{
                        data:new Date(req.query.date.toString())
                    }
                });
                if(feriado.length === 0)
                    res.status(202).send('Essa data não é um feriado')
                else
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
}