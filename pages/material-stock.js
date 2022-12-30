import React, { useState, useEffect, useRef, useMemo } from 'react';
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
import PageLoadingScreen from '../components/core/pageLoadingScreen';
import Select from '../components/core/select';
import { generateEntryOptions } from '../components/core/select/helper/entryOptions';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import DashboardPagination from '../components/dashboard/DashboardPagination';
import useRemoteMasterMaterialStock from '../components/hooks/remote/useRemoteMasterMaterialStock';
import { getServerSidePropsWithAuth } from '../utils/getServerSidePropsWithAuth';
import MessageNotFoundData from '../utils/error/MessageNotFoundData';
import { ModalExpiredToken } from '../utils/modals/ModalExpiredToken';
import TableCardMasterMaterialStock from '../components/Table/TableCardMasterMaterialStock';
import FilterMasterMaterialStock from '../components/filter/fiterMasterMaterialStock';

const TransactionMaterialStock = () => {
  const showEntryOptions = useMemo(() => generateEntryOptions(), []);

  const [dataLimit, setDataLimit] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const masterMaterialStockRef = useRef(null);
  const [short, setShort] = useState(true);
  const [orderByName, setOrderByName] = useState();
  const [mutate, setMutate] = useState();

  const [filterMaterialNumber, setFilterMaterialNumber] = useState('');
  const [filterMaterialDescription, setFilterMaterialDescription] =
    useState('');
  const [filterMaterialStorage, setFilterMaterialStorage] = useState('');

  const {
    data: dataMaterialStock,
    isLoading: isLoadingMasterMaterialStock,
    isError,
  } = useRemoteMasterMaterialStock({
    nameQuery: 'master-material-stock',
    pageLimit: dataLimit,
    pageIndex: pageIndex,
    short: short ? 'ASC' : 'DESC',
    order: orderByName,
    materialNumber: filterMaterialNumber ? filterMaterialNumber : '',
    materialDescription: filterMaterialDescription
      ? filterMaterialDescription
      : '',
    storageLocation: filterMaterialStorage ? filterMaterialStorage : '',
    mutateFTP: mutate,
  });

  useEffect(() => {
    setPageIndex(1);
  }, [filterMaterialNumber, filterMaterialDescription, filterMaterialStorage]);

  useEffect(() => {
    setPageIndex(1);
  }, [dataLimit]);

  useEffect(() => {
    if (isError && pageIndex > 1) setPageIndex(pageIndex - 1);
  }, [isError, pageIndex]);

  const handlePageClick = (page) => {
    setPageIndex(page);

    if (masterMaterialStockRef && masterMaterialStockRef.current) {
      masterMaterialStockRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const oddDataMapper =
    dataMaterialStock?.status === 200
      ? dataMaterialStock?.data.filter((_, index) => {
          return index % 2 !== 1;
        })
      : '';

  const HandleShortByOrder = (order) => {
    setShort(!short);
    setOrderByName(order);
  };

  return (
    <VStack h="85vh" overflow="auto" align="stretch" py="6" spacing="3">
      <Head>
        <title>Master Material Stock | IMS</title>
      </Head>
      <Box
        px={{ base: '4', md: '4', lg: '8' }}
        bg={useColorModeValue('white', 'gray.800')}
        position="sticky"
        w="full"
        zIndex={10}
        top="-6"
      >
        <FilterMasterMaterialStock
          data={dataMaterialStock}
          setMutate={setMutate}
          isLoading={isLoadingMasterMaterialStock}
          changeMaterialNumber={setFilterMaterialNumber}
          changeMaterialDescription={setFilterMaterialDescription}
          changeMaterialStorage={setFilterMaterialStorage}
        />
        <Flex w="full" rounded="lg" p="2">
          <GridItem
            onClick={() =>
              HandleShortByOrder('transaksi_material_stock_material')
            }
            cursor="pointer"
            textAlign="center"
            alignSelf="center"
            w={{ base: 'full', md: '20%' }}
          >
            <HStack justify="center">
              <Text fontWeight="semibold" fontSize={{ base: 'md', md: 'sm' }}>
                MATERIAL
              </Text>
            </HStack>
          </GridItem>
          <GridItem
            onClick={() =>
              HandleShortByOrder('transaksi_material_stock_special_stock_number')
            }
            cursor="pointer"
            textAlign="center"
            alignSelf="center"
            w={{ base: 'full', md: '15%' }}
          >
            <HStack justify="center">
              <Text fontWeight="semibold" fontSize={{ base: 'md', md: 'sm' }}>
                SPECIAL STOCK
              </Text>
            </HStack>
          </GridItem>
          <GridItem
            display={{ base: 'none', md: 'block' }}
            textAlign="center"
            w="65%"
          >
            <Flex h="full" direction="column" justifyContent="center">
              <Text
                display={{ base: 'none', md: 'block' }}
                fontWeight="semibold"
                size="title-card"
              >
                STOCK
              </Text>
              <SimpleGrid columns={5} borderTopWidth="2px" pt="1">
                <Text
                  onClick={() => HandleShortByOrder('unrestricted')}
                  cursor="pointer"
                  fontWeight="semibold"
                  alignSelf="center"
                  size="title-card"
                >
                  STORAGE
                </Text>
                <Text
                  onClick={() => HandleShortByOrder('unrestricted')}
                  cursor="pointer"
                  fontWeight="semibold"
                  alignSelf="center"
                  size="title-card"
                >
                  UNRESTRICTED USE
                </Text>
                <Text
                  onClick={() => HandleShortByOrder('quality_insp')}
                  cursor="pointer"
                  fontWeight="semibold"
                  alignSelf="center"
                  size="title-card"
                >
                  INSPECTION
                </Text>
                <Text
                  onClick={() => HandleShortByOrder('hold_gi')}
                  cursor="pointer"
                  fontWeight="semibold"
                  alignSelf="center"
                  size="title-card"
                >
                  HOLD OUT
                </Text>
                <Text
                  onClick={() => HandleShortByOrder('hold_gr')}
                  cursor="pointer"
                  fontWeight="semibold"
                  alignSelf="center"
                  size="title-card"
                >
                  HOLD IN
                </Text>
              </SimpleGrid>
            </Flex>
          </GridItem>
        </Flex>
      </Box>
      <Box as="span" w="full" h="1px" ref={masterMaterialStockRef}></Box>
      {dataMaterialStock?.status === 400
        ? ''
        : dataMaterialStock?.data.map((item, index) => (
            <TableCardMasterMaterialStock
              key={index}
              item={item}
              odds={oddDataMapper}
            />
          ))}
      {isError && <MessageNotFoundData />}
      {isLoadingMasterMaterialStock && <PageLoadingScreen />}
      {dataMaterialStock?.status === 400 && <ModalExpiredToken />}
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
        {dataMaterialStock?.status === 400 ? (
          ''
        ) : (
          <DashboardPagination
            current={pageIndex}
            total={
              dataMaterialStock ? dataMaterialStock.pagination.total_pages : 0
            }
            onPageClick={handlePageClick}
          />
        )}
      </Flex>
    </VStack>
  );
};

TransactionMaterialStock.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export const getServerSideProps = getServerSidePropsWithAuth;

export default TransactionMaterialStock;
