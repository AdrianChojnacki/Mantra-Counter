import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { store } from "../src/app/store";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../src/styles";
import { AppProps } from "../src/typings";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
