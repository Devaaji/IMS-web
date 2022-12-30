import {
  Button,
  ButtonGroup,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Stack,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { MdOutlineManageSearch } from 'react-icons/md';
import { FaFileDownload } from 'react-icons/fa';
import ExportFileXLSX from '../../../utils/download/ExportFileXLSX';
import { CSVLink } from 'react-csv';
import randomString from 'random-string';
import Select from 'react-select';
import { useState } from 'react';

const FilterSearchCheckItem = (data) => {
  const [show, setShow] = useState(false);

  const hanldeShowButton = () => {
    setShow(true);
  };

  const options = [
    { value: 'csv', label: 'CSV' },
    { value: 'xlsx', label: 'XLSX' },
  ];

  return (
    <HStack>
      <Button
        rounded="md"
        leftIcon={<Icon as={MdOutlineManageSearch} fontSize="xl" />}
        px="8px"
        border="1px"
        color="ims-primary"
        borderColor="ims-primary"
      >
        Filter Search
      </Button>
      <Spacer />
      <HStack>
        <ButtonGroup>
          {show ? (
            <>
              <Button
                colorScheme="green"
                leftIcon={<Icon as={FaFileDownload} fontSize="md" />}
              >
                <Tooltip label="Download XLSX" fontSize="sm">
                  CSV
                </Tooltip>
              </Button>
              <Button
                colorScheme="green"
                leftIcon={<Icon as={FaFileDownload} fontSize="md" />}
              >
                <Tooltip label="Download XLSX" fontSize="sm">
                  Semua Data CSV
                </Tooltip>
              </Button>
            </>
          ) : (
            <></>
          )}
        </ButtonGroup>
      </HStack>
      <Modal isCentered>
        <ModalOverlay />
        <ModalContent mx={{ base: '2', md: 'none' }}>
          <ModalHeader>FIlter Search Check Items</ModalHeader>
          <ModalCloseButton />
          <ModalBody>FIlter Search</ModalBody>
          <ModalFooter>
            <ButtonGroup>
              <Button
                border="1px"
                color="ims-primary"
                borderColor="ims-primary"
                aria-label="close modal"
              >
                Batal
              </Button>
              <Button
                type="submit"
                bg="ims-primary"
                color="white"
                _hover={{ bg: 'button-hover' }}
              >
                Cari
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
};

export default FilterSearchCheckItem;
