import { FunctionComponent } from "react";

interface Props {
  mantras: object[];
}

const MantrasList: FunctionComponent<Props> = ({ mantras }) => {
  // TODO - any type
  const mantrasList = mantras.map((mantra: any) => (
    <li key={mantra.id}>
      {mantra.id} - {mantra.amount}
    </li>
  ));

  return <ul>{mantrasList}</ul>;
};

export default MantrasList;
