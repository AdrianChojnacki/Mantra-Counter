import { FunctionComponent } from "react";
import {
  Progress,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";
import { getProgressColorScheme } from "../../helpers";
import { MantraModalProps } from "../../typings";

export const MantraModal: FunctionComponent<MantraModalProps> = ({
  mantra,
  isOpen,
  onClose,
}) => {
  const { name, done, toDo } = mantra;

  const percentageValue = (done / toDo) * 100;
  const colorScheme = getProgressColorScheme(percentageValue);

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
            {done} / {toDo}
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
