import { Container, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

function Instrucoes() {
   return (
      <Container sx={{ my: 3 }}>
         <Typography
            sx={{ mb: 1, textAlign: "justify" }}
            variant="h4"
            id="teste-t-cnico-dev-backend"
         >
            Teste Técnico Dev Backend
         </Typography>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            Neste repositório você encontra o enunciado do teste técnico para a vaga de{" "}
            <em>Dev Backend</em> da{" "}
            <Link href="https://gincourbanismo.com.br/aginco/2/ha-20-anos-te-ajudamos-a-concretizar-seus-sonhos">
               Ginco
            </Link>
            ! Essa é mais uma etapa do nosso processo seletivo, parabéns por chegar até
            aqui.
         </Typography>
         <blockquote>
            <Typography sx={{ mb: 1, textAlign: "justify" }}>
               Você <em>pode</em> usar o problema descrito aqui para exercitar suas
               habilidades de desenvolvimento, mas a sua solução será avaliada por alguém
               da Ginco <strong>apenas se</strong> você estiver no processo seletivo da
               vaga de <em>Dev Backend</em>.
            </Typography>
         </blockquote>
         <Typography
            sx={{ mb: 1 }}
            variant="h5"
            id="o-problema"
            style={{ margin: "2vh 0" }}
         >
            O problema
         </Typography>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            Um Dev Backend na Ginco terá como uma das principais atividades o consumo e
            criação de APIs para integrar aplicações, por isso o teste envolve a criação
            de uma API básica utilizando Prisma integrada a um DB SQL hospedado no
            PlanetScale (As tabelas do DB estão implementadas e prontas pra uso),
            desenvolvida sobre o framework NextJS. Caso não conheça essas tecnologias,
            fique tranquilo, no fim dessa documentação colocamos alguns links básicos para
            referência.
         </Typography>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            Nossa API deve ter a função de inserir feriados nacionais presentes em um JSON
            no DB e também possibilitar a inserção de mais feriados por input via um form
            simples (o form já está implementado e pronto pra uso).
         </Typography>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            Esse repositório deve ser clonado por você para que você desenvolva com base
            na estrutura de projeto já criada nele. Suas APIs, seguindo a documentação do
            NextJS, devem ser criadas no diretório /src/pages/api.
         </Typography>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            A conexão ao banco de dados deve ter sido enviada previamente para você e você
            deve adicioná-la no arquivo .env na raiz desse repositório. Caso não tenha
            recebido a URL de conexão, entre em contato com o responsável pela sua
            entrevista. Além disso, você receberá também o nome da tabela que você deve
            usar ao manipular o DB.
         </Typography>
         <Typography
            sx={{ mb: 1 }}
            variant="h5"
            id="feriados"
            style={{ margin: "2vh 0" }}
         >
            Feriados
         </Typography>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            Os feriados nacionais fixos são:
         </Typography>
         <List>
            <ListItem>01/01 Ano Novo</ListItem>
            <ListItem>21/04 Tiradentes</ListItem>
            <ListItem>01/05 Dia do Trabalhador</ListItem>
            <ListItem>07/09 Independência</ListItem>
            <ListItem>12/10 Nossa Senhora Aparecida</ListItem>
            <ListItem>02/11 Finados</ListItem>
            <ListItem>15/11 Proclamação da República</ListItem>
            <ListItem>25/12 Natal</ListItem>
         </List>
         <Typography
            sx={{ mb: 1, textAlign: "justify" }}
            variant="h5"
            id="solu-o"
            style={{ margin: "2vh 0" }}
         >
            Solução
         </Typography>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            Para resolver esse problema você deve desenvolver uma API que permita
            consultar e cadastrar feriados nacionais.
         </Typography>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            Você deve desenvolver as seguintes funcionalidades:
         </Typography>
         <ol>
            <li>
               <Typography sx={{ mb: 1, textAlign: "justify" }}>
                  Inserir todos os feriados presentes no JSON no DB. (Note que o JSON
                  contém os campos: data, nome, tipo, descricao, uf e municipio. Você NÂO
                  DEVE inserir os campos uf e municipio. Insira na tabela apenas os
                  campos: data, nome, tipo e descricao). Você encontrará o JSON{" "}
                  <code>feriados_nacionais_2023.json</code> na raiz do repositório.
               </Typography>
            </li>
            <li>
               <Typography sx={{ mb: 1, textAlign: "justify" }}>
                  Uma rota que ao ser requisitada, devolva como resposta todos os dados
                  inseridos na tabela e o http status code 200.
               </Typography>
            </li>
            <li>
               <Typography sx={{ mb: 1, textAlign: "justify" }}>
                  Uma rota para consultar feriados, com os seguintes requisitos:
               </Typography>
               <Typography sx={{ mb: 1, textAlign: "justify" }}>
                  3.1) A rota deve ter a seguinte estrutura:
               </Typography>
               <code>
                  {" "}
                  localhost:xxxx/api/
                  <span className="hljs-built_in">[SUA_API]</span>?
                  <span className="hljs-built_in">date</span>=yyy-mm-dd
               </code>
               <Typography sx={{ mb: 1, textAlign: "justify" }}>
                  3.2) Quando receber uma data válida, deve fazer a busca na tabela e
                  retornar status 200 e todos os campos de informação do feriado buscado.
               </Typography>
               <Typography sx={{ mb: 1, textAlign: "justify" }}>
                  3.3) Quando receber uma data válida, porém não encontrar uma data
                  correspondente na tabela, deve retornar status 202 e o texto: &quot;Essa
                  data não é um feriado&quot;.
               </Typography>
               <Typography sx={{ mb: 1, textAlign: "justify" }}>
                  3.4) Quando receber uma data inválida, ex: 32-14-2023, deve retornar
                  status: 400 e o texto: &quot;Data invalida, use o formato
                  [SUA_API]?date=YYYY-MM-DD&quot;
               </Typography>
            </li>
            <li>
               <Typography sx={{ mb: 1, textAlign: "justify" }}>
                  Uma rota que vai receber um input do formulário acessível na página
                  principal do repositório.
               </Typography>
               <Typography sx={{ mb: 1, textAlign: "justify" }}>
                  4.1) Esse formulário está configurado para fazer a requisição para o
                  arquivo &quot;criaferiado.js&quot;, localizado no diretório
                  /src/pages/api. Crie sua função dentro desse arquivo.
               </Typography>
               <Typography sx={{ mb: 1, textAlign: "justify" }}>
                  4.1) A função criada deve inserir o feriado na tabela usando os mesmos
                  campos citados acima. E deve retornar status 201, caso tenha inserido
                  com sucesso na tabela e status 500 caso tenha ocorrido algum erro na
                  inserção. O frontend está configurado para receber e tratar esses
                  status.
               </Typography>
            </li>
         </ol>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            Exemplo - O comportamento ao buscar o feriado do dia 1 de janeiro de 2023,
            para tópico 3, deve ser, como segue:
         </Typography>
         <code>
            <span>Requisição:</span>
            <br />
            localhost:<span className="hljs-number">3000</span>/api/
            <span className="hljs-built_in">[SUA_API]</span>?
            <span className="hljs-built_in">date</span>=
            <span className="hljs-number">2023</span>
            <span className="hljs-number">-01</span>
            <span className="hljs-number">-01</span>
            <br />
            <br />
            <span>Retorno:</span>
            <br />
            {"{"}
            <span className="hljs-string">"data"</span>:
            <span className="hljs-string">"2023-01-01T00:00:00.000Z"</span>,
            <br />
            <span className="hljs-string">"nome"</span>:
            <span className="hljs-string">"Ano Novo"</span>, <br />
            <span className="hljs-string">"descricao"</span>:
            <span className="hljs-string">
               "O Ano-Novo ou Réveillon é um evento que acontece quando uma cultura
               celebra o fim de um ano e o começo do próximo. A celebração do evento é
               também chamada Réveillon, termo oriundo do verbo francês réveiller, que em
               português significa DESPERTAR"
            </span>
            <br />
            {"}"}
         </code>
         <Typography
            sx={{ mb: 1 }}
            variant="h5"
            id="avalia-o"
            style={{ margin: "2vh 0" }}
         >
            Avaliação
         </Typography>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            Por fim, quando concluir suas implementações, suba um repositório público no
            seu Github e envie o link pelo meio de comunicação pelo qual você foi
            notificado sobre o teste, informando a conclusão.{" "}
         </Typography>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            Vamos baixar seu repositório e fazer os testes necessários para a avaliação.
         </Typography>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            Esse teste ficará aberto para submissão até dia <code>24/01/2023</code>,
            esperamos que seja tempo suficiente para desenvolver o projeto.
         </Typography>
         <Typography
            sx={{ mb: 1, textAlign: "justify" }}
            variant="h5"
            id="notas-"
            style={{ margin: "2vh 0" }}
         >
            Notas:
         </Typography>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            1) O Prisma já está instalado, configurado, sincronizado e os acessos estão
            gerados, mas para iniciar o projeto, rode os comandos: {""}
            <code>yarn e yarn prisma generate</code> para gerar os clientes do Prisma que
            você vai importar para cada API.{" "}
         </Typography>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            2) Caso não tenha experiência em yarn, prisma ou NextJS, aconselhamos que você
            leia os links enviados abaixo antes de iniciar o projeto.{" "}
         </Typography>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            3) Caso desconfigure algo que não consiga reverter, lembre-se que é possível
            baixar novamente o repositório e começar do zero.{" "}
         </Typography>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            4) Conforme documentação do Prisma, lembre-se de se desconectar do banco após
            fazer a requisição.
         </Typography>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            5) Caso não consiga cumprir nenhuma das funcionalidades, não se entristeça,
            não deixe de submeter seu projeto, vamos avaliar o que foi feito, independente
            de estar finalizado ou não.{" "}
         </Typography>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            Deixaremos abaixo alguns materiais para consulta que vão te ajudar a
            desenvolver o projeto, em ordem de relevância:
         </Typography>
         <Link href="https://www.prisma.io/docs/getting-started/quickstart">
            <Typography sx={{ mb: 1, textAlign: "justify" }}>
               Documentação do Prisma (ignore as configurações iniciais, conforme tópico 2
               acima)
            </Typography>
         </Link>
         <Link href="https://nextjs.org/learn/basics/api-routes/creating-api-routes">
            <Typography sx={{ mb: 1, textAlign: "justify" }}>
               NextJS: Rotas de APIs (explore outros tópicos da documentação do NextJS em
               caso de dúvidas)
            </Typography>
         </Link>
         <Link href="https://blog.betrybe.com/desenvolvimento-web/yarn/">
            <Typography sx={{ mb: 1, textAlign: "justify" }}>
               Yarn: comandos e introdução
            </Typography>
         </Link>
         <Link href="https://prensa.li/prensa/como-criar-um-sistema-crud-com-o-prisma/">
            <Typography sx={{ mb: 1, textAlign: "justify" }}>
               Prisma: Como instanciar a classNamee client e outras dicas
            </Typography>
         </Link>
         <Typography sx={{ mb: 1, textAlign: "justify" }}>
            <strong>Boa sorte!</strong>
         </Typography>
      </Container>
   );
}

export default Instrucoes;
