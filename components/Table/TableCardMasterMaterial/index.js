import React from 'react';

import {
  Box,
  Flex,
  GridItem,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { BiCheckboxChecked } from 'react-icons/bi';

const TableCardMasterMaterial = ({ item, index, odds }) => {
  const oddsColor = odds
    ?.filter(
      (data) => data?.master_material_code === item?.master_material_code
    )
    .map(() => useColorModeValue('#FBFBFB', 'gray.700'));

  return (
    <Box w="full" px={{ base: '4', md: '4', lg: '8' }}>
      <Box
        key={index}
        bg={
          oddsColor?.[0]
            ? oddsColor?.[0]
            : useColorModeValue('#F0F7FF', 'gray.600')
        }
        rounded="xl"
        boxShadow="md"
        transitionDuration="200ms"
        align="stretch"
        py="4"
      >
        <SimpleGrid w="full" rounded="lg" columns={{ base: 2, md: 5 }} px="4">
          <GridItem textAlign="center" alignSelf="center">
            <Flex direction="column">
              <Text fontWeight="semibold">{item.master_material_code}</Text>
              <Text fontSize="smaller" color="orange.500">
                {item.description}
              </Text>
            </Flex>
          </GridItem>
          <GridItem textAlign="center" alignSelf="center">
            <Text>{item.master_material_type_code}</Text>
          </GridItem>
          <GridItem textAlign="center" alignSelf="center">
            <Text>{item.master_material_group_code}</Text>
          </GridItem>
          <GridItem textAlign="center" alignSelf="center">
            <Text>{item.master_uom_code}</Text>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignSelf="center">
            {item.batch.length > 0 ? (
              <Icon as={BiCheckboxChecked} color="green.800" w={5} h={5} />
            ) : (
              ''
            )}
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default TableCardMasterMaterial;
