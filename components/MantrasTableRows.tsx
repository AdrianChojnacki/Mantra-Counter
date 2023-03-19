import { Tr, Td, Progress } from "@chakra-ui/react";
import { getProgressColorScheme } from "../helpers/getProgressColorScheme";

interface Props {
  mantras: [{ id: string; name: string; done: number; toDo: number }];
}

const MantrasTableRows = ({ mantras }: Props) => {
  const mantrasTableRows = mantras.map((mantra) => {
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
  });

  return mantrasTableRows;
};

export default MantrasTableRows;
