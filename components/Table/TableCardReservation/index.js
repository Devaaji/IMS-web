import React from 'react';

import {
  Box,
  Flex,
  GridItem,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const TableCardReservation = ({ item, index, odds }) => {
  const oddsColor = odds
    ?.filter((data) => data?.no_resevation === item.no_resevation)
    .map(() => useColorModeValue('#FBFBFB', 'gray.700'));

  const dataDetailMaterialDocument = [
    {
      item: 'S8325HU5FQ82',
      material: `C.9P0201400.00099`,
      description: `PANSER ANOA RECOVERY PAKISTAN`,
      quantity: `1,000`,
      qty_withdrawn: '0,000',
      sloc: `0,000`,
      plant: 'KK00',
      no_resevation: '534CDSC72E',
      posting_date: 'Des, 09 2022',
    },
    {
      item: 'S8325HU5FQ82',
      material: `C.9P0201400.00099`,
      description: `PANSER ANOA RECOVERY PAKISTAN`,
      quantity: `1,000`,
      qty_withdrawn: '0,000',
      sloc: `0,000`,
      plant: 'KK00',
      no_resevation: '534CDSC72E',
      posting_date: 'Des, 09 2022',
    },
    {
      item: 'S8325HU5FQ82',
      material: `C.9P0201400.00099`,
      description: `PANSER ANOA RECOVERY PAKISTAN`,
      quantity: `1,000`,
      qty_withdrawn: '0,000',
      sloc: `0,000`,
      plant: 'KK00',
      no_resevation: '534CDSC72E',
      posting_date: 'Des, 09 2022',
    },
    {
      item: 'S8325HU5FQ82',
      material: `C.9P0201400.00099`,
      description: `PANSER ANOA RECOVERY PAKISTAN`,
      quantity: `1,000`,
      qty_withdrawn: '0,000',
      sloc: `0,000`,
      plant: 'KK00',
      no_resevation: '534CDSC72E',
      posting_date: 'Des, 09 2022',
    },
    {
      item: 'S8325HU5FQ82',
      material: `C.9P0201400.00099`,
      description: `PANSER ANOA RECOVERY PAKISTAN`,
      quantity: `1,000`,
      qty_withdrawn: '0,000',
      sloc: `SLOC`,
      plant: 'KK00',
      no_resevation: '534CDSC72E',
      posting_date: 'Des, 09 2022',
    },
  ];

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
        py="2"
        align="stretch"
      >
        <Flex w="full" rounded="lg" p="2">
          <GridItem
            cursor="pointer"
            textAlign="center"
            alignSelf="center"
            w={{ base: 'full', md: '40%' }}
          >
            <SimpleGrid columns={4}>
              <Flex h="full" direction="column" justifyContent="center">
                <Text fontSize="x-small">{item.no_pd}</Text>
              </Flex>
              <Flex h="full" direction="column" justifyContent="center" px="2">
                <Text fontSize="x-small">{item.material}</Text>
                <Text fontSize="x-small" color="orange.500">
                  {item.description}
                </Text>
              </Flex>
              <Flex h="full" direction="column" justifyContent="center">
                <Text fontSize="x-small">{item.qty}</Text>
                <Text fontSize="x-small">{item.uom}</Text>
              </Flex>
              <Flex h="full" direction="column" justifyContent="center">
                <Text fontSize="x-small">{item.no_resevation}</Text>
              </Flex>
            </SimpleGrid>
          </GridItem>
          <GridItem textAlign="center" w="60%">
            <SimpleGrid columns={7} spacing={2} alignSelf="center" p="1">
              {dataDetailMaterialDocument.map((item, i) => (
                <React.Fragment key={i}>
                  <Text alignSelf="center" fontSize="x-small">
                    {item.material}
                  </Text>
                  <Text fontSize="x-small" fontWeight="semibold">
                    {item.description}
                  </Text>
                  <Text alignSelf="center" fontSize="x-small">
                    {item.quantity}
                  </Text>
                  <Text alignSelf="center" fontSize="x-small">
                    {item.qty_withdrawn}
                  </Text>
                  <Text alignSelf="center" fontSize="x-small">
                    SLOC
                  </Text>
                  <Text alignSelf="center" fontSize="x-small">
                    {item.plant}
                  </Text>
                  <Text alignSelf="center" fontSize="x-small">
                    {item.posting_date}
                  </Text>
                </React.Fragment>
              ))}
            </SimpleGrid>
          </GridItem>
        </Flex>
      </Box>
    </Box>
  );
};

export default TableCardReservation;
