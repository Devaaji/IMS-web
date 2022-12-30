import {
  Center,
  Modal,
  ModalContent,
  ModalOverlay,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';

const ModalLoadingFTP = () => {
  return (
    <Modal isCentered closeOnOverlayClick={false} isOpen={true}>
      <ModalOverlay />
      <ModalContent mx="5" bg="transparent" shadow="none">
        <Center>
          <VStack>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="orange.500"
              size="xl"
            />
            <Text fontWeight="bold" color="white">
              Please Wait...
            </Text>
          </VStack>
        </Center>
      </ModalContent>
    </Modal>
  );
};

export default ModalLoadingFTP;
