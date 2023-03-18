import { FunctionComponent } from "react";

interface Props {
  mantras: object[];
}

const MantrasList: FunctionComponent<Props> = ({ mantras }) => {
  const mantrasList = (
    <ul style={{ margin: 0 }}>
      {
        // TODO: any type
        mantras.map((mantra: any) => (
          <li key={mantra.id}>
            {mantra.name} - {mantra.done}/{mantra.toDo}
          </li>
        ))
      }
    </ul>
  );

  return mantrasList;
};

export default MantrasList;
