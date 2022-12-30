import {
  Box,
  Flex,
  HStack,
  SkeletonCircle,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartDashboard = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const isLoading = false;
  return (
    <>
      <Flex direction="column" w={{ base: '100%', md: '30%' }}>
        <Text
          py="2"
          color={useColorModeValue('ims-primary', 'white')}
          fontWeight="semibold"
          fontSize="xl"
        >
          Gambaran Umum
        </Text>
        <Box
          rounded="md"
          h="full"
          boxShadow="xl"
          w={{ base: '100%', md: 'full' }}
          bg={useColorModeValue('white', 'gray.200')}
          py="30px"
        >
          {isLoading ? (
            <>
              <Flex justify="center" align="center" h="full">
                <Stack>
                  <HStack>
                    <SkeletonCircle size={{ base: '150px', md: '170px' }} />
                  </HStack>
                </Stack>
              </Flex>
            </>
          ) : (
            <>
              <Pie data={data} />
            </>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default PieChartDashboard;
