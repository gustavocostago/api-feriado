import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import convertData from '../../services/convertData'

const prisma = new PrismaClient()

export default async function handleFeriadoUpdate(req:NextApiRequest,res:NextApiResponse){
   if(req.method === 'PUT'){
      try{
         const feriado = await prisma.feriados314.update({
            where:{
               id: parseInt(req.query.id.toString()) 
            },
            data:{
               nome: req.body.nome,
               descricao: req.body.descricao,
               tipo: req.body.tipo,
               data: convertData(req.body.data)
            }
         })
         res.status(200).send('Update Realizado com Sucesso')
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