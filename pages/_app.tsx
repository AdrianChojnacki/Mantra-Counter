import { FunctionComponent } from "react";
import "../styles/variables.scss";
import "../styles/global.scss";

// TODO: any
interface Props {
  Component: any;
  pageProps: any;
}

const App: FunctionComponent<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
