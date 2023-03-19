import { FunctionComponent } from "react";
import { Tr, Td, Progress } from "@chakra-ui/react";
import { getProgressColorScheme } from "../helpers/getProgressColorScheme";
import { MantraProps } from "../interfaces";

const MantraRow: FunctionComponent<MantraProps> = ({ mantra }) => {
  const { id, name, done, toDo } = mantra;
  const percentageValue = (done / toDo) * 100;
  const colorScheme = getProgressColorScheme(percentageValue);

  return (
    <Tr key={id}>
      <Td>{name}</Td>
      <Td isNumeric>
        <Progress
          colorScheme={colorScheme}
          size="sm"
          hasStripe
          isAnimated
          value={percentageValue}
        />
        {done}/{toDo}
      </Td>
    </Tr>
  );
};

export default MantraRow;
