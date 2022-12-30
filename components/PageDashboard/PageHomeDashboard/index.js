import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import DasboardCardMeta from '../../dashboard/DashboardCardMeta';
import LineChartDasboard from '../../Chart/lineChartDashboard';
import PieChartDashboard from '../../Chart/pieChartDashboard';

import { FiActivity, FiBook, FiFileText, FiRepeat } from 'react-icons/fi';

const PageHomeDashboard = () => {
  return (
    <>
      <SimpleGrid as="section" columns={{ base: 2, md: 4 }} gap="4">
        <DasboardCardMeta icon={FiActivity} metaName="New Items">
          1234
        </DasboardCardMeta>
        <DasboardCardMeta icon={FiBook} metaName="Growth">
          435
        </DasboardCardMeta>
        <DasboardCardMeta icon={FiRepeat} metaName="In Out Items">
          6753
        </DasboardCardMeta>
        <DasboardCardMeta icon={FiFileText} metaName="Data Items">
          19865
        </DasboardCardMeta>
      </SimpleGrid>
      <Box
        display="flex"
        flexDir={{ base: 'column', md: 'row' }}
        align="stretch"
      >
        <PieChartDashboard />
        <LineChartDasboard />
      </Box>
    </>
  );
};

export default PageHomeDashboard;
