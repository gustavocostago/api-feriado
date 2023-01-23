import type { NextApiRequest, NextApiResponse } from 'next'

import convertData from '../../services/convertData'
import prisma from '../../services/prismaClient'
import verificaData from '../../services/verificaData'

export default async function handleCriaFeriado(req:NextApiRequest,res:NextApiResponse){
   //verifica metodo de requisicao
   if(req.method !== 'POST')
      return res.status(404).send('Not found.')
   
   //verifica se a data eh valida
   if(verificaData(req.body.data.split('/').reverse().join('-')) === false)
      return res.status(201).send("Data invalida")
   
   //cria feriado
   try{
      const feriado = await prisma.feriados314.create({
         data:{
            nome: req.body.nome,
            descricao: req.body.descricao,
            tipo: req.body.tipo,
            data: convertData(req.body.data)
         }
      })
      res.status(201).json(feriado)
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