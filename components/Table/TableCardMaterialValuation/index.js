import React from 'react';

import { Box, HStack, useDisclosure } from '@chakra-ui/react';

import { TableToNameItems as TableToName } from '../../../utils/tables/TableToNameItems';
import ModalDetailMaterialValuation from '../../Modals/ModalDetailMaterialValuation';

const TableCardMaterialValuation = ({ item }) => {
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
              tableName="Valuation Area"
              item={item.valuation_area}
            />
            <TableToName
              tableName="Valuation Type"
              item={item.valuation_type}
            />
            <TableToName tableName="Delete" item={item.delete} />
          </Box>
        </HStack>
      </Box>
      <ModalDetailMaterialValuation
        item={item}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};

export default TableCardMaterialValuation;
