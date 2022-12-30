import React, { useEffect, useRef, useState } from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Center,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { postFetcher } from '../../../libs/axios';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { TableToNameItems as TableToName } from '../../../utils/tables/TableToNameItems';
import DashboardPagination from '../../dashboard/DashboardPagination';
import MessageNotFoundData from '../../../utils/error/MessageNotFoundData';

const ModalDetailProductionOrder = ({ isOpen, onClose, item }) => {
  const id = item.master_material_code;
  const uri = `/pd-component/${id}`;

  const ProductionOrderRef = useRef(null);

  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    setPageIndex(1);
  }, []);

  const handlePageClick = (page) => {
    setPageIndex(page);

    if (ProductionOrderRef && ProductionOrderRef.current) {
      ProductionOrderRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const {
    data: dataDetailComponent,
    isError,
    isLoading,
  } = useQuery(['detail-component', id, pageIndex], () =>
    postFetcher(uri, {
      limit: 5,
      page: pageIndex,
      order: 'item',
      sort: 'ASC',
    })
  );

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      size="6xl"
      scrollBehavior="inside"
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        bg={useColorModeValue('white', 'gray.800')}
        overflow="hidden"
        mx="4"
      >
        <ModalHeader>Component Production Order</ModalHeader>
        <ModalBody>
          {isLoading ? (
            <Center my="35px">
              <Spinner />
            </Center>
          ) : (
            <>
              <TableContainer
                borderWidth="4"
                display={{ base: 'none', md: 'block' }}
              >
                <Table size="sm" variant="striped">
                  <Thead bg="ims-primary-new">
                    <Tr>
                      <Th w="13%" color="white">
                        Item
                      </Th>
                      <Th color="white">Component</Th>
                      <Th color="white">Description</Th>
                      <Th color="white">Required Qty</Th>
                      <Th color="white">Qty Withdrawn</Th>
                      <Th color="white">UoM</Th>
                      <Th color="white">Plant</Th>
                    </Tr>
                  </Thead>

                  <Tbody wordBreak="break-all">
                    {dataDetailComponent?.data.status === 400
                      ? ''
                      : dataDetailComponent?.data.map((item, index) => (
                          <Tr key={index} whiteSpace="break-spaces">
                            <Td py="3">{item.item}</Td>
                            <Td>{item.component_material_code}</Td>
                            <Td>{item.component_material_desc}</Td>
                            <Td>{item.required_quantity}</Td>
                            <Td>{item.quantity_withdrawn}</Td>
                            <Td>{item.master_uom_code}</Td>
                            <Td>{item.plant}</Td>
                          </Tr>
                        ))}
                  </Tbody>
                </Table>
                {isError && (
                  <Box py="4" w="full">
                    <Center>
                      <MessageNotFoundData />
                    </Center>
                  </Box>
                )}
              </TableContainer>
              <Box display={{ base: 'block', md: 'none' }}>
                <Box flex="1" pl="10" pr="4" py="2" bg="#4699D1">
                  <SimpleGrid as="section" columns={2}>
                    <Box textAlign="center" fontWeight="semibold">
                      <Text>ITEM</Text>
                    </Box>
                    <Box textAlign="center" fontWeight="semibold">
                      <Text>MATERIAL</Text>
                    </Box>
                  </SimpleGrid>
                </Box>
                {dataDetailComponent?.data.status === 400
                  ? ''
                  : dataDetailComponent?.data.map((item, i) => (
                      <Box>
                        <Accordion key={i} defaultIndex={[]} allowMultiple>
                          <AccordionItem boxShadow="md" mt="1">
                            {({ isExpanded }) => (
                              <>
                                <h2>
                                  <AccordionButton>
                                    {isExpanded ? (
                                      <Icon
                                        as={AiFillMinusCircle}
                                        color="#4699D1"
                                      />
                                    ) : (
                                      <Icon
                                        as={AiFillPlusCircle}
                                        color="#4699D1"
                                      />
                                    )}
                                    <Box flex="1" ml="2">
                                      <Box>
                                        <SimpleGrid columns={2}>
                                          <Box
                                            textAlign="center"
                                            fontWeight="semibold"
                                            alignSelf="center"
                                            flex="1"
                                            alignItems="center"
                                          >
                                            <Text>{item.item}</Text>
                                          </Box>
                                          <Box textAlign="center">
                                            <Text>
                                              {item.component_material_code}
                                            </Text>
                                          </Box>
                                        </SimpleGrid>
                                      </Box>
                                    </Box>
                                  </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} bg="#EBF1F7">
                                  <Box pl="5">
                                    <TableToName
                                      tableName="Description"
                                      item={item.component_material_desc}
                                    />
                                    <TableToName
                                      tableName="Required Qty"
                                      item={item.required_quantity}
                                    />
                                    <TableToName
                                      tableName="Withdrawn Qty"
                                      item={item.quantity_withdrawn}
                                    />
                                    <TableToName
                                      tableName="Uom"
                                      item={item.master_uom_code}
                                    />
                                    <TableToName
                                      tableName="Plant"
                                      item={item.plant}
                                    />
                                  </Box>
                                </AccordionPanel>
                              </>
                            )}
                          </AccordionItem>
                        </Accordion>
                      </Box>
                    ))}
              </Box>
              {dataDetailComponent?.data.status === 400 ? (
                ''
              ) : (
                <DashboardPagination
                  current={pageIndex}
                  total={
                    dataDetailComponent
                      ? dataDetailComponent.pagination.total_pages
                      : 0
                  }
                  onPageClick={handlePageClick}
                />
              )}
            </>
          )}
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button variant="button-blue" onClick={onClose}>
              Back
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalDetailProductionOrder;
