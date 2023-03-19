import { FunctionComponent } from "react";
import { useDisclosure, Tr, Td, Progress } from "@chakra-ui/react";
import { MantraModal } from "../../MantraModal";
import { getProgressColorScheme } from "../../../helpers";
import { MantraProps } from "../../../typings";

export const MantraRow: FunctionComponent<MantraProps> = ({ mantra }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id, name, done, toDo } = mantra;

  const percentageValue = (done / toDo) * 100;
  const colorScheme = getProgressColorScheme(percentageValue);

  return (
    <>
      <Tr key={id} borderBottom="1px" borderColor="gray.300" onClick={onOpen}>
        <Td fontSize="md">{name}</Td>
        <Td width="100%" fontSize="sm" isNumeric>
          <Progress
            size="md"
            colorScheme={colorScheme}
            bgColor="gray.200"
            borderRadius="20px"
            hasStripe
            isAnimated
            value={percentageValue}
          />
        </Td>
      </Tr>
      <MantraModal mantra={mantra} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
