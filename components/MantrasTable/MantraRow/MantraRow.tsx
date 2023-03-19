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
    <Tr
      key={id}
      borderBottom="1px"
      borderColor="gray.300"
      onClick={() => alert("Click")}
    >
      <Td fontSize="lg">{name}</Td>
      <Td width="100%" fontSize="sm" isNumeric>
        <StyledProgress
          size="lg"
          colorScheme={colorScheme}
          bgColor="gray.200"
          hasStripe
          isAnimated
          value={percentageValue}
        />
        {/* {done}/{toDo} */}
      </Td>
    </Tr>
  );
};
