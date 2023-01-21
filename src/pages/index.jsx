import Head from "next/head";
import { Box, Button, Container, TextField, Snackbar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Unstable_Grid2";
import MuiAlert from "@mui/material/Alert";
import { useState, forwardRef } from "react";

const Alert = forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Home() {
   const [snackOpen, setSnackOpen] = useState(false);
   const [snackProps, setSnackProps] = useState({
      text: "",
      type: "",
   });
   const [userInput, setUserInput] = useState({
      data: "",
      nome: "",
      tipo: "",
      descricao: "",
   });

   const handleClick = () => {
      try {
         fetch("/api/criaferiado", {
            method: "POST",
            headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               ...userInput,
            }),
         }).then((res) => {
            if (res.status === 201) {
               setSnackProps({
                  text: "Feriado registrado com sucesso! :)",
                  type: "success",
               });
               setSnackOpen(true);
               setUserInput({ data: "", nome: "", tipo: "", descricao: "" });
            } else if (res.status === 500) {
               setSnackProps({
                  text: "Erro ao salvar feriado",
                  type: "error",
               });
               setSnackOpen(true);
            }
         });
      } catch (error) {
         console.error(error);
         setSnackProps({
            text: "Não foi possível salvar o feriado :(",
            type: "error",
         });
      }
   };

   const handleClose = (event, reason) => {
      if (reason === "clickaway") {
         return;
      }

      setSnackOpen(false);
   };

   return (
      <>
         <Head>
            <title>Teste técnico: back-end</title>
            <meta
               name="description"
               content="exame técnico destinado aos candidatos a vaga de back-end developer para Ginco"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Box>
            <Container sx={{ my: 10 }}>
               <Grid container spacing={2}>
                  <Grid md={4} xs={12}>
                     <TextField
                        fullWidth
                        id="data"
                        onChange={(evt) =>
                           setUserInput((old) => ({ ...old, data: evt.target.value }))
                        }
                        value={userInput.data}
                        label="Data"
                        variant="outlined"
                     />
                  </Grid>
                  <Grid md={4} xs={12}>
                     <TextField
                        fullWidth
                        id="nome"
                        onChange={(evt) =>
                           setUserInput((old) => ({ ...old, nome: evt.target.value }))
                        }
                        value={userInput.nome}
                        label="Nome"
                        variant="outlined"
                     />
                  </Grid>
                  <Grid md={4} xs={12}>
                     <TextField
                        fullWidth
                        id="tipo"
                        onChange={(evt) =>
                           setUserInput((old) => ({ ...old, tipo: evt.target.value }))
                        }
                        label="Tipo"
                        value={userInput.tipo}
                        variant="outlined"
                     />
                  </Grid>
                  <Grid md={12} xs={12}>
                     <TextField
                        fullWidth
                        id="descricao"
                        label="Descrição"
                        onChange={(evt) =>
                           setUserInput((old) => ({
                              ...old,
                              descricao: evt.target.value,
                           }))
                        }
                        value={userInput.descricao}
                        variant="outlined"
                        multiline
                        rows={4}
                     />
                  </Grid>
               </Grid>
               <Box sx={{ mt: 3 }}>
                  <Button
                     onClick={handleClick}
                     variant="contained"
                     color="error"
                     endIcon={<SendIcon />}
                  >
                     Enviar
                  </Button>
               </Box>
            </Container>
         </Box>
         <Box>
            <Snackbar
               open={snackOpen}
               anchorOrigin={{ vertical: "top", horizontal: "center" }}
               autoHideDuration={3000}
               onClose={handleClose}
            >
               <Alert
                  sx={{ width: "100%" }}
                  onClose={handleClose}
                  severity={snackProps.type}
               >
                  {snackProps.text}
               </Alert>
            </Snackbar>
         </Box>
      </>
   );
}
