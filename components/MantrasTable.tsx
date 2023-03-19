import { FunctionComponent } from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import MantraRow from "./MantraRow";
import { getSortedMantras } from "../helpers/getSortedMantras";
import { Mantra, MantrasProps } from "../interfaces";

const MantrasTable: FunctionComponent<MantrasProps> = ({ mantras }) => {
  const sortedMantras = getSortedMantras(mantras);

  const mantrasTableRows = sortedMantras.map((mantra: Mantra) => (
    <MantraRow key={mantra.id} mantra={mantra} />
  ));

  return (
    <TableContainer bg="palette.orange">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Practice</Th>
            <Th isNumeric>Done</Th>
          </Tr>
        </Thead>
        <Tbody>{mantrasTableRows}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default MantrasTable;
