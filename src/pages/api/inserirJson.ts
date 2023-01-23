import { NextApiRequest } from "next";
import { NextApiResponse } from "next"

import prisma from '../../services/prismaClient'
import convertData from "../../services/convertData";
import dados from "../../../feriados_nacionais_2023.json"
import existeFeriado from "../../services/existeFeriado";
var index = 0

export default async function handleInserirJson(req:NextApiRequest, res:NextApiResponse) {
    //verifica o metodo da requisicao
    if(req.method !== 'POST')
        return res.status(404).send('Not found.')
    //verifica se ha duplicidade
    while(index < dados.length){
        const existeData = dados[index].data
        const existeferiado = await existeFeriado(existeData)
        if(existeferiado === 200)
            return res.status(500).send('Feriado já existente')
        index++
    }  
    //grava os registros
    try{
        await prisma.feriados314.createMany({
            data: dados.map((feriado)=>{
                return{                        
                    nome: feriado.nome,
                    descricao: feriado.descricao,
                    tipo: feriado.tipo,
                    data: convertData(feriado.data)
                }
            }),
            skipDuplicates:true
        })
        res.status(201).send('Arquivo adicionado com Sucesso')                                  
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