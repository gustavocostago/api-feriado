import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../services/prismaClient'

export default async function handleFeriadoDelete(req:NextApiRequest,res:NextApiResponse){
   if(req.method !== 'DELETE')
      return res.status(404).send('Not found')
   try{
      await prisma.feriados314.delete({
         where:{
            id: parseInt(req.query.id.toString()) 
         }
      })
      res.status(200).send('Feriado deletado com sucesso')
   }
   catch(error){
      res.status(500).send(error.message)         
   }
   finally{
      await prisma.$disconnect()
   }  
}