import { FunctionComponent } from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import { MantraRow } from "./MantraRow";
import { getSortedMantras } from "../../helpers";
import { Mantra, MantrasProps } from "../../typings";

export const MantrasTable: FunctionComponent<MantrasProps> = ({ mantras }) => {
  const sortedMantras = getSortedMantras(mantras);

  const mantrasTableRows = sortedMantras.map((mantra: Mantra) => (
    <MantraRow key={mantra.id} mantra={mantra} />
  ));

  return (
    <TableContainer bgColor="white" borderRadius="lg">
      <Table>
        <Thead borderBottom="2px" borderColor="gray.300">
          <Tr>
            <Th fontSize="lg">Practice</Th>
            <Th fontSize="lg" isNumeric>
              Progress
            </Th>
          </Tr>
        </Thead>
        <Tbody>{mantrasTableRows}</Tbody>
      </Table>
    </TableContainer>
  );
};
