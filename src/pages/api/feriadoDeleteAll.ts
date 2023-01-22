import { NextApiRequest, NextApiResponse } from "next"

import prisma from '../../services/prismaClient'

export default async function handleFeriadoDeleteAll(req:NextApiRequest,res:NextApiResponse) {
    if(req.method !== 'DELETE')
        return res.status(404).send('Not Found')
    try{
        await prisma.feriados314.deleteMany()
        res.status(200).send('Feriados Deletados')
    }
    catch(error){
        res.status(500).send(error.message)
    }
    finally{
      await prisma.$disconnect()    
    } 
}