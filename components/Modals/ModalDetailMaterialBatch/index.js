import React from 'react';

import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
} from '@chakra-ui/react';

import { TableToNameItems as TableToName } from '../../../utils/tables/TableToNameItems';
import useRemoteDataPerId from '../../hooks/remote/useRemoteDataPerId';

const ModalDetailMaterialBatch = ({ item, isOpen, onClose }) => {
  const id = item.id;
  const uri = `/material-batch/${id}`;

  const { data: dataDetailPerId, isLoading } = useRemoteDataPerId(
    uri,
    'detail-material-batch',
    id
  );
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" isCentered>
      <ModalOverlay />
      <ModalContent mx="4" overflow="hidden">
        <ModalHeader>Detail Material Batch</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isLoading ? (
            <Center my="35px">
              <Spinner />
            </Center>
          ) : (
            <Box w="max" align="stretch">
              <TableToName
                tableName="Master Material Code"
                item={dataDetailPerId?.data[0].master_material_code}
              />
              <TableToName
                tableName="Master Plant Code"
                item={dataDetailPerId?.data[0].master_material_code}
              />
              <TableToName
                tableName="Material Batch Code"
                item={dataDetailPerId?.data[0].master_material_batch_code}
              />
              <TableToName
                tableName="Valuation Type"
                item={dataDetailPerId?.data[0].valuation_type}
              />
              <TableToName
                tableName="Delete Flag"
                item={dataDetailPerId?.data[0].delete_flag}
              />
            </Box>
          )}
        </ModalBody>

        <ModalFooter bg="gray.100">
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
              type="submit"
              bg="ims-primary"
              color="white"
              _hover={{ bg: 'button-hover' }}
            >
              Lihat Lebih Lanjut
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalDetailMaterialBatch;
