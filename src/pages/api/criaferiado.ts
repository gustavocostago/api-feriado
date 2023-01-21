import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import convertData from '../../services/convertData'

const prisma = new PrismaClient()

export default async function handleCriaFeriado(req:NextApiRequest,res:NextApiResponse){
   if(req.method === 'POST'){
      try{
         const feriado = await prisma.feriados1.create({
            data:{
               nome: req.body.nome,
               descricao: req.body.descricao,
               tipo: req.body.tipo,
               data: convertData(req.body.data)
            }
         })
         res.status(201).json(feriado)
         await prisma.$disconnect()
      }
      catch(e){
         res.status(500).send(e);
         await prisma.$disconnect()
      }  
   }
   else
      res.status(404).send('Not found.');
}