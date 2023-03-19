import { FunctionComponent } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles";
import { AppProps } from "../typings";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
