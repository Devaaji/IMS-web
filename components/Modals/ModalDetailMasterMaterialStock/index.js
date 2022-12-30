import React from 'react';

import {
  Box,
  Center,
  GridItem,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { TableToNameItems as TableToName } from '../../../utils/tables/TableToNameItems';
import useRemoteDataPerId from '../../hooks/remote/useRemoteDataPerId';
import { IoClose } from 'react-icons/io5';

const ModalDetailMasterMaterialStock = ({ item, isOpen, onClose }) => {
  const id = item.id;
  const uri = `/transaction-material-stock/${id}`;
  const isWebBreakTrue = useBreakpointValue({ base: 'none', md: 'Block' });
  const isMobileBreakTrue = useBreakpointValue({ base: 'block', md: 'none' });

  const { data: dataDetailPerId, isLoading } = useRemoteDataPerId(
    uri,
    'detail-master-material-stock',
    id
  );

  const weight1 = '100px';
  const weight2 = '100px';
  const weightValue1 = '150px';
  return (
    <Modal
      size="4xl"
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
      isCentered
    >
      <ModalOverlay />
      <ModalContent rounded="lg" py="5" position="relative" mx="4">
        <Box position="absolute" top={-3} right={-2}>
          <IconButton
            onClick={onClose}
            rounded="full"
            colorScheme="red"
            fontSize="20px"
            color="white"
            icon={<IoClose />}
          />
        </Box>
        <ModalBody>
          {isLoading ? (
            <Center>
              <Spinner />
            </Center>
          ) : (
            <VStack>
              <Box mt="1" px={{ base: '5' }} w="full" rounded="lg" bg="#4699D1">
                <SimpleGrid
                  columns={{
                    base: item.description.length === 0 ? 1 : 2,
                    md: 3,
                  }}
                  textAlign="center"
                  color="white"
                  fontWeight="bold"
                  py="3"
                >
                  <GridItem alignSelf="center">
                    <Text>
                      {
                        dataDetailPerId?.data[0]
                          .transaksi_material_stock_material
                      }
                    </Text>
                    <Text display={isMobileBreakTrue}>
                      {dataDetailPerId?.data[0].transaksi_material_stock_plant}
                    </Text>
                  </GridItem>
                  <GridItem alignSelf="center">
                    <Text fontSize={{ base: '12px' }}>
                      {dataDetailPerId?.data[0].description}
                    </Text>
                  </GridItem>
                  <GridItem display={isWebBreakTrue} alignSelf="center">
                    <Text>
                      {dataDetailPerId?.data[0].transaksi_material_stock_plant}
                    </Text>
                  </GridItem>
                </SimpleGrid>
              </Box>
              <Box w="full" bg="#4699D1B2" roundedTop="lg">
                <Box px="5" bg={useColorModeValue("#F7F7F7", 'gray.800')} mt="5" pt="1" pb="5">
                  <Box mt="2">
                    <Text fontWeight="semibold">Material Properties</Text>
                  </Box>
                  <Box mt="2">
                    <SimpleGrid columns={{ base: 1, md: 3 }}>
                      <Box w="max" align="stretch">
                        <TableToName
                          fontWeight="normal"
                          weightName={weight1}
                          weightValue={weightValue1}
                          tableName="Batch"
                          item={
                            dataDetailPerId?.data[0]
                              .transaksi_material_stock_batch
                          }
                        />
                        <TableToName
                          fontWeight="normal"
                          weightName={weight1}
                          weightValue={weightValue1}
                          tableName="Storage"
                          item={
                            dataDetailPerId?.data[0]
                              .transaksi_material_stock_storage
                          }
                        />
                        <TableToName
                          fontWeight="normal"
                          weightName={weight1}
                          weightValue={weightValue1}
                          tableName="Rack"
                          item={
                            dataDetailPerId?.data[0]
                              .transaksi_material_stock_rak
                          }
                        />
                        <TableToName
                          fontWeight="normal"
                          weightName={weight1}
                          weightValue={weightValue1}
                          tableName="Val. Type"
                          item={dataDetailPerId?.data[0].valuation_type}
                        />
                      </Box>
                      <Box w="max" align="stretch">
                        <TableToName
                          fontWeight="normal"
                          weightName={weight2}
                          weightValue={weightValue1}
                          tableName="Spc. Stock"
                          item={
                            dataDetailPerId?.data[0]
                              .transaksi_material_stock_special_Stock
                          }
                        />
                        <TableToName
                          fontWeight="normal"
                          weightName={weight2}
                          weightValue={weightValue1}
                          tableName="Spc. stock No"
                          item={
                            dataDetailPerId?.data[0]
                              .transaksi_material_stock_special_stock_number
                          }
                        />
                        <TableToName
                          fontWeight="normal"
                          weightName={weight2}
                          weightValue={weightValue1}
                          tableName="Del. Flag"
                          item={dataDetailPerId?.data[0].delete_flag}
                        />
                        <TableToName
                          fontWeight="normal"
                          weightName={weight2}
                          weightValue={weightValue1}
                          tableName="Spc. Val"
                          item={dataDetailPerId?.data[0].valuation_type}
                        />
                      </Box>
                      <Box w="max" align="stretch">
                        <TableToName
                          fontWeight="normal"
                          weightName={weight1}
                          weightValue={weightValue1}
                          tableName="Sales Ord"
                          item={dataDetailPerId?.data[0].sales_document}
                        />
                        <TableToName
                          fontWeight="normal"
                          weightName={weight1}
                          weightValue={weightValue1}
                          tableName="SO Item"
                          item={dataDetailPerId?.data[0].item_sd}
                        />
                        <TableToName
                          fontWeight="normal"
                          weightName={weight1}
                          weightValue={weightValue1}
                          tableName="Vendor"
                          item={dataDetailPerId?.data[0].vendor}
                        />
                      </Box>
                    </SimpleGrid>
                  </Box>
                </Box>
              </Box>
            </VStack>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalDetailMasterMaterialStock;
