import { NextApiRequest } from "next";
import { NextApiResponse } from "next"

import prisma from '../../services/prismaClient'
import convertData from "../../services/convertData";
import dados from "../../../feriados_nacionais_2023.json"


export default async function handleInserirJson(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== 'POST')
        return res.status(404).send('Not found.')
        
    try{
        await prisma.feriados314.createMany({
            data: dados.map((feriado)=>{
                return{                        
                    nome: feriado.nome,
                    descricao: feriado.descricao,
                    tipo: feriado.tipo,
                    data: convertData(feriado.data)
                }
            })
        })
        res.status(201).send('Arquivo adicionado com Sucesso')                                  
    }
    catch(error){
        res.status(500).send(error.message)
    } 
    finally{
        await prisma.$disconnect()
    }   
}