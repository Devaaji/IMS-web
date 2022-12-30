import { useState } from 'react';

import {
  Box,
  Button,
  ButtonGroup,
  Center,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';

import { MdOutlineManageSearch } from 'react-icons/md';
import { FaFileDownload } from 'react-icons/fa';

import ExportFileXLSX from '../../../utils/download/ExportFileXLSX';
import ExportFileCSV from '../../../utils/download/ExportFileCSV';
import ExportFullFileXLSX from '../../../utils/download/ExportFullFileXLSX';
import useRemotePOAssignment from '../../hooks/remote/useRemotePOAssignment';

const FilterPOAssignment = ({ data, isLoading }) => {
  const NameDownloadData = 'POAssignment';
  const DataToDownload = data?.data;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const NameQuery = 'download-full-po-assignment';

  const [clickDOwnload, setClickDOwnload] = useState(false);

  const { data: DownloadFullData, isFetched } = useRemotePOAssignment(
    NameQuery,
    99999999999,
    1,
    clickDOwnload,
    false,
    false
  );

  const { exportFileXLSX } = ExportFileXLSX(DataToDownload, NameDownloadData);

  const { exportFullFileXLSX } = ExportFullFileXLSX(
    DownloadFullData?.data,
    NameDownloadData
  );

  const DownloadFUllDataClick = async () => {
    if (isFetched === false) {
      setClickDOwnload(true);
    }
  };

  return (
    <HStack>
      <Button
        rounded="xl"
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
      {isLoading === false ? (
        <Menu>
          <MenuButton
            rounded="xl"
            colorScheme="green"
            as={Button}
            onClick={DownloadFUllDataClick}
            leftIcon={<Icon as={FaFileDownload} fontSize="md" />}
          >
            Download
          </MenuButton>
          <MenuList>
            <MenuGroup title="Per Halaman">
              <ExportFileCSV
                data={DataToDownload}
                fileName={NameDownloadData}
                isLoading={isLoading}
              >
                <MenuItem color="black">CSV</MenuItem>
              </ExportFileCSV>
              <MenuItem onClick={exportFileXLSX}>XLSX</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Full Download">
              {isFetched === true ? (
                <>
                  <ExportFileCSV
                    data={DownloadFullData?.data}
                    fileName={NameDownloadData}
                    isLoading={isLoading}
                  >
                    <MenuItem color="black">CSV</MenuItem>
                  </ExportFileCSV>
                </>
              ) : (
                <MenuItem cursor="not-allowed">
                  <Center>
                    <Spinner size="xs" mr="2" />
                    <Box as="span">CSV</Box>
                  </Center>
                </MenuItem>
              )}

              {isFetched === true ? (
                <MenuItem onClick={exportFullFileXLSX}>XLSX</MenuItem>
              ) : (
                <MenuItem cursor="not-allowed">
                  <Center>
                    <Spinner size="xs" mr="2" />
                    <Box as="span">XLSX</Box>
                  </Center>
                </MenuItem>
              )}
            </MenuGroup>
          </MenuList>
        </Menu>
      ) : (
        <Button
          rounded="xl"
          isLoading
          colorScheme="green"
          loadingText="Loading"
          spinnerPlacement="start"
        ></Button>
      )}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent mx={{ base: '2', md: 'none' }}>
          <ModalHeader>FIlter Search Check Items</ModalHeader>
          <ModalCloseButton />
          <ModalBody>FIlter Search</ModalBody>
          <ModalFooter>
            <ButtonGroup>
              <Button
                rounded="xl"
                border="1px"
                color="ims-primary"
                borderColor="ims-primary"
                aria-label="close modal"
                onClick={onClose}
              >
                Batal
              </Button>
              <Button
                rounded="xl"
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

export default FilterPOAssignment;
