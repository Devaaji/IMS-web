import React from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  GridItem,
  Icon,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import ModalDetailMasterMaterialStock from '../../Modals/ModalDetailMasterMaterialStock';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { TableToNameItems as TableToName } from '../../../utils/tables/TableToNameItems';

const TableCardMasterMaterialStock = ({ item, odds }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isWebBreakTrue = useBreakpointValue(
    { base: 'none', md: 'Block' },
    { ssr: false }
  );
  const isMobileBreakTrue = useBreakpointValue(
    { base: 'block', md: 'none' },
    { ssr: false }
  );

  const oddsColor = odds
    ?.filter((data) => data?.id === item?.id)
    .map(() => useColorModeValue('#FBFBFB', 'gray.700'));

  return (
    <Box w="full" px={{ base: '4', md: '4', lg: '8' }}>
      <Box
        display={isWebBreakTrue}
        bg={
          oddsColor?.[0]
            ? oddsColor?.[0]
            : useColorModeValue('#F0F7FF', 'gray.600')
        }
        rounded="xl"
        transitionDuration="200ms"
        _hover={{
          boxShadow: 'xl',
          cursor: 'pointer',
        }}
        py="4"
        boxShadow="md"
        align="stretch"
        onClick={onOpen}
      >
        <Flex w="full" rounded="lg" p="2">
          <GridItem textAlign="center" alignSelf="center" w="20%">
            <Text fontSize="md" fontWeight="semibold">
              {item.transaksi_material_stock_material}
            </Text>
            <Text color="orange.500" fontSize="12px">
              {item.description}
            </Text>
            <Text fontWeight="semibold" fontSize="12px">
              {item.transaksi_material_stock_batch}
            </Text>
          </GridItem>
          <GridItem textAlign="center" alignSelf="center" w="15%">
            <Text fontSize="md" fontWeight="semibold">
              {item.transaksi_material_stock_special_stock_number}
            </Text>
          </GridItem>
          <GridItem textAlign="center" w="65%">
            <Flex h="full" direction="column" justifyContent="center">
              <SimpleGrid columns={5}>
                <Text fontSize="sm">
                  {item.transaksi_material_stock_storage}
                </Text>
                <Text fontSize="sm">{item.unrestricted}</Text>
                <Text fontSize="sm">{item.quality_insp}</Text>
                <Text fontSize="sm">{item.hold_gi}</Text>
                <Text fontSize="sm">{item.hold_gr}</Text>
              </SimpleGrid>
            </Flex>
          </GridItem>
        </Flex>
      </Box>
      <Box display={isMobileBreakTrue}>
        <Accordion
          overflow="hidden"
          rounded="xl"
          bg={useColorModeValue('#FBFBFB', 'gray.700')}
          transitionDuration="200ms"
          _hover={{
            boxShadow: 'xl',
            cursor: 'pointer',
          }}
          boxShadow="md"
          align="stretch"
          defaultIndex={[]}
          allowMultiple
        >
          <AccordionItem border="none">
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _expanded={{ boxShadow: 'xl' }}>
                    {isExpanded ? (
                      <Icon as={AiFillMinusCircle} color="#4699D1" />
                    ) : (
                      <Icon as={AiFillPlusCircle} color="#4699D1" />
                    )}
                    <Box flex="1" ml="2">
                      <Box>
                        <SimpleGrid
                          columns={item.description.length === 0 ? 1 : 2}
                        >
                          <Box
                            textAlign="center"
                            fontWeight="semibold"
                            alignSelf="center"
                            flex="1"
                            alignItems="center"
                          >
                            <Text fontSize="12px">
                              {item.transaksi_material_stock_material}
                            </Text>
                          </Box>
                          <Box
                            textAlign="center"
                            color="orange.500"
                            fontSize="10px"
                          >
                            <Text>{item.description}</Text>
                          </Box>
                        </SimpleGrid>
                      </Box>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  bg={useColorModeValue('#F0F7FF', 'gray.600')}
                >
                  <Box px="1">
                    <Flex>
                      <Box>
                        <TableToName
                          fontSize="8px"
                          weightName="100px"
                          weightValue="80px"
                          tableName="UNRESTRICTED USE"
                          item={item.unrestricted}
                        />
                        <TableToName
                          fontSize="8px"
                          weightName="100px"
                          weightValue="80px"
                          tableName="QUALITY INSPECTION"
                          item={item.quality_insp}
                        />
                        <TableToName
                          fontSize="8px"
                          weightName="100px"
                          weightValue="80px"
                          tableName="IN TRANSIT"
                          item={item.stock_in_transit}
                        />
                        <TableToName
                          fontSize="8px"
                          weightName="100px"
                          weightValue="80px"
                          tableName="HOLD GI"
                          item={item.hold_gi}
                        />
                      </Box>
                      <Box ml="2">
                        <TableToName
                          fontSize="8px"
                          weightName="50px"
                          weightValue="50px"
                          tableName="HOLD GR"
                          item={item.hold_gr}
                        />
                        <TableToName
                          fontSize="8px"
                          weightName="50px"
                          weightValue="50px"
                          tableName="WIP GI"
                          item={item.wip_gi}
                        />
                        <TableToName
                          fontSize="8px"
                          weightName="50px"
                          weightValue="50px"
                          tableName="WIP GR"
                          item={item.wip_gr}
                        />
                        <TableToName
                          fontSize="8px"
                          weightName="50px"
                          weightValue="50px"
                          tableName="RETURN"
                          item={item.returns}
                        />
                      </Box>
                    </Flex>
                    <Flex mt={2} justify="end">
                      <Button
                        onClick={onOpen}
                        h="max"
                        p={2}
                        variant="button-blue"
                        fontSize="8px"
                      >
                        More Detail
                      </Button>
                    </Flex>
                  </Box>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
      <ModalDetailMasterMaterialStock
        item={item}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};

export default TableCardMasterMaterialStock;
