import { FunctionComponent, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Image,
  Progress,
  Flex,
  Button,
} from "@chakra-ui/react";
import { AddButton } from "../AddButton";
import { getProgressColorScheme } from "../../helpers";
import { MantraModalProps } from "../../typings";

export const MantraModal: FunctionComponent<MantraModalProps> = ({
  mantra,
  isOpen,
  onClose,
}) => {
  const { id, name, done, toDo } = mantra;

  let percentageValue = (done / toDo) * 100;
  let colorScheme = getProgressColorScheme(percentageValue);
  let progressDetails = `${done} / ${toDo}`;

  useEffect(() => {
    percentageValue = (done / toDo) * 100;
    colorScheme = getProgressColorScheme(percentageValue);
    progressDetails = `${done} / ${toDo}`;
  }, [mantra]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="full"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="x-large" fontWeight="600" textAlign="center">
          {name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box width="100%" height="300px" mb={4}>
            <Image
              boxSize="100%"
              objectFit="cover"
              src="Buddha.jpg"
              alt="Buddha"
            />
          </Box>
          <Progress
            size="lg"
            colorScheme={colorScheme}
            bgColor="gray.200"
            borderRadius="20px"
            hasStripe
            isAnimated
            value={percentageValue}
          />
          <Flex justify="flex-end" fontSize="lg">
            {progressDetails}
          </Flex>
        </ModalBody>
        <ModalFooter>
          <AddButton id={id}>Add</AddButton>
          <Button colorScheme="red" ml={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
