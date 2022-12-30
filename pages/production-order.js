import React, { useEffect, useRef, useState, useMemo } from 'react';
import Head from 'next/head';

import {
  Box,
  Flex,
  GridItem,
  HStack,
  SimpleGrid,
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
import TableProductionOrder from '../components/Table/TableProductionOrder';
import FilterProductionOrder from '../components/filter/filterProductionOrder';
import useRemoteProductionOrder from '../components/hooks/remote/useRemoteProductionOrder';
import { ModalExpiredToken } from '../utils/modals/ModalExpiredToken';

const ProductionOrder = () => {
  const ProductionOrderRef = useRef(null);

  const showEntryOptions = useMemo(() => generateEntryOptions(), []);
  const [dataLimit, setDataLimit] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);

  const [filterNoProductionOrder, setFilterNoProductionOrder] = useState('');
  const [filterDescription, setFilterDescription] = useState('');
  const [filterMaterial, setFilterMaterial] = useState('');
  const [mutate, setMutate] = useState();

  const {
    data: dataProductionOrder,
    isLoading: isLoadingProductionOrder,
    isError,
  } = useRemoteProductionOrder({
    nameQuery: 'production-order-list',
    pageLimit: dataLimit,
    pageIndex: pageIndex,
    noProduction: filterNoProductionOrder ? filterNoProductionOrder : '',
    material: filterMaterial ? filterMaterial : '',
    description: filterDescription ? filterDescription : '',
    mutateFTP: mutate,
  });

  useEffect(() => {
    setPageIndex(1);
  }, [filterNoProductionOrder, filterMaterial, filterDescription]);

  useEffect(() => {
    setPageIndex(1);
  }, [dataLimit]);

  useEffect(() => {
    if (pageIndex > 1) setPageIndex(pageIndex - 1);
  }, [pageIndex]);

  const handlePageClick = (page) => {
    setPageIndex(page);

    if (ProductionOrderRef && ProductionOrderRef.current) {
      ProductionOrderRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const oddDataMapper =
    dataProductionOrder?.status === 200
      ? dataProductionOrder?.data.filter((_, index) => {
          return index % 2 !== 1;
        })
      : '';

  return (
    <VStack h="85vh" overflow="auto" align="stretch" py="6" spacing="3">
      <Head>
        <title>Production Order | IMS</title>
      </Head>
      {dataProductionOrder?.status === 400 ? (
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
          <FilterProductionOrder
            setMutate={setMutate}
            changeNoProductionOder={setFilterNoProductionOrder}
            changeMaterial={setFilterMaterial}
            changeDescription={setFilterDescription}
            data={dataProductionOrder}
            isLoading={isLoadingProductionOrder}
          />
          <SimpleGrid
            as="section"
            w="full"
            bg={useColorModeValue('white', 'gray.800')}
            rounded="lg"
            columns={{ base: '2', md: '4' }}
            p="2"
          >
            <GridItem textAlign="center">
              <Text fontWeight="semibold" size="title-card">
                NO PRODUCTION ORDER
              </Text>
              <Text fontWeight="semibold" size="title-card">
                PLANT
              </Text>
              <Text fontWeight="semibold" size="title-card">
                ORDER TYPE
              </Text>
            </GridItem>
            <GridItem textAlign="center">
              <Flex h="full" direction="column" justifyContent="center">
                <Text fontWeight="semibold" size="title-card">
                  MATERIAL
                </Text>
                <Text fontWeight="semibold" size="title-card">
                  MATERIAL DESCRIPTION
                </Text>
                <Text
                  fontWeight="semibold"
                  size="title-card"
                  display={{ base: 'block', md: 'none' }}
                >
                  QTY
                </Text>
                <Text
                  fontWeight="semibold"
                  size="title-card"
                  display={{ base: 'block', md: 'none' }}
                >
                  UoM
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              textAlign="center"
              display={{ base: 'none', md: 'block' }}
            >
              <Flex h="full" direction="column" justifyContent="center">
                <Text fontWeight="semibold" size="title-card">
                  QTY
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              textAlign="center"
              display={{ base: 'none', md: 'block' }}
            >
              <Flex h="full" direction="column" justifyContent="center">
                <Text fontWeight="semibold" size="title-card">
                  UoM
                </Text>
              </Flex>
            </GridItem>
          </SimpleGrid>
        </Box>
      )}
      <Box as="span" w="full" h="1px" ref={ProductionOrderRef}></Box>
      {dataProductionOrder?.status === 400 ? (
        <PageLoadingScreen />
      ) : (
        dataProductionOrder?.data.map((item, index) => (
          <TableProductionOrder
            index={index}
            item={item}
            odds={oddDataMapper}
          />
        ))
      )}
      {isError && <MessageNotFoundData />}
      {isLoadingProductionOrder && <PageLoadingScreen />}
      {dataProductionOrder?.status === 400 && <ModalExpiredToken />}
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
        {dataProductionOrder?.status === 400 ? (
          ''
        ) : (
          <DashboardPagination
            current={pageIndex}
            total={
              dataProductionOrder
                ? dataProductionOrder.pagination.total_pages
                : 0
            }
            onPageClick={handlePageClick}
          />
        )}
      </Flex>
    </VStack>
  );
};

const admin = 'admin';

ProductionOrder.getLayout = (page) => (
  <DashboardLayout sidebarFor={admin}>{page}</DashboardLayout>
);

export const getServerSideProps = async (context) =>
  getServerSidePropsWithAuth(context, admin);

export default ProductionOrder;
