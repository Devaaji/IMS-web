import React from 'react';

import { Box, HStack, useDisclosure } from '@chakra-ui/react';

import { TableToNameItems as TableToName } from '../../../utils/tables/TableToNameItems';
import ModalDetailPOComponent from '../../Modals/ModalDetailPOComponent';

const TableCardPOComponent = ({ item }) => {
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
              tableName="Master PO Component No"
              item={item.master_po_component_no}
            />
            <TableToName
              weightName={sizeWeight}
              tableName="Master Component Item"
              item={item.master_po_component_item}
            />
            <TableToName
              weightName={sizeWeight}
              tableName="Record Type"
              item={item.record_type}
            />
            <TableToName
              weightName={sizeWeight}
              tableName="Material"
              item={item.material}
            />
            <TableToName
              weightName={sizeWeight}
              tableName="Qty Entry"
              item={item.qty_entry}
            />
          </Box>
          <Box w="max" align="stretch">
            <TableToName
              tableName="Quantity Fixed"
              item={item.quantity_fixed}
            />
            <TableToName tableName="Plant" item={item.plant} />
            <TableToName
              tableName="Storage Location"
              item={item.storage_location}
            />
            <TableToName tableName="Supply Area" item={item.supply_area} />
            <TableToName
              tableName="Requirement Quantity"
              item={item.requirement_quantity}
            />
          </Box>
          <Box w="max" align="stretch">
            <TableToName
              tableName="Quantity Withdrawn"
              item={item.quantity_withdrawn}
            />
            <TableToName tableName="Base Unit" item={item.base_unit} />
            <TableToName tableName="Status" item={item.status} />
            <TableToName tableName="Delete" item={item.delete} />
            <TableToName tableName="Final Issue" item={item.final_issue} />
          </Box>
          <Box w="max" align="stretch">
            <TableToName tableName="Special Stock" item={item.special_stock} />
            <TableToName tableName="Debit Credit" item={item.debit_credit} />
            <TableToName tableName="Sales Order" item={item.sales_order} />
            <TableToName tableName="Sales Item" item={item.sales_item} />
            <TableToName tableName="Order" item={item.order} />
          </Box>
          <Box w="max" align="stretch">
            <TableToName tableName="Pr" item={item.pr} />
            <TableToName tableName="Pr Item" item={item.pr_item} />
            <TableToName tableName="Movement Type" item={item.movement_type} />
            <TableToName tableName="Gl Account" item={item.gl_account} />
            <TableToName tableName="Business Area" item={item.business_area} />
          </Box>
        </HStack>
      </Box>
      <ModalDetailPOComponent item={item} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default TableCardPOComponent;
