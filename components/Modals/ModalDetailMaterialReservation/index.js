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
  ModalCloseButton,
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
} from '@chakra-ui/react';
import { TableToNameItems as TableToName } from '../../../utils/tables/TableToNameItems';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import DashboardPagination from '../../dashboard/DashboardPagination';

const ModalDetailMaterialReservation = ({ isOpen, onClose }) => {
  const isLoading = false;

  const MaterialReservation = useRef(null);

  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    setPageIndex(1);
  }, []);

  const handlePageClick = (page) => {
    setPageIndex(page);

    if (MaterialReservation && MaterialReservation.current) {
      MaterialReservation.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const dataDetailMaterialReservation = [
    {
      item: 'S8325HU5FQ82',
      material: `C.9P0201400.00099`,
      description: `PANSER ANOA RECOVERY PAKISTAN`,
      quantity: `1,000`,
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
      sloc: `SLOC`,
      plant: 'KK00',
      no_resevation: '534CDSC72E',
      posting_date: 'Des, 09 2022',
    },
  ];

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
      <ModalContent overflow="auto" mx="4">
        <ModalHeader>Detail Material Reservation</ModalHeader>
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
                      <Th color="white">Material</Th>
                      <Th color="white">Description</Th>
                      <Th color="white">Quantity</Th>
                      <Th color="white">Sloc</Th>
                      <Th color="white">Plant</Th>
                      <Th w="11%" color="white">
                        No Reservasi
                      </Th>
                      <Th w="11%" color="white">
                        Posting Date
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody wordBreak="break-all">
                    {dataDetailMaterialReservation?.map((item, index) => (
                      <Tr
                        key={index}
                        whiteSpace="break-spaces"
                        _hover={{ cursor: 'pointer' }}
                      >
                        <Td>{item.item}</Td>
                        <Td>{item.material}</Td>
                        <Td>{item.description}</Td>
                        <Td>{item.quantity}</Td>
                        <Td>{item.sloc}</Td>
                        <Td>{item.plant}</Td>
                        <Td>{item.no_resevation}</Td>
                        <Td>{item.posting_date}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
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
                {dataDetailMaterialReservation?.status === 400
                  ? ''
                  : dataDetailMaterialReservation?.map((item, i) => (
                      <Box key={i}>
                        <Accordion allowMultiple>
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
                                            <Text>{item.material}</Text>
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
                                      item={item.description}
                                    />
                                    <TableToName
                                      tableName="Quantity"
                                      item={item.quantity}
                                    />
                                    <TableToName
                                      tableName="Sloc"
                                      item={item.sloc}
                                    />
                                    <TableToName
                                      tableName="Plant"
                                      item={item.plant}
                                    />
                                    <TableToName
                                      tableName="No Reservation"
                                      item={item.no_resevation}
                                    />
                                    <TableToName
                                      tableName="Posting Date"
                                      item={item.posting_date}
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
            </>
          )}
           {dataDetailMaterialReservation?.status === 400 ? (
            ''
          ) : (
            <DashboardPagination
              current={pageIndex}
              total={5}
              onPageClick={handlePageClick}
            />
          )}
        </ModalBody>

        <ModalFooter bg="gray.100">
          <ButtonGroup>
            <Button
              color="white"
              bg="ims-primary-new"
              aria-label="close modal"
              _hover={{ bg: '#225f87' }}
              onClick={onClose}
            >
              Back
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalDetailMaterialReservation;
