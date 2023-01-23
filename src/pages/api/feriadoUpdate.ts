import type { NextApiRequest, NextApiResponse } from 'next'

import convertData from '../../services/convertData'
import prisma from '../../services/prismaClient'

export default async function handleFeriadoUpdate(req:NextApiRequest,res:NextApiResponse){
   //verifica o metodo da requisicao
   if(req.method !== 'PUT')
      return res.status(404).send('Not found.')

   //atualiza os registros de acordo com o Id  
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