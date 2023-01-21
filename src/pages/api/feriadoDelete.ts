import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handleFeriadoDelete(req:NextApiRequest,res:NextApiResponse){
   if(req.method === 'DELETE'){
      try{
         const feriado = await prisma.feriados314.delete({
            where:{
               id: parseInt(req.query.id.toString()) 
            }
         })
         res.status(200).send('Feriado deletado com sucesso')
         await prisma.$disconnect()
      }
      catch(e){
         res.status(500).send(e.message);
         await prisma.$disconnect()
      }  
   }
   else
      res.status(404).send('Not found');
}