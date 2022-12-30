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
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { TableToNameItems as TableToName } from '../../../utils/tables/TableToNameItems';
import DashboardPagination from '../../dashboard/DashboardPagination';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

const ModalDetailMaterialDocument = ({ item, isOpen, onClose }) => {
  const isLoading = false;

  const ReservationDocument = useRef(null);

  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    setPageIndex(1);
  }, []);

  const handlePageClick = (page) => {
    setPageIndex(page);

    if (ReservationDocument && ReservationDocument.current) {
      ReservationDocument.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const dataDetailDocument = [
    {
      item: 'S8325HU5FQ82',
      material: `C.9P0201400.00099`,
      description: `PANSER ANOA RECOVERY PAKISTAN`,
      Qty: `1,000`,
      sloc: `0,000`,
      uom: 'UNT',
      moveType: '0,000',
    },
    {
      item: 'S8325HU5FQ82',
      material: `C.9P0201400.00099`,
      description: `PANSER ANOA RECOVERY PAKISTAN`,
      Qty: `1,000`,
      sloc: `0,000`,
      uom: 'UNT',
      moveType: '0,000',
    },
    {
      item: 'S8325HU5FQ82',
      material: `C.9P0201400.00099`,
      description: `PANSER ANOA RECOVERY PAKISTAN`,
      Qty: `1,000`,
      sloc: `0,000`,
      uom: 'UNT',
      moveType: '0,000',
    },
    {
      item: 'S8325HU5FQ82',
      material: `C.9P0201400.00099`,
      description: `PANSER ANOA RECOVERY PAKISTAN`,
      Qty: `1,000`,
      sloc: `0,000`,
      uom: 'UNT',
      moveType: '0,000',
    },
    {
      item: 'S8325HU5FQ82',
      material: `C.9P0201400.00099`,
      description: `PANSER ANOA RECOVERY PAKISTAN`,
      Qty: `1,000`,
      sloc: `0,000`,
      uom: 'UNT',
      moveType: '0,000',
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
        <ModalHeader fontSize={{ base: 'sm' }}>Detail Document</ModalHeader>
        <ModalBody>
          {isLoading ? (
            <Center my="35px">
              <Spinner />
            </Center>
          ) : (
            <>
              <Box display={{ base: 'block', md: 'none' }}>
                <Box flex="1" pl="10" pr="4" py="2" bg="#4699D1">
                  <SimpleGrid as="section" columns={2}>
                    <Box textAlign="center" color="white" fontWeight="semibold">
                      <Text>MATERIAL</Text>
                    </Box>
                    <Box textAlign="center" color="white" fontWeight="semibold">
                      <Text>DESCRIPTION</Text>
                    </Box>
                  </SimpleGrid>
                </Box>
                {dataDetailDocument?.status === 400
                  ? ''
                  : dataDetailDocument?.map((item, i) => (
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
                                            fontSize="small"
                                            alignItems="center"
                                          >
                                            <Text>{item.material}</Text>
                                          </Box>
                                          <Box
                                            fontSize="x-small"
                                            textAlign="center"
                                            color="orange.500"
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
                                  bg={useColorModeValue('#EBF1F7', 'gray.800')}
                                >
                                  <Box pl="5">
                                    <TableToName
                                      tableName="QTY"
                                      item={item.Qty}
                                    />
                                    <TableToName
                                      tableName="UoM"
                                      item={item.uom}
                                    />
                                    <TableToName
                                      tableName="SLOC"
                                      item={item.sloc}
                                    />

                                    <TableToName
                                      tableName="Movement Type"
                                      item={item.moveType}
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
          {dataDetailDocument?.status === 400 ? (
            ''
          ) : (
            <DashboardPagination
              current={pageIndex}
              total={5}
              onPageClick={handlePageClick}
            />
          )}
        </ModalBody>

        <ModalFooter>
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

export default ModalDetailMaterialDocument;
