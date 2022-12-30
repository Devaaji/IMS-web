import React from 'react';

import { Box, HStack, useDisclosure } from '@chakra-ui/react';

import { TableToNameItems as TableToName } from '../../../utils/tables/TableToNameItems';
import ModalDetailMaterialBatch from '../../Modals/ModalDetailMaterialBatch';

const TableCardMaterialBatch = ({ item }) => {
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
              tableName="Master Material Code"
              item={item.master_material_code}
            />
            <TableToName
              tableName="Master Plant Code"
              item={item.master_plant_code}
            />
            <TableToName
              tableName="Material Batch Code"
              item={item.master_material_batch_code}
            />
            <TableToName
              tableName="Valuation Type"
              item={item.valuation_type}
            />
            <TableToName tableName="Delete Flag" item={item.delete_flag} />
          </Box>
        </HStack>
      </Box>
      <ModalDetailMaterialBatch item={item} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default TableCardMaterialBatch;
