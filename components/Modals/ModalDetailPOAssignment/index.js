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

const ModalDetailPOAssignment = ({ item, isOpen, onClose }) => {
  const id = item.id;
  const uri = `/po-assignment/${id}`;

  const { data: dataDetailPerId, isLoading } = useRemoteDataPerId(
    uri,
    'detail-po-assignment',
    id
  );
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" isCentered>
      <ModalOverlay />
      <ModalContent mx="4" overflow="hidden">
        <ModalHeader>Detail Purchase Order Assignment</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isLoading ? (
            <Center my="35px">
              <Spinner />
            </Center>
          ) : (
            <Box w="max" align="stretch">
              <TableToName
                tableName="Master PO Assignment No"
                item={dataDetailPerId?.data[0].master_po_assignment_no}
              />
              <TableToName
                tableName="Master Assignment Item"
                item={dataDetailPerId?.data[0].master_po_assignment_item}
              />
              <TableToName
                tableName="Master Assignment Seq"
                item={dataDetailPerId?.data[0].master_po_assignment_seq}
              />
              <TableToName
                tableName="Gl Account"
                item={dataDetailPerId?.data[0].gl_account}
              />
              <TableToName
                tableName="Business Area"
                item={dataDetailPerId?.data[0].business_area}
              />
              <TableToName
                tableName="Cost Center"
                item={dataDetailPerId?.data[0].cost_center}
              />
              <TableToName
                tableName="Sales Order"
                item={dataDetailPerId?.data[0].sales_order}
              />
              <TableToName
                tableName="Sales Item"
                item={dataDetailPerId?.data[0].sales_item}
              />
              <TableToName
                tableName="Asset"
                item={dataDetailPerId?.data[0].asset}
              />
              <TableToName
                tableName="Sub Number"
                item={dataDetailPerId?.data[0].subnumber}
              />
              <TableToName
                tableName="Order"
                item={dataDetailPerId?.data[0].order}
              />
              <TableToName
                tableName="Goods Recipient"
                item={dataDetailPerId?.data[0].goods_recipient}
              />
              <TableToName
                tableName="Unloading Point"
                item={dataDetailPerId?.data[0].unloading_point}
              />
              <TableToName
                tableName="Delete"
                item={dataDetailPerId?.data[0].delete}
              />
              <TableToName
                tableName="Controlling Area"
                item={dataDetailPerId?.data[0].controlling_area}
              />
              <TableToName
                tableName="Cost Object"
                item={dataDetailPerId?.data[0].cost_object}
              />
              <TableToName
                tableName="Profitab Segmt"
                item={dataDetailPerId?.data[0].profitab_segmt}
              />
              <TableToName
                tableName="Profit Center"
                item={dataDetailPerId?.data[0].profit_center}
              />
              <TableToName
                tableName="Sales Item"
                item={dataDetailPerId?.data[0].sales_item}
              />
              <TableToName
                tableName="WBS"
                item={dataDetailPerId?.data[0].wbs}
              />
              <TableToName
                tableName="Network"
                item={dataDetailPerId?.data[0].network}
              />
              <TableToName
                tableName="Routing Oprations"
                item={dataDetailPerId?.data[0].routing_oprations}
              />
              <TableToName
                tableName="Counter Operations"
                item={dataDetailPerId?.data[0].counter_operations}
              />
              <TableToName
                tableName="Funds Center"
                item={dataDetailPerId?.data[0].funds_center}
              />
              <TableToName
                tableName="Fund"
                item={dataDetailPerId?.data[0].fund}
              />
              <TableToName
                tableName="Routing Operations 2"
                item={dataDetailPerId?.data[0].routing_operations2}
              />
              <TableToName
                tableName="Counter Operations 2"
                item={dataDetailPerId?.data[0].counter_operations2}
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

export default ModalDetailPOAssignment;
