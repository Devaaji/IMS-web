import React from 'react';
import {
  Avatar,
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FiLogOut, FiUsers } from 'react-icons/fi';
import { useRouter } from 'next/router';
import useAxios from '../../hooks/useAxios';
import useAuthUserStore from '../../../store/useAuthUserStore';
import { useEffect } from 'react';
import { useState } from 'react';

const DashboardUserNavbar = () => {
  const { pathname } = useRouter();
  const isActiveProfile = pathname === '/profile';
  const [username, setUsername] = useState();
  const router = useRouter();

  const removeCookies = useAuthUserStore((state) => state.setLogout);

  const [, actionLogout] = useAxios(
    {
      url: '/auth/logout',
      method: 'POST',
    },
    { manual: true }
  );

  const handleLogout = () => {
    actionLogout()
      .then((res) => {
        removeCookies();
        router.push('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setUsername(useAuthUserStore.getState().username);
  }, []);
  return (
    <>
      <Menu placement="bottom-end" isLazy>
        <MenuButton aria-label="Options" bg="transparent" variant="ghost">
          <Box>
            <Avatar
              loading="lazy"
              variant="outline"
              src=""
              name={username}
              size={{ base: 'sm', md: 'md' }}
            />
          </Box>
        </MenuButton>
        <Portal>
          <MenuList zIndex={15}>
            <HStack m="3">
              <VStack alignItems="left">
                <HStack>
                  <Text fontSize="md" fontStyle="heading" fontWeight="bold">
                    Hai,
                  </Text>
                  <Text
                    size="title-small"
                    fontStyle="heading"
                    fontWeight="bold"
                  >
                    {useAuthUserStore.getState().username}
                  </Text>
                </HStack>
                <Text fontSize="sm" fontStyle="heading">
                  Divisi : Kendaraan Khusus
                </Text>
              </VStack>
            </HStack>
            <NextLink href="/profile" passHref>
              <MenuItem
                as="a"
                icon={<FiUsers />}
                bg={isActiveProfile && 'ims-button-primary'}
                color={
                  isActiveProfile
                    ? 'ims-primary'
                    : useColorModeValue('black', 'white')
                }
                _hover={isActiveProfile && { bg: 'ims-hover-primary' }}
              >
                Profil Pengguna
              </MenuItem>
            </NextLink>
            <MenuItem
              color="red"
              icon={<FiLogOut color="ims-red" />}
              onClick={handleLogout}
            >
              Keluar
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </>
  );
};

export default DashboardUserNavbar;
