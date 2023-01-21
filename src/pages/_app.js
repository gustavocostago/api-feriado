import { Box } from "@mui/material";
import "../../styles/globals.css";
import { ResponsiveAppBar } from "../components/AppBar";

export default function App({ Component, pageProps }) {
   return (
      <Box>
         <ResponsiveAppBar />
         <Component {...pageProps} />
      </Box>
   );
}
