import React from 'react';

import { Box, HStack, useDisclosure } from '@chakra-ui/react';

import { TableToNameItems as TableToName } from '../../../utils/tables/TableToNameItems';
import ModalDetailMaterialVendor from '../../Modals/ModalDetailMaterialVendor';

const TableCardMaterialVendor = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="full">
      <Box
        bg="white"
        rounded="xl"
        boxShadow="md"
        transitionDuration="200ms"
        _hover={{
          bg: '#FDFDFD',
          boxShadow: 'xl',
          cursor: 'pointer',
        }}
        pt="4"
        px="4"
        align="stretch"
        onClick={onOpen}
      >
        <HStack rounded="md" w="full" align="flex-start" overflow="auto" pb="4">
          <Box w="max" align="stretch">
            <TableToName
              tableName="Master Vendor Code"
              item={item.master_vendor_code}
            />
            <TableToName tableName="Title" item={item.title} />
            <TableToName tableName="Name 1" item={item.name_1} />
            <TableToName tableName="Name 2" item={item.name_2} />
            <TableToName tableName="Name 3" item={item.name_3} />
          </Box>
          <Box w="max" align="stretch">
            <TableToName tableName="Name 4" item={item.name_4} />
            <TableToName tableName="Street" item={item.street} />
            <TableToName tableName="City" item={item.city} />
            <TableToName tableName="District" item={item.district} />
            <TableToName tableName="PO Box" item={item.po_box} />
          </Box>
          <Box w="max" align="stretch">
            <TableToName tableName="Country" item={item.country} />
            <TableToName tableName="Postal Code" item={item.postal_code} />
            <TableToName tableName="Account Group" item={item.account_group} />
            <TableToName tableName="Deletion Flag" item={item.deletion_flag} />
            <TableToName tableName="Posting Block" item={item.posting_block} />
          </Box>
          <Box w="max" align="stretch">
            <TableToName
              tableName="Purchasing Block"
              item={item.purchasing_block}
            />
          </Box>
        </HStack>
      </Box>
      <ModalDetailMaterialVendor
        item={item}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};

export default TableCardMaterialVendor;
