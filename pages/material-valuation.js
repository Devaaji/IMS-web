import React, { useState, useRef, useEffect, useMemo } from 'react';
import Head from 'next/head';

import { Box, Flex, HStack, Spacer, Text, VStack } from '@chakra-ui/react';

import PageLoadingScreen from '../components/core/pageLoadingScreen';
import Select from '../components/core/select';
import { generateEntryOptions } from '../components/core/select/helper/entryOptions';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import DashboardPagination from '../components/dashboard/DashboardPagination';
import useRemoteMasterMaterialValuation from '../components/hooks/remote/useRemoteMasterMaterialValuation';
import TableCardMaterialValuation from '../components/Table/TableCardMaterialValuation';
import { getServerSidePropsWithAuth } from '../utils/getServerSidePropsWithAuth';
import FilterMasterMaterialValuation from '../components/filter/filterMasterMaterialValuation';
import MessageNotFoundData from '../utils/error/MessageNotFoundData';

const MasterMaterialValuation = () => {
  const showEntryOptions = useMemo(() => generateEntryOptions(), []);

  const [dataLimit, setDataLimit] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const masterMaterialValuationRef = useRef(null);

  const {
    data: dataMaterialValuation,
    isLoading: isLoadingMaterialValuation,
    isError,
  } = useRemoteMasterMaterialValuation(
    'material-valuation-list',
    dataLimit,
    pageIndex
  );

  useEffect(() => {
    setPageIndex(1);
  }, [dataLimit]);

  useEffect(() => {
    if (isError && pageIndex > 1) setPageIndex(pageIndex - 1);
  }, [isError, pageIndex]);

  const handlePageClick = (page) => {
    setPageIndex(page);

    if (masterMaterialValuationRef && masterMaterialValuationRef.current) {
      masterMaterialValuationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <VStack
      align="stretch"
      py="6"
      px={{ base: '4', md: '4', lg: '8' }}
      spacing="6"
      ref={masterMaterialValuationRef}
    >
      <Head>
        <title>Master Material Valuation | IMS</title>
      </Head>
      <HStack borderBottomWidth="1px" pb="6">
        <Text fontWeight="semibold" color="ims-primary" size="title-medium">
          Master Material Valuation
        </Text>
        <Spacer />
      </HStack>
      <FilterMasterMaterialValuation
        data={dataMaterialValuation}
        isLoading={isLoadingMaterialValuation}
      />
      {dataMaterialValuation?.data.map((item, index) => (
        <TableCardMaterialValuation key={index} item={item} />
      ))}
      {isError && <MessageNotFoundData />}
      {isLoadingMaterialValuation && <PageLoadingScreen />}
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
          total={
            dataMaterialValuation
              ? dataMaterialValuation.pagination.total_pages
              : 1
          }
          onPageClick={handlePageClick}
        />
      </Flex>
    </VStack>
  );
};

MasterMaterialValuation.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export const getServerSideProps = getServerSidePropsWithAuth;

export default MasterMaterialValuation;
