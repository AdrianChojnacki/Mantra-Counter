export interface AppProps {
  Component: any;
  pageProps: any;
}

export interface Mantra {
  id: string;
  name: string;
  done: number;
  toDo: number;
}

export interface MantrasProps {
  mantras: Mantra[];
}

export interface MantraProps {
  mantra: Mantra;
}

export interface MantraModalProps extends MantraProps {
  isOpen: boolean;
  onClose: () => void;
}
