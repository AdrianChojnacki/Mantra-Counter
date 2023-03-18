import { FunctionComponent } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

// TODO: any
interface Props {
  Component: any;
  pageProps: any;
}

const App: FunctionComponent<Props> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
