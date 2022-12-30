import React from 'react';
import Head from 'next/head';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import {
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import PageHomeDashboard from '../components/PageDashboard/PageHomeDashboard';
import { getServerSidePropsWithAuth } from '../utils/getServerSidePropsWithAuth';

const Home = () => {
  return (
    <React.Fragment>
      <VStack align="stretch" py="6" px="4" spacing="6">
        <Head>
          <title>Dashboard | IMS</title>
        </Head>
        <PageHomeDashboard />
        <TableContainer rounded="md" overflowX="auto" bg="white" boxShadow="xl">
          <Table variant="outline">
            <Thead bg="blue.300">
              <Tr>
                <Th _hover={{ bg: 'gray.400' }}>To convert</Th>
                <Th _hover={{ bg: 'gray.400' }}>into</Th>
                <Th _hover={{ bg: 'gray.400' }}>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody bg={useColorModeValue('white', 'gray.800')}>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </React.Fragment>
  );
};

const admin = 'admin';

Home.getLayout = (page) => (
  <DashboardLayout sidebarFor={admin}>{page}</DashboardLayout>
);

export const getServerSideProps = async (context) =>
  getServerSidePropsWithAuth(context);

export default Home;
