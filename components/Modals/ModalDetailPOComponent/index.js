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

const ModalDetailPOComponent = ({ item, isOpen, onClose }) => {
  const id = item.id;
  const uri = `/po-component/${id}`;

  const { data: dataDetailPerId, isLoading } = useRemoteDataPerId(
    uri,
    'detail-po-component',
    id
  );
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" isCentered>
      <ModalOverlay />
      <ModalContent mx="4" overflow="hidden">
        <ModalHeader>Detail Purchase Order Component</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isLoading ? (
            <Center my="35px">
              <Spinner />
            </Center>
          ) : (
            <Box w="max" align="stretch">
              <TableToName
                tableName="Master PO Component No"
                item={dataDetailPerId?.data[0].master_po_component_no}
              />
              <TableToName
                tableName="Master Component Item"
                item={dataDetailPerId?.data[0].master_po_component_item}
              />
              <TableToName
                tableName="Record Type"
                item={dataDetailPerId?.data[0].record_type}
              />
              <TableToName
                tableName="Material"
                item={dataDetailPerId?.data[0].material}
              />
              <TableToName
                tableName="Qty Entry"
                item={dataDetailPerId?.data[0].qty_entry}
              />
              <TableToName
                tableName="Quantity Fixed"
                item={dataDetailPerId?.data[0].quantity_fixed}
              />
              <TableToName
                tableName="Plant"
                item={dataDetailPerId?.data[0].plant}
              />
              <TableToName
                tableName="Storage Location"
                item={dataDetailPerId?.data[0].storage_location}
              />
              <TableToName
                tableName="Supply Area"
                item={dataDetailPerId?.data[0].supply_area}
              />
              <TableToName
                tableName="Requirement Quantity"
                item={dataDetailPerId?.data[0].requirement_quantity}
              />
              <TableToName
                tableName="Quantity Withdrawn"
                item={dataDetailPerId?.data[0].quantity_withdrawn}
              />
              <TableToName
                tableName="Base Unit"
                item={dataDetailPerId?.data[0].base_unit}
              />
              <TableToName
                tableName="Status"
                item={dataDetailPerId?.data[0].status}
              />
              <TableToName
                tableName="Delete"
                item={dataDetailPerId?.data[0].delete}
              />
              <TableToName
                tableName="Final Issue"
                item={dataDetailPerId?.data[0].final_issue}
              />
              <TableToName
                tableName="Special Stock"
                item={dataDetailPerId?.data[0].special_stock}
              />
              <TableToName
                tableName="Debit Credit"
                item={dataDetailPerId?.data[0].debit_credit}
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
                tableName="Order"
                item={dataDetailPerId?.data[0].order}
              />
              <TableToName tableName="Pr" item={dataDetailPerId?.data[0].pr} />
              <TableToName
                tableName="Pr Item"
                item={dataDetailPerId?.data[0].pr_item}
              />
              <TableToName
                tableName="Movement Type"
                item={dataDetailPerId?.data[0].movement_type}
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
                tableName="Receiving Plant"
                item={dataDetailPerId?.data[0].receiving_plant}
              />
              <TableToName
                tableName="Receiving Stor Loc"
                item={dataDetailPerId?.data[0].receiving_stor_loc}
              />
              <TableToName
                tableName="Text 1"
                item={dataDetailPerId?.data[0].text1}
              />
              <TableToName
                tableName="Text 2"
                item={dataDetailPerId?.data[0].text2}
              />
              <TableToName
                tableName="Item Text"
                item={dataDetailPerId?.data[0].item_text}
              />
              <TableToName tableName="PO" item={dataDetailPerId?.data[0].po} />
              <TableToName
                tableName="PO Item"
                item={dataDetailPerId?.data[0].po_item}
              />
              <TableToName
                tableName="WBS"
                item={dataDetailPerId?.data[0].wbs}
              />
              <TableToName
                tableName="Assignment Cat"
                item={dataDetailPerId?.data[0].assignment_cat}
              />
              <TableToName
                tableName="Vendor"
                item={dataDetailPerId?.data[0].vendor}
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

export default ModalDetailPOComponent;
