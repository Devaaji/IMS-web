import React from 'react';

import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  Tooltip,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import ModalDetailProductionOrder from '../../Modals/ModalDetailProductionOrder';

const TableProductionOrder = ({ item, index, odds }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const oddsColor = odds
    ?.filter((data) => data?.no_pd === item?.no_pd)
    .map(() => useColorModeValue('#FBFBFB', 'gray.700'));

  const colorTableMode = useColorModeValue('gray.600', 'white');
  return (
    <Box w="full" px={{ base: '4', md: '4', lg: '8' }}>
      <Tooltip hasArrow label="Click For Detail Component">
        <Box
          key={index}
          onClick={onOpen}
          bg={
            oddsColor?.[0]
              ? oddsColor?.[0]
              : useColorModeValue('#F0F7FF', 'gray.600')
          }
          rounded="xl"
          boxShadow="md"
          _hover={{
            boxShadow: 'xl',
            cursor: 'pointer',
          }}
          transitionDuration="200ms"
          py="4"
          align="stretch"
        >
          <SimpleGrid as="section" columns={{ base: '2', md: '4' }}>
            <Box
              h="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Flex direction="column" textAlign="center">
                <Tooltip hasArrow label="No Production Order">
                  <Text fontWeight="bold">{item.no_pd}</Text>
                </Tooltip>
                <Tooltip hasArrow label="Plant">
                  <Text fontWeight="semibold" color="#F28148">
                    {item.plant}
                  </Text>
                </Tooltip>
                <Tooltip hasArrow label="Order Type">
                  <Text color={colorTableMode} fontSize="sm">
                    {item.order_type}
                  </Text>
                </Tooltip>
              </Flex>
            </Box>
            <Box px="5" h="full">
              <Flex direction="column" textAlign="start" h="full">
                <Text
                  color={colorTableMode}
                  fontSize={{ base: '12', md: 'sm' }}
                >
                  {item.master_material_code}
                </Text>
                <Text
                  color={colorTableMode}
                  fontSize={{ base: '12', md: 'sm' }}
                >
                  {item.description}
                </Text>
                <Text
                  color={colorTableMode}
                  fontSize={{ base: '12', md: 'sm' }}
                  display={{ base: 'block', md: 'none' }}
                >
                  {item.total_quantity_pd}
                </Text>
                <Text
                  color={colorTableMode}
                  fontSize={{ base: '12', md: 'sm' }}
                  display={{ base: 'block', md: 'none' }}
                >
                  {item.master_uom_code}
                </Text>
              </Flex>
            </Box>
            <Box display={{ base: 'none', md: 'block' }}>
              <Flex
                direction="column"
                justify="center"
                textAlign="center"
                h="full"
              >
                <Text color={colorTableMode}>{item.total_quantity_pd}</Text>
              </Flex>
            </Box>
            <Box display={{ base: 'none', md: 'block' }}>
              <Flex
                direction="column"
                textAlign="center"
                justify="center"
                h="full"
              >
                <Text color={colorTableMode}>{item.master_uom_code}</Text>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      </Tooltip>
      <ModalDetailProductionOrder
        item={item}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};

export default TableProductionOrder;
