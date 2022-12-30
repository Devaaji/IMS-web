import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaFileCsv, FaFileExcel } from 'react-icons/fa';
import ExportFileCSV from '../../../utils/download/ExportFileCSV';
import ExportFullFileXLSX from '../../../utils/download/ExportFullFileXLSX';
import useRemoteMasterMaterial from '../../hooks/remote/useRemoteMasterMaterial';

export function ModalDownloadMasterMaterial({
  isOpen,
  onClose,
  filePerXLSX,
  mutateCode,
  filePerCSV,
  isLoading,
  mutateLoadFTP,
}) {
  const NameQuery = 'download-full-material-master';
  const NameDownloadData = 'MasterMaterial';

  const [numberData, setNumberData] = useState();
  const [clickDOwnload, setClickDOwnload] = useState(false);

  const { data: DownloadFullData, isFetched } = useRemoteMasterMaterial({
    nameQuery: NameQuery,
    pageLimit: numberData,
    pageIndex: 1,
    short: 'ASC',
    order: 'master_material_code',
    mutateFTP: mutateLoadFTP,
    pageEnabled: clickDOwnload,
    materialCode: mutateCode,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const { exportFullFileXLSX } = ExportFullFileXLSX(
    DownloadFullData?.data,
    NameDownloadData
  );

  const onChangeNumberHanlder = (event) => {
    setNumberData(parseInt(event.target.value));
  };

  const DownloadFUllDataClick = async () => {
    if (isFetched === false) {
      setClickDOwnload(true);
    }
  };

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent mx={{ base: '4', md: 'none' }}>
        <ModalHeader>Download Data</ModalHeader>
        <ModalBody>
          <Stack>
            <Box borderTopWidth="2px" py="3">
              <Text>Download per show entries :</Text>
              <HStack spacing="3" mt="2">
                <ButtonGroup rounded="xl">
                  <ExportFileCSV
                    data={filePerCSV}
                    fileName={NameDownloadData}
                    isLoading={isLoading}
                  >
                    <Button variant="solid-blue" leftIcon={<FaFileCsv />}>
                      CSV
                    </Button>
                  </ExportFileCSV>
                  <Button
                    variant="solid-blue"
                    onClick={filePerXLSX}
                    leftIcon={<FaFileExcel />}
                  >
                    XLSX
                  </Button>
                </ButtonGroup>
              </HStack>
            </Box>
            <Box borderTopWidth="2px" py="3">
              <Text>Download Per Data :</Text>
              <Input
                type="number"
                onClick={DownloadFUllDataClick}
                placeholder="select number to download "
                value={numberData}
                onChange={onChangeNumberHanlder}
              />
              <HStack spacing="3" mt="2">
                <ButtonGroup rounded="xl" colorScheme="green">
                  {isFetched === true ? (
                    <ExportFileCSV
                      data={DownloadFullData?.data}
                      fileName={NameDownloadData}
                      isLoading={isLoading}
                    >
                      <Button variant="solid-blue" leftIcon={<FaFileCsv />}>
                        CSV
                      </Button>
                    </ExportFileCSV>
                  ) : (
                    <Button
                      variant="solid-blue"
                      disabled={true}
                      leftIcon={<FaFileCsv />}
                    >
                      CSV
                    </Button>
                  )}
                  {isFetched === true ? (
                    <Button
                      variant="solid-blue"
                      onClick={exportFullFileXLSX}
                      leftIcon={<FaFileExcel />}
                    >
                      XLSX
                    </Button>
                  ) : (
                    <Button
                      variant="solid-blue"
                      disabled={true}
                      leftIcon={<FaFileExcel />}
                    >
                      XLSX
                    </Button>
                  )}
                </ButtonGroup>
              </HStack>
            </Box>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button variant="button-blue" onClick={onClose}>
            Back
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
