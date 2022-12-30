import React, { useEffect, useRef, useState, useMemo } from 'react';
import Head from 'next/head';

import {
  Box,
  Flex,
  GridItem,
  HStack,
  SimpleGrid,
  Spacer,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { generateEntryOptions } from '../components/core/select/helper/entryOptions';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { getServerSidePropsWithAuth } from '../utils/getServerSidePropsWithAuth';
import DashboardPagination from '../components/dashboard/DashboardPagination';
import Select from '../components/core/select';
import MessageNotFoundData from '../utils/error/MessageNotFoundData';
import PageLoadingScreen from '../components/core/pageLoadingScreen';
import TableCardReservation from '../components/Table/TableCardReservation';
import FilterReservation from '../components/filter/filterReservation';

const Reservation = () => {
  const ReservationProductionOrderRef = useRef(null);

  const showEntryOptions = useMemo(() => generateEntryOptions(), []);
  const [dataLimit, setDataLimit] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    setPageIndex(1);
  }, [dataLimit]);

  useEffect(() => {
    if (pageIndex > 1) setPageIndex(pageIndex - 1);
  }, [pageIndex]);

  const handlePageClick = (page) => {
    setPageIndex(page);

    if (
      ReservationProductionOrderRef &&
      ReservationProductionOrderRef.current
    ) {
      ReservationProductionOrderRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  const isError = false;
  const isLoadingRevationProduction = false;

  const DataReservationProductionOrder = [
    {
      no_resevation: 'DSJHFD32481',
      no_pd: '34873b736HDGSD',
      material: 'C.9MAUNG440.00000',
      description: 'KENDARAAN RINGAN TAKTIS',
      qty: '50,000',
      uom: 'UNT',
    },
    {
      no_resevation: 'DSJHFD32482',
      no_pd: '34873b736HDGSD',
      material: 'C.9P2090202.02000',
      description: 'PIPA SEAMLESS SCH40 Oe 1 1/4 X 6000 MM',
      qty: '100,000',
      uom: 'BTG',
    },
    {
      no_resevation: 'DSJHFD32481',
      no_pd: '34873b736HDGSD',
      material: 'C.9MAUNG440.00000',
      description: 'KENDARAAN RINGAN TAKTIS',
      qty: '50,000',
      uom: 'UNT',
    },
    {
      no_resevation: 'DSJHFD32482',
      no_pd: '34873b736HDGSD',
      material: 'C.9P2090202.02000',
      description: 'PIPA SEAMLESS SCH40 Oe 1 1/4 X 6000 MM',
      qty: '100,000',
      uom: 'BTG',
    },
    {
      no_resevation: 'DSJHFD32481',
      no_pd: '34873b736HDGSD',
      material: 'C.9MAUNG440.00000',
      description: 'KENDARAAN RINGAN TAKTIS',
      qty: '50,000',
      uom: 'UNT',
    },
    {
      no_resevation: 'DSJHFD32482',
      no_pd: '34873b736HDGSD',
      material: 'C.9P2090202.02000',
      description: 'PIPA SEAMLESS SCH40 Oe 1 1/4 X 6000 MM',
      qty: '100,000',
      uom: 'BTG',
    },
    {
      no_resevation: 'DSJHFD32481',
      no_pd: '34873b736HDGSD',
      material: 'C.9MAUNG440.00000',
      description: 'KENDARAAN RINGAN TAKTIS',
      qty: '50,000',
      uom: 'UNT',
    },
    {
      no_resevation: 'DSJHFD32482',
      no_pd: '34873b736HDGSD',
      material: 'C.9P2090202.02000',
      description: 'PIPA SEAMLESS SCH40 Oe 1 1/4 X 6000 MM',
      qty: '100,000',
      uom: 'BTG',
    },
  ];

  const oddDataMapper = DataReservationProductionOrder.filter((_, index) => {
    return index % 2 !== 1;
  });

  return (
    <VStack
      h="85vh"
      overflow="auto"
      align="stretch"
      py="6"
      spacing="3"
      ref={ReservationProductionOrderRef}
    >
      <Head>
        <title>Reservation Production Order | IMS</title>
      </Head>
      {DataReservationProductionOrder?.status === 400 ? (
        ''
      ) : (
        <Box
          px={{ base: '4', md: '4', lg: '8' }}
          bg={useColorModeValue('white', 'gray.800')}
          position="sticky"
          w="full"
          zIndex={10}
          top="-6"
        >
          <FilterReservation />
          <Flex w="full" rounded="lg" p="2">
            <GridItem
              cursor="pointer"
              textAlign="center"
              alignSelf="center"
              w={{ base: 'full', md: '40%' }}
            >
              <SimpleGrid columns={4}>
                <Flex h="full" direction="column" justifyContent="center">
                  <Text fontWeight="semibold" fontSize="x-small">
                    NO ORDER
                  </Text>
                </Flex>
                <Flex h="full" direction="column" justifyContent="center">
                  <Text fontWeight="semibold" fontSize="x-small">
                    MATERIAL
                  </Text>
                  <Text fontWeight="semibold" fontSize="x-small">
                    DESCRIPTION
                  </Text>
                </Flex>
                <Flex h="full" direction="column" justifyContent="center">
                  <Text fontWeight="semibold" fontSize="x-small">
                    QTY
                  </Text>
                  <Text fontWeight="semibold" fontSize="x-small">
                    UoM
                  </Text>
                </Flex>
                <Flex h="full" direction="column" justifyContent="center">
                  <Text fontWeight="semibold" fontSize="x-small">
                    NO RESERVATION
                  </Text>
                </Flex>
              </SimpleGrid>
            </GridItem>
            <GridItem textAlign="center" w="60%">
              <Flex h="full" direction="column">
                <Text fontWeight="semibold" fontSize="x-small">
                  DETAIL
                </Text>
                <SimpleGrid columns={7} borderTopWidth={1} p="1">
                  <Text
                    cursor="pointer"
                    fontWeight="semibold"
                    alignSelf="center"
                    fontSize="x-small"
                  >
                    MATERIAL
                  </Text>
                  <Text
                    alignSelf="center"
                    cursor="pointer"
                    fontWeight="semibold"
                    fontSize="x-small"
                  >
                    DESC
                  </Text>
                  <Text
                    px="2"
                    cursor="pointer"
                    fontWeight="semibold"
                    alignSelf="center"
                    fontSize="x-small"
                  >
                    QTY REQUIRED
                  </Text>
                  <Text
                    px="2"
                    cursor="pointer"
                    alignSelf="center"
                    fontWeight="semibold"
                    fontSize="x-small"
                  >
                    QTY WITHDRAWN
                  </Text>
                  <Text
                    cursor="pointer"
                    fontWeight="semibold"
                    alignSelf="center"
                    fontSize="x-small"
                  >
                    SLOC
                  </Text>
                  <Text
                    cursor="pointer"
                    fontWeight="semibold"
                    alignSelf="center"
                    fontSize="x-small"
                  >
                    PLANT
                  </Text>
                  <Text
                    cursor="pointer"
                    fontWeight="semibold"
                    alignSelf="center"
                    fontSize="x-small"
                  >
                    POSTING DATE
                  </Text>
                </SimpleGrid>
              </Flex>
            </GridItem>
          </Flex>
        </Box>
      )}
      {DataReservationProductionOrder?.map((item, index) => (
        <TableCardReservation index={index} item={item} odds={oddDataMapper} />
      ))}
      {isError && <MessageNotFoundData />}
      {isLoadingRevationProduction && <PageLoadingScreen />}
      <Flex
        flexDir={{ base: 'column', md: 'row', xl: 'row' }}
        justifyContent="space-between"
        borderTopWidth="1px"
        alignItems="center"
        py="2"
        px={{ base: '4', md: '4', lg: '8' }}
      >
        <Box display="flex" alignItems="center">
          <HStack>
            <Text>Show</Text>
            <Select
              isSearchable={false}
              options={showEntryOptions}
              defaultValue={showEntryOptions[0]}
              onChange={(option) => setDataLimit(option.value)}
            />
            <Text>Entries</Text>
          </HStack>
        </Box>
        <DashboardPagination
          current={pageIndex}
          total={1}
          onPageClick={handlePageClick}
        />
      </Flex>
    </VStack>
  );
};
Reservation.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export const getServerSideProps = getServerSidePropsWithAuth;
export default Reservation;
