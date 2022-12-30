import {
  Badge,
  Box,
  Flex,
  HStack,
  Skeleton,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import useAuthUserStore from '../store/useAuthUserStore';

const ProfileUserPage = () => {
  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(useAuthUserStore.getState().username);
  }, []);

  return (
    <VStack align="stretch" py="6" px="4" spacing="6">
      <Head>
        <title>Profile | IMS</title>
      </Head>
      <HStack borderBottomWidth="1px" pb="6">
        <Text fontWeight="semibold" size="title-medium">
          Public Profile
        </Text>
        <Spacer />
        {/* <Button
          type="submit"
          bg="ims-primary"
          color="white"
          _hover={{ bg: 'button-hover' }}
          fontWeight="bold"
        >
          Update Profile
        </Button> */}
      </HStack>
      <HStack>
        <Box rounded="md" w={{ base: 'full', md: '50%' }} p="23px">
          <Stack>
            <HStack mt="3" w="full">
              <Box w="160px" h="full">
                <Flex justify="space-between" align="center">
                  <Text fontWeight="semibold">Username</Text>
                  <Text>:</Text>
                </Flex>
              </Box>
              {username ? (
                <Text>{username}</Text>
              ) : (
                <Skeleton w="full" h="20px" rounded="xl" />
              )}
            </HStack>
            <HStack mt="3" w="full">
              <Box w="160px" h="full">
                <Flex justify="space-between" align="center">
                  <Text fontWeight="semibold">Status</Text>
                  <Text>:</Text>
                </Flex>
              </Box>
              <Box>
                <Badge colorScheme="green" variant="solid">
                  Active
                </Badge>
              </Box>
              {/* <Input type="text" placeholder="Nama Lengkap" /> */}
            </HStack>
            {/* <HStack mt="3" w="full">
              <Box w="250px" h="full">
                <Flex justify="space-between" align="center">
                  <Text fontWeight="semibold">Divisi</Text>
                  <Text>:</Text>
                </Flex>
              </Box>
              <Input type="text" placeholder="Divisi" />
            </HStack>
            <HStack mt="3" w="full">
              <Box w="250px" h="full">
                <Flex justify="space-between" align="center">
                  <Text fontWeight="semibold">Jabatan</Text>
                  <Text>:</Text>
                </Flex>
              </Box>
              <Input type="text" placeholder="Jabatan" />
            </HStack>
            <HStack mt="3" w="full">
              <Box w="250px" h="full">
                <Flex justify="space-between" align="center">
                  <Text fontWeight="semibold">Pangkat</Text>
                  <Text>:</Text>
                </Flex>
              </Box>
              <Input type="text" placeholder="Pangkat" />
            </HStack>
            <HStack mt="3" w="full">
              <Box w="250px" h="full">
                <Flex justify="space-between" align="center">
                  <Text fontWeight="semibold">Otoritas</Text>
                  <Text>:</Text>
                </Flex>
              </Box>
              <Input type="text" placeholder="Otoritas" />
            </HStack>
            <HStack mt="3" w="full">
              <Box w="250px" h="full">
                <Flex justify="space-between" align="center">
                  <Text fontWeight="semibold">Username</Text>
                  <Text>:</Text>
                </Flex>
              </Box>
              <Input type="text" placeholder="Otoritas" />
            </HStack>
            <HStack mt="3" w="full">
              <Box w="250px" h="full">
                <Flex justify="space-between" align="center">
                  <Text fontWeight="semibold">Email</Text>
                  <Text>:</Text>
                </Flex>
              </Box>
              <Input type="text" placeholder="Email" />
            </HStack>
            <HStack mt="3" w="full">
              <Box w="250px" h="full">
                <Flex justify="space-between" align="center">
                  <Text fontWeight="semibold">Status</Text>
                  <Text>:</Text>
                </Flex>
              </Box>
              <Input type="text" placeholder="Status" />
            </HStack> */}
          </Stack>
          <Box mt="20px" w="full" display="flex" justifyContent="end"></Box>
        </Box>
      </HStack>
    </VStack>
  );
};

ProfileUserPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default ProfileUserPage;
