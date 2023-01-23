import { NextApiRequest, NextApiResponse } from "next"

import prisma from '../../services/prismaClient'

export default async function handleFeriadoDeleteAll(req:NextApiRequest,res:NextApiResponse) {
    //verifica metodo de requisicao
    if(req.method !== 'DELETE')
        return res.status(404).send('Not Found')
    
    //apaga todos os feriados registrados    
    try{
        await prisma.feriados314.deleteMany()
        res.status(200).send('Feriados Deletados')
    }
    //retorna possivel erro
    catch(error){
        res.status(500).send(error.message)
    }
    //desconecta-se com o prisma
    finally{
      await prisma.$disconnect()    
    } 
}