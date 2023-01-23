import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../services/prismaClient'

export default async function handleFeriadoDelete(req:NextApiRequest,res:NextApiResponse){
   //verifica metodo de requisicao
   if(req.method !== 'DELETE')
      return res.status(404).send('Not found')

   //deleta o registro desejado   
   try{
      await prisma.feriados314.delete({
         where:{
            id: parseInt(req.query.id.toString()) 
         }
      })
      res.status(200).send('Feriado deletado com sucesso')
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