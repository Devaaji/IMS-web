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

const ModalDetailPOHeader = ({ item, isOpen, onClose }) => {
  const id = item.id;
  const uri = `/po-header/${id}`;

  const { data: dataDetailPerId, isLoading } = useRemoteDataPerId(
    uri,
    'detail-po-header',
    id
  );
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" isCentered>
      <ModalOverlay />
      <ModalContent mx="4" overflow="hidden">
        <ModalHeader>Detail Purchase Order Header</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isLoading ? (
            <Center my="35px">
              <Spinner />
            </Center>
          ) : (
            <Box w="max" align="stretch">
              <TableToName
                tableName="Master PO Header No"
                item={dataDetailPerId?.data[0].master_po_header_no}
              />
              <TableToName
                tableName="Company Code"
                item={dataDetailPerId?.data[0].company_code}
              />
              <TableToName
                tableName="Master Vendor Code"
                item={dataDetailPerId?.data[0].master_vendor_code}
              />
              <TableToName
                tableName="Created On"
                item={dataDetailPerId?.data[0].created_on}
              />
              <TableToName
                tableName="Purch Organization"
                item={dataDetailPerId?.data[0].purch_organization}
              />
              <TableToName
                tableName="Doc Type"
                item={dataDetailPerId?.data[0].doc_type}
              />
              <TableToName
                tableName="Group"
                item={dataDetailPerId?.data[0].group}
              />
              <TableToName
                tableName="Currency"
                item={dataDetailPerId?.data[0].currency}
              />
              <TableToName
                tableName="Release Group"
                item={dataDetailPerId?.data[0].release_group}
              />
              <TableToName
                tableName="Release Strategy"
                item={dataDetailPerId?.data[0].release_strategy}
              />
              <TableToName
                tableName="Release Indicator"
                item={dataDetailPerId?.data[0].release_indicator}
              />
              <TableToName
                tableName="Release Status"
                item={dataDetailPerId?.data[0].release_status}
              />
              <TableToName
                tableName="Doc Category"
                item={dataDetailPerId?.data[0].doc_category}
              />
              <TableToName
                tableName="Control Indicator"
                item={dataDetailPerId?.data[0].control_indicator}
              />
              <TableToName
                tableName="Deletion Indicator"
                item={dataDetailPerId?.data[0].deletion_indicator}
              />
              <TableToName tableName="Status" item={item.status} />
              <TableToName
                tableName="Document Date"
                item={dataDetailPerId?.data[0].document_date}
              />
              <TableToName
                tableName="State"
                item={dataDetailPerId?.data[0].state}
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

export default ModalDetailPOHeader;
