import { HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const ManagementMenuSettings = () => {
  return (
    <VStack align="stretch" py="6" px="4" spacing="6">
      <Head>
        <title>Authorization Menu | IMS</title>
      </Head>
      <HStack borderBottomWidth="1px" pb="6">
        <Text fontWeight="semibold" color="ims-primary" size="title-medium">
          Manage Authorization Menu
        </Text>
        <Spacer />
      </HStack>
      <HStack>
        <Text>Role</Text>
      </HStack>
    </VStack>
  );
};

ManagementMenuSettings.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default ManagementMenuSettings;
