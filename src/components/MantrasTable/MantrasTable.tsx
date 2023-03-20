import { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllMantras,
  getMantrasStatus,
  getMantrasError,
  fetchMantras,
} from "../../features/mantras/mantrasSlice";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import { MantraRow } from "./MantraRow";
import { sortMantras } from "../../helpers";
import { Mantra } from "../../typings";

export const MantrasTable: FunctionComponent = () => {
  const dispatch = useDispatch();
  const mantras = useSelector(selectAllMantras);
  const mantrasStatus = useSelector(getMantrasStatus);
  const mantrasError = useSelector(getMantrasError);

  useEffect(() => {
    if (mantrasStatus === "idle") {
      dispatch(fetchMantras());
    }
  }, [mantrasStatus, dispatch]);

  let content;

  if (mantrasStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (mantrasStatus === "succeeded") {
    const sortedMantras = sortMantras(mantras);
    content = sortedMantras.map((mantra: Mantra) => (
      <MantraRow key={mantra.id} mantra={mantra} />
    ));
  } else if (mantrasStatus === "failed") {
    content = <p>{mantrasError}</p>;
  }

  return (
    <TableContainer bgColor="white" borderRadius="lg">
      <Table>
        <Thead borderBottom="2px" borderColor="gray.300">
          <Tr>
            <Th fontSize="md">Practice</Th>
            <Th fontSize="md" isNumeric>
              Progress
            </Th>
          </Tr>
        </Thead>
        <Tbody>{content}</Tbody>
      </Table>
    </TableContainer>
  );
};
