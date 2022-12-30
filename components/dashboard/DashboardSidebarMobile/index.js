import { useEffect } from 'react';

import {
  Box,
  Center,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { useDashboard } from '../../../context/dashboard/DashboardProvider';
import DashboardSidebarItem from '../DashboardSidebarItem';
import PindadLogo from '../../core/pindadlogo';

const DashboardSidebarMobile = ({ items }) => {
  const { pathname } = useRouter();
  const { isMobileSidebarOpened, onSidebarToggle } = useDashboard();

  const bgColor = useColorModeValue('white', 'black');

  useEffect(() => {
    if (isMobileSidebarOpened) onSidebarToggle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      isOpen={isMobileSidebarOpened}
      onClose={onSidebarToggle}
      placement="left"
    >
      <DrawerOverlay />
      <DrawerContent>
        <Box py="6" h="100vh" overflow="auto" bg={bgColor}>
          <Center>
            <PindadLogo multiplySize={0.8} />
          </Center>
          <Flex as="nav" flexDirection="column" align="stretch" mt="12">
            {items.map((item, index) => (
              <DashboardSidebarItem
                key={index}
                item={item}
                pathname={pathname}
              />
            ))}
          </Flex>
        </Box>
      </DrawerContent>
    </Drawer>
  );
};

export default DashboardSidebarMobile;
