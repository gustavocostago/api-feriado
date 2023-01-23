import { NextApiRequest, NextApiResponse } from "next"

import prisma from '../../services/prismaClient'
import verificaData from "../../services/verificaData"

export default async function handleFeriadoGetOne(req:NextApiRequest,res:NextApiResponse){
    //verifica o metodo da requisicao
    if(req.method !== 'GET')
        return res.status(404).send('Not Found.')
    
    //verifica se a data eh valida
    if(verificaData(req.query.date.toString()) === false)
        return res.status(201).send("Data invalida, use o formato feriadoGetOne?date=YYYY-MM-DD")
    
    //busca entre os registros o feriado desejado
    try{
        const feriado = await prisma.feriados314.findMany({
            where:{
                data:new Date(req.query.date.toString())
            }
        })
        //data nao encontrada
        if(feriado.length === 0)
            res.status(202).send('Essa data não é um feriado')
        else
            res.status(200).json(feriado)
    }
    //retorna possivel erro
    catch(error){
        res.status(500).send(error.message)
    }
    //desconecta-se do prisma
    finally{        
        await prisma.$disconnect()
    }
}