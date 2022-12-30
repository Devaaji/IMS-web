import React from 'react';

import {
  Box,
  Flex,
  GridItem,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import ModalDetailMaterialDocument from '../../Modals/ModalDetaiMaterialDocument';

const TableCardMaterialDocument = ({ item, index, odds }) => {
  const oddsColor = odds
    ?.filter(
      (data) => data?.master_material_document === item.master_material_document
    )
    .map(() => useColorModeValue('#FBFBFB', 'gray.700'));

  const isMobileBreakTrue = useBreakpointValue(
    { base: 'none', md: 'block' },
    { ssr: false }
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const isOpenModal = useBreakpointValue({ base: true, md: false, xl: false });

  const dataDetailMaterialDocument = [
    {
      material: `C.9P0201400.00099`,
      description: `BASIC KEND.ISUZU D-MAX 2.5VGS 4X4 M/T DC`,
      qty: `60,000`,
      uom: 'UNT',
      sloc: `0,000`,
      moveType: '0,000',
    },
    {
      material: `C.9P2090202.03000`,
      description: `KC ANTI PLR TINJAU (LKL) #38X147X250`,
      qty: `30,000`,
      uom: 'LBR',
      sloc: `0,000`,
      moveType: '0,000',
    },
    {
      material: `C.9P0201400.00099`,
      description: `BASIC KEND.ISUZU D-MAX 2.5VGS 4X4 M/T DC`,
      qty: `60,000`,
      uom: 'UNT',
      sloc: `0,000`,
      moveType: '0,000',
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
        onClick={isOpenModal ? onOpen : null}
        boxShadow="md"
        transitionDuration="200ms"
        py="4"
        align="stretch"
      >
        <Flex w="full" p="2">
          <GridItem
            textAlign="center"
            alignSelf="center"
            w={{ base: 'full', md: '25%' }}
          >
            <Flex h="full" direction="column" justifyContent="center">
              <Text
                fontSize="md"
                fontWeight="semibold"
                color={useColorModeValue('blue.700', 'blue.400')}
              >
                {item.master_material_document}
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            display={isMobileBreakTrue}
            alignSelf="center"
            w={{ base: 'full', md: '75%' }}
          >
            <Flex w="full" direction="column" p="1">
              {dataDetailMaterialDocument.map((item, i) => (
                <React.Fragment key={i}>
                  <Flex my="1">
                    <Flex w="40%" direction="column" textAlign="center">
                      <Text fontSize="small" fontWeight="semibold">
                        {item.material}
                      </Text>
                      <Text fontSize="small" color="orange.500">
                        {item.description}
                      </Text>
                    </Flex>
                    <Flex
                      w="15%"
                      direction="column"
                      textAlign="center"
                      justifyContent="center"
                    >
                      <Text fontSize="small">{item.qty}</Text>
                    </Flex>
                    <Flex
                      w="15%"
                      direction="column"
                      textAlign="center"
                      justifyContent="center"
                    >
                      <Text fontSize="small">{item.uom}</Text>
                    </Flex>
                    <Flex
                      w="15%"
                      direction="column"
                      textAlign="center"
                      justifyContent="center"
                    >
                      <Text fontSize="small">{item.sloc}</Text>
                    </Flex>
                    <Flex
                      w="15%"
                      direction="column"
                      textAlign="center"
                      justifyContent="center"
                    >
                      <Text fontSize="small">{item.moveType}</Text>
                    </Flex>
                  </Flex>
                  <ModalDetailMaterialDocument
                    item={item}
                    isOpen={isOpen}
                    onClose={onClose}
                  />
                </React.Fragment>
              ))}
            </Flex>
          </GridItem>
        </Flex>
      </Box>
    </Box>
  );
};

export default TableCardMaterialDocument;
