import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Box, Flex, Skeleton, Text, useColorModeValue } from '@chakra-ui/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const isLoading = false;

const LineChartDasboard = () => {
  return (
    <>
      <Flex h="full" direction="column" w={{ base: '100%', md: '69%' }}>
        <Text
          ml={{ md: '10px', base: '0px' }}
          py="2"
          color={useColorModeValue("ims-primary", 'white')}
          fontWeight="semibold"
          fontSize="xl"
        >
          Gambaran Perkembangan Data
        </Text>
        <Box
          rounded="md"
          ml={{ md: '10px', base: '0px' }}
          mt={{ base: '10px', md: '0px' }}
          boxShadow="xl"
          bg={useColorModeValue('white', 'gray.200')}
          p={{ md: '20px', base: '10px' }}
          w={{ base: 'full', md: 'full' }}
        >
          {isLoading ? (
            <>
              <Skeleton w="full" h={{ base: '150px', md: '200px' }} />
            </>
          ) : (
            <>
              <Line options={options} data={data} />
            </>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default LineChartDasboard;
