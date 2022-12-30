import React from 'react';

import { Box, HStack, useDisclosure } from '@chakra-ui/react';

import { TableToNameItems as TableToName } from '../../../utils/tables/TableToNameItems';
import ModalDetailPOHeader from '../../Modals/ModalDetailPOHeader';

const TableCardPOHeader = ({ item }) => {
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
              tableName="Master PO Header No"
              item={item.master_po_header_no}
            />
            <TableToName tableName="Company Code" item={item.company_code} />
            <TableToName
              tableName="Master Vendor Code"
              item={item.master_vendor_code}
            />
            <TableToName tableName="Created On" item={item.created_on} />
            <TableToName
              tableName="Purch Organization"
              item={item.purch_organization}
            />
          </Box>
          <Box w="max" align="stretch">
            <TableToName tableName="Doc Type" item={item.doc_type} />
            <TableToName tableName="Group" item={item.group} />
            <TableToName tableName="Currency" item={item.currency} />
            <TableToName tableName="Release Group" item={item.release_group} />
            <TableToName
              tableName="Release Strategy"
              item={item.release_strategy}
            />
          </Box>
          <Box w="max" align="stretch">
            <TableToName
              tableName="Release Indicator"
              item={item.release_indicator}
            />
            <TableToName
              tableName="Release Status"
              item={item.release_status}
            />
            <TableToName tableName="Doc Category" item={item.doc_category} />
            <TableToName
              tableName="Control Indicator"
              item={item.control_indicator}
            />
            <TableToName
              tableName="Deletion Indicator"
              item={item.deletion_indicator}
            />
          </Box>
          <Box w="max" align="stretch">
            <TableToName tableName="Status" item={item.status} />
            <TableToName tableName="Document Date" item={item.document_date} />
            <TableToName tableName="State" item={item.state} />
          </Box>
        </HStack>
      </Box>
      <ModalDetailPOHeader item={item} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default TableCardPOHeader;
