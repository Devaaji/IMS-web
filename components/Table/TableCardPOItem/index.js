import React from 'react';

import { Box, HStack, useDisclosure } from '@chakra-ui/react';

import { TableToNameItems as TableToName } from '../../../utils/tables/TableToNameItems';
import dayjs from 'dayjs';
import ModalDetailPOItem from '../../Modals/ModalDetailPOItem';

const TableCardPOItem = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="full">
      <Box
        bg="white"
        rounded="xl"
        transitionDuration="200ms"
        _hover={{
          bg: '#FDFDFD',
          boxShadow: 'xl',
          cursor: 'pointer',
        }}
        pt="4"
        px="4"
        boxShadow="md"
        align="stretch"
        onClick={onOpen}
      >
        <HStack rounded="md" w="full" align="flex-start" overflow="auto" pb="4">
          <Box w="max" align="stretch">
            <TableToName
              tableName="Master PO Item No"
              item={item.master_po_item_no}
            />
            <TableToName
              tableName="Master PO Item"
              item={item.master_po_item_item}
            />
            <TableToName tableName="Rfq" item={item.rfq} />
            <TableToName tableName="Rfq Item" item={item.rfq_item} />
            <TableToName tableName="Pr" item={item.pr} />
          </Box>
          <Box w="max" align="stretch">
            <TableToName tableName="Pr Item" item={item.pr_item} />
            <TableToName tableName="Material" item={item.material} />
            <TableToName tableName="Text" item={item.text} />
            <TableToName tableName="Profit Center" item={item.profit_center} />
            <TableToName tableName="Requisitioner" item={item.requisitioner} />
          </Box>
          <Box w="max" align="stretch">
            <TableToName
              tableName="Delivery Completed"
              item={item.delivery_completed}
            />
            <TableToName tableName="Final Invoice" item={item.final_invoice} />
            <TableToName tableName="Item Category" item={item.item_category} />
            <TableToName tableName="Acct Ass Cat" item={item.acct_ass_cat} />
            <TableToName tableName="Consumption" item={item.consumption} />
          </Box>
          <Box w="max" align="stretch">
            <TableToName tableName="Status" item={item.status} />
            <TableToName tableName="Delete Flag" item={item.delete_flag} />
            <TableToName
              tableName="Last Changed"
              item={dayjs(item.last_changed).format('ddd, DD-MM-YYYY')}
            />
            <TableToName tableName="Company Code" item={item.company_code} />
            <TableToName tableName="Plant" item={item.plant} />
          </Box>
          <Box w="max" align="stretch">
            <TableToName
              tableName="Storage Location"
              item={item.storage_location}
            />
            <TableToName
              tableName="Tracking Number"
              item={item.tracking_number}
            />
            <TableToName
              tableName="Material Group"
              item={item.material_group}
            />
            <TableToName tableName="Quantity" item={item.quantity} />
            <TableToName tableName="Unit" item={item.unit} />
          </Box>
        </HStack>
      </Box>
      <ModalDetailPOItem item={item} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default TableCardPOItem;
