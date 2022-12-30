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
import dayjs from 'dayjs';
import useRemoteDataPerId from '../../hooks/remote/useRemoteDataPerId';

const ModalDetailPOItem = ({ item, isOpen, onClose }) => {
  const id = item.id;
  const uri = `/po-item/${id}`;

  const { data: dataDetailPerId, isLoading } = useRemoteDataPerId(
    uri,
    'detail-po-item',
    id
  );
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" isCentered>
      <ModalOverlay />
      <ModalContent mx="4" overflow="hidden">
        <ModalHeader>Detail Purchase Order Item</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isLoading ? (
            <Center my="35px">
              <Spinner />
            </Center>
          ) : (
            <Box w="max" align="stretch">
              <TableToName
                tableName="Master PO Item No"
                item={dataDetailPerId?.data[0].master_po_item_no}
              />
              <TableToName
                tableName="Master PO Item"
                item={dataDetailPerId?.data[0].master_po_item_item}
              />
              <TableToName
                tableName="Rfq"
                item={dataDetailPerId?.data[0].rfq}
              />
              <TableToName
                tableName="Rfq Item"
                item={dataDetailPerId?.data[0].rfq_item}
              />
              <TableToName tableName="Pr" item={dataDetailPerId?.data[0].pr} />
              <TableToName
                tableName="Pr Item"
                item={dataDetailPerId?.data[0].pr_item}
              />
              <TableToName
                tableName="Material"
                item={dataDetailPerId?.data[0].material}
              />
              <TableToName
                tableName="Text"
                item={dataDetailPerId?.data[0].text}
              />
              <TableToName
                tableName="Profit Center"
                item={dataDetailPerId?.data[0].profit_center}
              />
              <TableToName
                tableName="Requisitioner"
                item={dataDetailPerId?.data[0].requisitioner}
              />
              <TableToName
                tableName="Delivery Completed"
                item={dataDetailPerId?.data[0].delivery_completed}
              />
              <TableToName
                tableName="Final Invoice"
                item={dataDetailPerId?.data[0].final_invoice}
              />
              <TableToName
                tableName="Item Category"
                item={dataDetailPerId?.data[0].item_category}
              />
              <TableToName
                tableName="Acct Ass Cat"
                item={dataDetailPerId?.data[0].acct_ass_cat}
              />
              <TableToName
                tableName="Consumption"
                item={dataDetailPerId?.data[0].consumption}
              />
              <TableToName
                tableName="Status"
                item={dataDetailPerId?.data[0].status}
              />
              <TableToName
                tableName="Delete Flag"
                item={dataDetailPerId?.data[0].delete_flag}
              />
              <TableToName
                tableName="Last Changed"
                item={dayjs(dataDetailPerId?.data[0].last_changed).format(
                  'ddd, DD-MM-YYYY'
                )}
              />
              <TableToName
                tableName="Company Code"
                item={dataDetailPerId?.data[0].company_code}
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
                tableName="Tracking Number"
                item={dataDetailPerId?.data[0].tracking_number}
              />
              <TableToName
                tableName="Material Group"
                item={dataDetailPerId?.data[0].material_group}
              />
              <TableToName
                tableName="Quantity"
                item={dataDetailPerId?.data[0].quantity}
              />
              <TableToName
                tableName="Unit"
                item={dataDetailPerId?.data[0].unit}
              />
              <TableToName
                tableName="Stock Type"
                item={dataDetailPerId?.data[0].stock_type}
              />
              <TableToName
                tableName="Valuation Type"
                item={dataDetailPerId?.data[0].valuation_type}
              />
              <TableToName
                tableName="Reservation"
                item={dataDetailPerId?.data[0].reservation_type}
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

export default ModalDetailPOItem;
