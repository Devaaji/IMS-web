import { FiCreditCard } from 'react-icons/fi';
import { FaRegChartBar, FaRegFile } from 'react-icons/fa';

function generateSidebarItemsAdmin() {
  return [
    { name: 'Dashboard', path: '/', icon: FaRegChartBar },
    {
      name: 'Report Material',
      path: '/',
      icon: FiCreditCard,
      sub: [
        {
          name: 'Material Stock',
          path: '/material-stock',
        },
        {
          name: 'Material List',
          path: '/material-list',
        },
        // {
        //   name: 'Material Batch',
        //   path: '/material-batch',
        // },
        // {
        //   name: 'Material Valuation',
        //   path: '/material-valuation',
        // },
        // {
        //   name: 'Material Vendor',
        //   path: '/material-vendor',
        // },
      ],
    },
    // {
    //   name: 'Purchase Order',
    //   path: '/',
    //   icon: BiPurchaseTagAlt,
    //   sub: [
    //     {
    //       name: 'PO Header',
    //       path: '/po-header',
    //     },
    //     {
    //       name: 'PO Item',
    //       path: '/po-item',
    //     },
    //     {
    //       name: 'PO Component',
    //       path: '/po-component',
    //     },
    //     {
    //       name: 'PO Assignment',
    //       path: '/po-assignment',
    //     },
    //   ],
    // },
    {
      name: 'Production Planning',
      path: '/',
      icon: FaRegFile,
      sub: [
        {
          name: 'Production Order',
          path: '/production-order',
        },
        {
          name: 'Material Document',
          path: '/material-document',
        },
        {
          name: 'Reservation',
          path: '/reservation',
        },
      ],
    },
    // {
    //   name: 'Tools Book',
    //   path: '/tools-book',
    //   icon: FaToolbox,
    // },
    // {
    //   name: 'Pengaturan',
    //   path: '/',
    //   icon: FiSettings,
    //   sub: [
    //     {
    //       name: 'Management Menu',
    //       path: '/menu-settings',
    //     },
    //     {
    //       name: 'Pengaturan Sistem',
    //       path: '/system-settings',
    //     },
    //   ],
    // },
  ];
}

export default generateSidebarItemsAdmin;
