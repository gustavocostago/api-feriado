import { NextApiRequest, NextApiResponse } from "next"

import prisma from '../../services/prismaClient'

export default async function handleFeriadoGetAll(req:NextApiRequest,res:NextApiResponse){
    //verifica metodo de requisicao
    if(req.method !== 'GET')
        return res.status(404).send('Not Found.')

    //retorna todos os registros    
    try{
        const feriado = await prisma.feriados314.findMany();
        res.status(200).json(feriado)
    }
    //retorna possivel erro
    catch(e){
        res.status(500).send(e)
    }
    //desconecta-se do prisma
    finally{
        await prisma.$disconnect()
    }
}