import { Mantra } from "../typings";

export const getSortedMantras: Function = (mantras: Mantra[]) => {
  function sorting(a: Mantra, b: Mantra): number {
    if ((a.done / a.toDo) * 100 > (b.done / b.toDo) * 100) return -1;
    if ((a.done / a.toDo) * 100 < (b.done / b.toDo) * 100) return 1;
    return 0;
  }

  const sortedMantras = [...mantras].sort(sorting);

  return sortedMantras;
};
