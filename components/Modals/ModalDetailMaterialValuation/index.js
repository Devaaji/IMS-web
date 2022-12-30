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

const ModalDetailMaterialValuation = ({ item, isOpen, onClose }) => {
  const id = item.id;
  const uri = `/material-valuation/${id}`;

  const { data: dataDetailPerId, isLoading } = useRemoteDataPerId(
    uri,
    'detail-material-valuation',
    id
  );
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" isCentered>
      <ModalOverlay />
      <ModalContent mx="4" overflow="hidden">
        <ModalHeader>Detail Master Valuation</ModalHeader>
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
                tableName="Valuation Area"
                item={dataDetailPerId?.data[0].valuation_area}
              />
              <TableToName
                tableName="Valuation Type"
                item={dataDetailPerId?.data[0].valuation_type}
              />
              <TableToName
                tableName="Delete"
                item={dataDetailPerId?.data[0].delete}
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

export default ModalDetailMaterialValuation;
