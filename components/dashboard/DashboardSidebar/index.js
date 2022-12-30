import { Box, Center, Flex, Link, useColorModeValue } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { useDashboard } from '../../../context/dashboard/DashboardProvider';
import PindadLogo from '../../core/pindadlogo';
import DashboardSidebarItem from '../DashboardSidebarItem';

const DynamicSidebarMobileDrawer = dynamic(() =>
  import('../DashboardSidebarMobile')
);

const DashboardSidebar = ({ items }) => {
  const { pathname } = useRouter();
  const { isDesktopSidebarOpened } = useDashboard();

  return (
    <Box
      as="aside"
      bg={useColorModeValue('white', 'gray.800')}
      minW={isDesktopSidebarOpened ? 'xs' : '0'}
      width={isDesktopSidebarOpened ? 'xs' : '0'}
      display={{ base: 'none', xl: 'block' }}
      transitionProperty="min-width, width"
      transitionDuration="ultra-slow"
      borderRightWidth={isDesktopSidebarOpened ? '1px' : undefined}
      overflow="hidden"
    >
      <Box
        minW="xs"
        py="6"
        h="100vh"
        overflow="hidden"
        _hover={{ overflow: 'auto' }}
      >
        <Center>
          <NextLink href="/" passHref>
            <Link display="inline-block" outline="none">
              <PindadLogo multiplySize={1} />
            </Link>
          </NextLink>
        </Center>
        <Flex as="nav" flexDirection="column" align="stretch" mt="12">
          {items.map((item, index) => (
            <DashboardSidebarItem key={index} item={item} pathname={pathname} />
          ))}
        </Flex>
      </Box>
      <DynamicSidebarMobileDrawer items={items} />
    </Box>
  );
};

export default DashboardSidebar;
