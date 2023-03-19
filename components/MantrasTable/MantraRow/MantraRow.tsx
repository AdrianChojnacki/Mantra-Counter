import { FunctionComponent } from "react";
import { Tr, Td } from "@chakra-ui/react";
import { StyledProgress } from "./MantraRow.styles";
import { getProgressColorScheme } from "../../../helpers";
import { MantraProps } from "../../../typings";

export const MantraRow: FunctionComponent<MantraProps> = ({ mantra }) => {
  const { id, name, done, toDo } = mantra;
  const percentageValue = (done / toDo) * 100;
  const colorScheme = getProgressColorScheme(percentageValue);

  return (
    <Tr key={id}>
      <Td>{name}</Td>
      <Td isNumeric>
        <StyledProgress
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
