import { NextApiRequest, NextApiResponse } from "next"

import prisma from '../../services/prismaClient'

export default async function handleFeriadoGetAll(req:NextApiRequest,res:NextApiResponse){
    if(req.method !== 'GET')
        return res.status(404).send('Not Found.')
    try{
        const feriado = await prisma.feriados314.findMany();
        res.status(200).json(feriado)
    }
    catch(e){
        res.status(500).send(e)
    }
    finally{
        await prisma.$disconnect()
    }
}