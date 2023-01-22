import { NextApiRequest, NextApiResponse } from "next"

import prisma from '../../services/prismaClient'
import verificaData from "../../services/verificaData"

export default async function handleFeriadoGetOne(req:NextApiRequest,res:NextApiResponse){
    if(req.method !== 'GET')
        return res.status(404).send('Not Found.')
        
    if(verificaData(req.query.date.toString()) === false)
        return res.status(400).send("Data invalida, use o formato feriadoGetOne?date=YYYY-MM-DD")
        
    try{
        const feriado = await prisma.feriados314.findMany({
            where:{
                data:new Date(req.query.date.toString())
            }
        });
        if(feriado.length === 0)
            res.status(202).send('Essa data não é um feriado')
        else
            res.status(200).json(feriado)
    }
    catch(error){
        res.status(500).send(error.message)
    }
    finally{        
        await prisma.$disconnect()
    }
}