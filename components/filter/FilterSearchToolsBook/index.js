import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
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
  VStack,
} from '@chakra-ui/react';
import { MdOutlineManageSearch } from 'react-icons/md';
import { FaFileDownload, FaSistrix } from 'react-icons/fa';
import Select from 'react-select';
import ExportFileXLSX from '../../../utils/download/ExportFileXLSX';
import { useState } from 'react';
import { CSVLink } from 'react-csv';
import randomString from 'random-string';

const FilterSearchToolsBook = (data) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const randomName = randomString({ length: 20 });

  const DataToDownload = data?.data;

  // console.log('ToDownload', DataToDownload);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const { exportFile } = ExportFileXLSX(DataToDownload, 'ToolsBook');
  return (
    <HStack>
      <Button
        rounded="md"
        leftIcon={<Icon as={MdOutlineManageSearch} fontSize="xl" />}
        px="8px"
        onClick={onOpen}
        border="1px"
        color="ims-primary"
        borderColor="ims-primary"
      >
        Filter Search
      </Button>
      <Spacer />
      <ButtonGroup>
        <CSVLink
          data={DataToDownload}
          filename={`${randomName}_ToolsBook.csv`}
          target="_blank"
        >
          <Button
            leftIcon={<Icon as={FaFileDownload} color="white" fontSize="md" />}
            colorScheme="green"
          >
            <Tooltip label="Download CSV" fontSize="sm">
              CSV
            </Tooltip>
          </Button>
        </CSVLink>
        <Button
          onClick={exportFile}
          colorScheme="green"
          leftIcon={<Icon as={FaFileDownload} fontSize="md" />}
        >
          <Tooltip label="Download XLSX" fontSize="sm">
            XLSX
          </Tooltip>
        </Button>
      </ButtonGroup>
      <Modal isOpen={isOpen} isCentered size="2xl">
        <ModalOverlay />
        <ModalContent mx={{ base: '2', md: 'none' }}>
          <ModalHeader>FIlter Search Tools Book</ModalHeader>
          <ModalBody>
            <Stack>
              <Flex w="full">
                <Box w="50%" pr="2">
                  <Input placeholder="custom placeholder" />
                </Box>
                <Box w="50%">
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </Box>
              </Flex>
              <Flex w="full">
                <Box w="50%" pr="2">
                  <Input placeholder="custom placeholder" />
                </Box>
                <Box w="50%">
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </Box>
              </Flex>
              <Flex w="full">
                <Box w="50%" pr="2">
                  <Input placeholder="custom placeholder" />
                </Box>
                <Box w="50%">
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </Box>
              </Flex>
              <Flex w="full">
                <Box w="50%" pr="2">
                  <Input placeholder="custom placeholder" />
                </Box>
                <Box w="50%">
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </Box>
              </Flex>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <ButtonGroup>
              <Button
                border="1px"
                color="ims-primary"
                borderColor="ims-primary"
                aria-label="close modal"
                onClick={onClose}
              >
                Batal
              </Button>
              <Button
                leftIcon={<Icon as={FaSistrix} color="white" fontSize="md" />}
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

export default FilterSearchToolsBook;
