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

import PageLoadingScreen from '../components/core/pageLoadingScreen';
import Select from '../components/core/select';
import { generateEntryOptions } from '../components/core/select/helper/entryOptions';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import DashboardPagination from '../components/dashboard/DashboardPagination';
import FilterMaterialMaster from '../components/filter/filterMasterMaterial';
import useRemoteMasterMaterial from '../components/hooks/remote/useRemoteMasterMaterial';
import TableCardMasterMaterial from '../components/Table/TableCardMasterMaterial';
import { getServerSidePropsWithAuth } from '../utils/getServerSidePropsWithAuth';
import MessageNotFoundData from '../utils/error/MessageNotFoundData';
import { ModalExpiredToken } from '../utils/modals/ModalExpiredToken';

const MasterMaterial = () => {
  const masterMaterialRef = useRef(null);

  const showEntryOptions = useMemo(() => generateEntryOptions(), []);
  const [dataLimit, setDataLimit] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const [short, setShort] = useState();
  const [orderName, setOrderName] = useState();
  const [mutate, setMutate] = useState();

  const [filterMaterialCode, setFilterMaterialCode] = useState('');
  const [filterMaterialDescription, setFilterMaterialDescription] =
    useState('');
  const [filterMaterialGroup, setFilterMaterialGroup] = useState('');

  const {
    data: dataMasterMaterial,
    isLoading: isLoadingMasterMaterial,
    isError,
  } = useRemoteMasterMaterial({
    nameQuery: 'master-material-list',
    pageLimit: dataLimit,
    pageIndex: pageIndex,
    short: short,
    order: orderName,
    materialCode: filterMaterialCode ? filterMaterialCode : '',
    description: filterMaterialDescription ? filterMaterialDescription : '',
    materialGroup: filterMaterialGroup ? filterMaterialGroup : '',
    mutateFTP: mutate,
  });

  useEffect(() => {
    setPageIndex(1);
  }, [filterMaterialCode, filterMaterialDescription, filterMaterialGroup]);

  useEffect(() => {
    setPageIndex(1);
  }, [dataLimit]);

  useEffect(() => {
    if (isError && pageIndex > 1) setPageIndex(pageIndex - 1);
  }, [isError, pageIndex]);

  const handlePageClick = (page) => {
    setPageIndex(page);

    if (masterMaterialRef && masterMaterialRef.current) {
      masterMaterialRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const oddDataMapper =
    dataMasterMaterial?.status === 200
      ? dataMasterMaterial?.data.filter((_, index) => {
          return index % 2 !== 1;
        })
      : '';

  return (
    <VStack h="85vh" overflow="auto" align="stretch" py="6" spacing="3">
      <Head>
        <title>Report List Material | IMS</title>
      </Head>
      {dataMasterMaterial?.status === 400 ? (
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
          <FilterMaterialMaster
            data={dataMasterMaterial}
            setMutate={setMutate}
            isLoading={isLoadingMasterMaterial}
            setDataLimit={setDataLimit}
            dataLimit={dataLimit}
            pageIndex={pageIndex}
            changeMaterialCode={setFilterMaterialCode}
            changeMaterialDescription={setFilterMaterialDescription}
            changeMaterialGroup={setFilterMaterialGroup}
          />
          <SimpleGrid
            w="full"
            bg={useColorModeValue('white', 'gray.800')}
            rounded="lg"
            py="4"
            columns={{ base: 2, md: 5 }}
            px="4"
          >
            <GridItem textAlign="center" alignSelf="center">
              <Text fontWeight="semibold" size="title-card">
                MATERIAL
              </Text>
            </GridItem>
            <GridItem textAlign="center" alignSelf="center">
              <Text fontWeight="semibold" size="title-card">
                MATERIAL TYPE
              </Text>
            </GridItem>
            <GridItem textAlign="center" alignSelf="center">
              <Text fontWeight="semibold" size="title-card">
                MATERIAL GROUP
              </Text>
            </GridItem>
            <GridItem textAlign="center" alignSelf="center">
              <Text fontWeight="semibold" size="title-card">
                UoM
              </Text>
            </GridItem>
            <GridItem textAlign="center" alignSelf="center">
              <Text fontWeight="semibold" size="title-card">
                BATCH
              </Text>
            </GridItem>
          </SimpleGrid>
        </Box>
      )}
      <Box as="span" w="full" h="1px" ref={masterMaterialRef}></Box>
      {dataMasterMaterial?.status === 400
        ? ''
        : dataMasterMaterial?.data.map((item, index) => (
            <TableCardMasterMaterial
              index={index}
              item={item}
              odds={oddDataMapper}
            />
          ))}
      {isError && <MessageNotFoundData />}
      {isLoadingMasterMaterial && <PageLoadingScreen />}
      {dataMasterMaterial?.status === 400 && <ModalExpiredToken />}
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
        {dataMasterMaterial?.status === 400 ? (
          ''
        ) : (
          <DashboardPagination
            current={pageIndex}
            total={
              dataMasterMaterial ? dataMasterMaterial.pagination.total_pages : 0
            }
            onPageClick={handlePageClick}
          />
        )}
      </Flex>
    </VStack>
  );
};

MasterMaterial.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export const getServerSideProps = getServerSidePropsWithAuth;

export default MasterMaterial;
