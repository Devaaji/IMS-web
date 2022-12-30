import React from 'react';

import { Box, HStack, useDisclosure } from '@chakra-ui/react';

import { TableToNameItems as TableToName } from '../../../utils/tables/TableToNameItems';
import ModalDetailPOAssignment from '../../Modals/ModalDetailPOAssignment';

const TableCardPOAssignment = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sizeWeight = '210px';
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
              weightName={sizeWeight}
              tableName="Master PO Assignment No"
              item={item.master_po_assignment_no}
            />
            <TableToName
              weightName={sizeWeight}
              tableName="Master Assignment Item"
              item={item.master_po_assignment_item}
            />
            <TableToName
              weightName={sizeWeight}
              tableName="Master Assignment Seq"
              item={item.master_po_assignment_seq}
            />
            <TableToName
              weightName={sizeWeight}
              tableName="Gl Account"
              item={item.gl_account}
            />
            <TableToName
              weightName={sizeWeight}
              tableName="Business Area"
              item={item.business_area}
            />
          </Box>
          <Box w="max" align="stretch">
            <TableToName tableName="Cost Center" item={item.cost_center} />
            <TableToName tableName="Sales Order" item={item.sales_order} />
            <TableToName tableName="Sales Item" item={item.sales_item} />
            <TableToName tableName="Asset" item={item.asset} />
            <TableToName tableName="Sub Number" item={item.subnumber} />
          </Box>
          <Box w="max" align="stretch">
            <TableToName tableName="Order" item={item.order} />
            <TableToName
              tableName="Goods Recipient"
              item={item.goods_recipient}
            />
            <TableToName
              tableName="Unloading Point"
              item={item.unloading_point}
            />
            <TableToName tableName="Delete" item={item.delete} />
            <TableToName
              tableName="Controlling Area"
              item={item.controlling_area}
            />
          </Box>
          <Box w="max" align="stretch">
            <TableToName tableName="Cost Object" item={item.cost_object} />
            <TableToName
              tableName="Profitab Segmt"
              item={item.profitab_segmt}
            />
            <TableToName tableName="Profit Center" item={item.profit_center} />
            <TableToName tableName="Sales Item" item={item.sales_item} />
            <TableToName tableName="WBS" item={item.wbs} />
          </Box>
          <Box w="max" align="stretch">
            <TableToName tableName="Network" item={item.network} />
            <TableToName
              tableName="Routing Oprations"
              item={item.routing_oprations}
            />
            <TableToName
              tableName="Counter Operations"
              item={item.counter_operations}
            />
            <TableToName tableName="Funds Center" item={item.funds_center} />
            <TableToName tableName="Fund" item={item.fund} />
          </Box>
        </HStack>
      </Box>
      <ModalDetailPOAssignment item={item} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default TableCardPOAssignment;
