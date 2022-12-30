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
import TableCardMaterialDocument from '../components/Table/TableCardMaterialDocument';
import FilterMaterialDocument from '../components/filter/filterMaterialDocument';
import useRemoteMaterialDocument from '../components/hooks/remote/useRemoteMaterialDocument';

const MaterialDocument = () => {
  const MaterialDocumentPO = useRef(null);

  const showEntryOptions = useMemo(() => generateEntryOptions(), []);
  const [dataLimit, setDataLimit] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const [mutate, setMutate] = useState();

  const {
    data: DataMaterialDocumentPO,
    isLoading: isLoadingRevationProduction,
    isError,
  } = useRemoteMaterialDocument({
    nameQuery: 'material-document-list',
    pageLimit: dataLimit,
    pageIndex: pageIndex,
    mutateFTP: mutate,
  });

  useEffect(() => {
    setPageIndex(1);
  }, [dataLimit]);

  useEffect(() => {
    if (pageIndex > 1) setPageIndex(pageIndex - 1);
  }, [pageIndex]);

  const handlePageClick = (page) => {
    setPageIndex(page);

    if (MaterialDocumentPO && MaterialDocumentPO.current) {
      MaterialDocumentPO.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const oddDataMapper =
    DataMaterialDocumentPO?.status === 200
      ? DataMaterialDocumentPO?.data.filter((_, index) => {
          return index % 2 !== 1;
        })
      : '';

  return (
    <VStack h="85vh" overflow="auto" align="stretch" py="6" spacing="3">
      <Head>
        <title>Material Document | IMS</title>
      </Head>
      {DataMaterialDocumentPO?.status === 400 ? (
        ''
      ) : (
        <Box
          px={{ base: '4', md: '4', lg: '8' }}
          bg={useColorModeValue('white', 'gray.800')}
          position="sticky"
          zIndex={10}
          top="-6"
        >
          <FilterMaterialDocument
            setMutate={setMutate}
            data={DataMaterialDocumentPO}
            isLoading={isLoadingRevationProduction}
          />
          <Flex w="full" rounded="lg" p="2">
            <GridItem
              cursor="pointer"
              textAlign="center"
              alignSelf="center"
              w={{ base: 'full', md: '25%' }}
            >
              <Flex h="full" direction="column" justifyContent="center">
                <Text fontWeight="semibold" fontSize="small">
                  NO MATERIAL DOCUMENT
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              cursor="pointer"
              textAlign="center"
              alignSelf="center"
              display={{ base: 'none', md: 'block' }}
              w={{ base: 'full', md: '75%' }}
            >
              <Flex h="full" direction="column">
                <Text fontWeight="semibold" fontSize="small">
                  DETAIL
                </Text>
                <Flex w="full" direction="row" borderTopWidth={1} p="1">
                  <Flex w="40%" direction="column" justifyContent="center">
                    <Text fontWeight="semibold" fontSize="small">
                      MATERIAL
                    </Text>
                    <Text fontWeight="semibold" fontSize="small">
                      DESCRIPTION
                    </Text>
                  </Flex>
                  <Flex w="15%" direction="column" justifyContent="center">
                    <Text fontWeight="semibold" fontSize="small">
                      QTY
                    </Text>
                  </Flex>
                  <Flex w="15%" direction="column" justifyContent="center">
                    <Text fontWeight="semibold" fontSize="small">
                      UoM
                    </Text>
                  </Flex>
                  <Flex w="15%" direction="column" justifyContent="center">
                    <Text fontWeight="semibold" fontSize="small">
                      SLOC
                    </Text>
                  </Flex>
                  <Flex w="15%" direction="column" justifyContent="center">
                    <Text fontWeight="semibold" fontSize="small">
                      MOVEMENT TYPE
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
          </Flex>
        </Box>
      )}
      <Box as="span" w="full" h="1px" ref={MaterialDocumentPO}></Box>
      {DataMaterialDocumentPO?.data.map((item, index) => (
        <TableCardMaterialDocument
          index={index}
          item={item}
          odds={oddDataMapper}
        />
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
MaterialDocument.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export const getServerSideProps = getServerSidePropsWithAuth;
export default MaterialDocument;
