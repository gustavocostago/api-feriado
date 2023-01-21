import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextApiResponse } from "next"

import convertData from "../../services/convertData";
import dados from "../../../feriados_nacionais_2023.json" assert { type: 'JSON' };

const prisma = new PrismaClient()
var i = 0;

export default async function handleInserirJson(req:NextApiRequest, res:NextApiResponse) {
    if(req.method === 'POST'){
        try{
            while(i<dados.length){
                const feriado = await prisma.feriados314.create({
                    data:{
                       nome: dados[i].nome,
                       descricao: dados[i].descricao,
                       tipo: dados[i].tipo,
                       data: convertData(dados[i].data)
                    }
                })
                i++ 
                if(i===dados.length)
                    res.status(201).send('Arquivo adicionado com Sucesso')                                  
            }
           
           await prisma.$disconnect()
        }
        catch(e){
           res.status(500).send('Internal Server Error.');
           await prisma.$disconnect()
        }  
     }
     else
        res.status(404).send('Not found.');
}