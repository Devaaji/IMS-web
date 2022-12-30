import React, { useState, useEffect, useRef, useMemo } from 'react';
import Head from 'next/head';

import { Box, Flex, HStack, Spacer, Text, VStack } from '@chakra-ui/react';

import PageLoadingScreen from '../components/core/pageLoadingScreen';
import Select from '../components/core/select';
import { generateEntryOptions } from '../components/core/select/helper/entryOptions';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import DashboardPagination from '../components/dashboard/DashboardPagination';
import FilterPOHeader from '../components/filter/filterPOHeader';
import useRemotePOHeader from '../components/hooks/remote/useRemotePOHeader';
import TableCardPOHeader from '../components/Table/TableCardPOHeader';
import { getServerSidePropsWithAuth } from '../utils/getServerSidePropsWithAuth';
import MessageNotFoundData from '../utils/error/MessageNotFoundData';

const PurchaseOrderHeader = () => {
  const showEntryOptions = useMemo(() => generateEntryOptions(), []);

  const [dataLimit, setDataLimit] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const poHeaderRef = useRef(null);

  const {
    data: dataPOHeader,
    isLoading: isLoadingPOHeader,
    isError,
  } = useRemotePOHeader('po-header-list', dataLimit, pageIndex);

  useEffect(() => {
    setPageIndex(1);
  }, [dataLimit]);

  useEffect(() => {
    if (isError && pageIndex > 1) setPageIndex(pageIndex - 1);
  }, [isError, pageIndex]);

  const handlePageClick = (page) => {
    setPageIndex(page);

    if (poHeaderRef && poHeaderRef.current) {
      poHeaderRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <VStack
      align="stretch"
      py="6"
      px={{ base: '4', md: '4', lg: '8' }}
      spacing="6"
      ref={poHeaderRef}
    >
      <Head>
        <title>Purchase Order Header | IMS</title>
      </Head>
      <HStack borderBottomWidth="1px" pb="6">
        <Text fontWeight="semibold" color="ims-primary" size="title-medium">
          Purchase Order Header
        </Text>
        <Spacer />
      </HStack>
      <FilterPOHeader data={dataPOHeader} isLoading={isLoadingPOHeader} />
      {dataPOHeader?.data.map((item, index) => (
        <TableCardPOHeader key={index} item={item} />
      ))}
      {isError && <MessageNotFoundData />}
      {isLoadingPOHeader && <PageLoadingScreen />}
      <Flex
        flexDir={{ base: 'column', md: 'row', xl: 'row' }}
        justifyContent="space-between"
        borderTopWidth="1px"
        alignItems="center"
        py="2"
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
          total={dataPOHeader ? dataPOHeader.pagination.total_pages : 0}
          onPageClick={handlePageClick}
        />
      </Flex>
    </VStack>
  );
};

PurchaseOrderHeader.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export const getServerSideProps = getServerSidePropsWithAuth;

export default PurchaseOrderHeader;
