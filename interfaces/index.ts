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
