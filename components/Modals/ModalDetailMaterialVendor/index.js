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

const ModalDetailMaterialVendor = ({ item, isOpen, onClose }) => {
  const id = item.id;
  const uri = `/vendor/${id}`;

  const { data: dataDetailPerId, isLoading } = useRemoteDataPerId(
    uri,
    'detail-vendor',
    id
  );
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" isCentered>
      <ModalOverlay />
      <ModalContent mx="4" overflow="hidden">
        <ModalHeader>Detail Master Vendor</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isLoading ? (
            <Center my="35px">
              <Spinner />
            </Center>
          ) : (
            <Box w="max" align="stretch">
              <TableToName
                tableName="Master Vendor Code"
                item={dataDetailPerId?.data[0].master_vendor_code}
              />
              <TableToName
                tableName="Title"
                item={dataDetailPerId?.data[0].title}
              />
              <TableToName
                tableName="Name 1"
                item={dataDetailPerId?.data[0].name_1}
              />
              <TableToName
                tableName="Name 2"
                item={dataDetailPerId?.data[0].name_2}
              />
              <TableToName
                tableName="Name 3"
                item={dataDetailPerId?.data[0].name_3}
              />

              <TableToName
                tableName="Name 4"
                item={dataDetailPerId?.data[0].name_4}
              />
              <TableToName
                tableName="Street"
                item={dataDetailPerId?.data[0].street}
              />
              <TableToName
                tableName="City"
                item={dataDetailPerId?.data[0].city}
              />
              <TableToName
                tableName="District"
                item={dataDetailPerId?.data[0].district}
              />
              <TableToName
                tableName="PO Box"
                item={dataDetailPerId?.data[0].po_box}
              />

              <TableToName
                tableName="Country"
                item={dataDetailPerId?.data[0].country}
              />
              <TableToName
                tableName="Postal Code"
                item={dataDetailPerId?.data[0].postal_code}
              />
              <TableToName
                tableName="Account Group"
                item={dataDetailPerId?.data[0].account_group}
              />
              <TableToName
                tableName="Deletion Flag"
                item={dataDetailPerId?.data[0].deletion_flag}
              />
              <TableToName
                tableName="Posting Block"
                item={dataDetailPerId?.data[0].posting_block}
              />

              <TableToName
                tableName="Purchasing Block"
                item={dataDetailPerId?.data[0].purchasing_block}
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

export default ModalDetailMaterialVendor;
