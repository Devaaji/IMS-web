import React from 'react';
import {
  Box,
  Center,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { useDashboard } from '../../../context/dashboard/DashboardProvider';
import DashboardUserNavbar from '../DashboardUserNavbar';
import DashboardNotifications from '../DashboardNotifications';
import PindadLogo from '../../core/pindadlogo';
import DashboardMessage from '../DashboardMessage';
import IMSLogo from '../../core/imslogo';
import { HiMoon, HiOutlineSun, HiSun } from 'react-icons/hi';

const DashboardNavbar = () => {
  const { isDesktopSidebarOpened, onSidebarToggle } = useDashboard();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      p="4"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      alignItems={{
        base: 'stretch',
        md: isDesktopSidebarOpened ? 'stretch' : 'center',
        lg: 'center',
      }}
      direction={{
        base: 'column',
        md: isDesktopSidebarOpened ? 'column' : 'row',
        lg: 'row',
      }}
    >
      <HStack w="full">
        <Flex w="full">
          <Flex alignItems="center">
            <IconButton
              icon={<FiMenu />}
              variant="ghost"
              onClick={onSidebarToggle}
              aria-label="Menu"
            />
          </Flex>
          <Box ml="4" display={{ base: 'none', md: 'none', xl: 'block' }}>
            <HStack>
              <IMSLogo multiplySize={1} />
              <Flex direction="column">
                <Box fontWeight="bold" fontSize="xl" color="orange.400">
                  IMS
                </Box>
                <Box
                  fontWeight="semibold"
                  color={useColorModeValue('gray', 'white')}
                >
                  Inventory Monitoring System
                </Box>
              </Flex>
            </HStack>
          </Box>
          <Spacer />
          <Box display={{ base: 'block', md: 'block', xl: 'none' }}>
            <PindadLogo multiplySize={0.5} />
          </Box>
          <Spacer />
          <HStack spacing={3}>
            <DashboardMessage />
            <DashboardNotifications />
            <Box onClick={toggleColorMode}>
              <IconButton
                variant="ghost"
                fontSize="xl"
                rounded="full"
                color="gray"
                icon={colorMode === 'light' ? <HiSun /> : <HiMoon color='yellow' />}
                aria-label="Notifications"
              />
            </Box>
            <DashboardUserNavbar />
          </HStack>
        </Flex>
      </HStack>
    </Stack>
  );
};

export default DashboardNavbar;
