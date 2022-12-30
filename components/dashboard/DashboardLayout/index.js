import { Flex } from '@chakra-ui/react';
import DashboardProvider from '../../../context/dashboard/DashboardProvider';
import generateSidebarItemsAdmin from '../../../utils/sidebar';
import generateSidebarItemsUser from '../../../utils/sidebar/generateSiderbarUser';
import DashboardMain from '../DashboardMain';
import DashboardSidebar from '../DashboardSidebar';

const DashboardLayout = ({ sidebarFor, children }) => {
  let sidebarItems = generateSidebarItemsAdmin();

  switch (sidebarFor) {
    case 'user':
      sidebarItems = generateSidebarItemsUser();
      break;
    case 'admin':
      sidebarItems = generateSidebarItemsAdmin();
      break;
    default:
      sidebarItems = generateSidebarItemsAdmin();
  }

  return (
    <Flex overflow="hidden">
      <DashboardProvider>
        <DashboardSidebar items={sidebarItems} />
        <DashboardMain>{children}</DashboardMain>
      </DashboardProvider>
    </Flex>
  );
};

export default DashboardLayout;
