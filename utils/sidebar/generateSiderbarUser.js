import { BiHome, BiPurchaseTagAlt } from 'react-icons/bi';
import { AiOutlineSchedule } from 'react-icons/ai';
import { FiBox, FiSettings } from 'react-icons/fi';
import { MdTableView } from 'react-icons/md';

function generateSidebarItemsUser() {
  return [
    { name: 'Dashboard', path: '/', icon: BiHome },
    { name: 'Master Material', path: '/master-material', icon: MdTableView },
    {
      name: 'Material Stock',
      path: '/',
      icon: FiBox,
      sub: [
        {
          name: 'Master Material Stock',
          path: '/master-material-stock',
        },
        {
          name: 'Master Material Batch',
          path: '/material-batch',
        },
        {
          name: 'Master Material Valuation',
          path: '/material-valuation',
        },
        {
          name: 'Master Vendor',
          path: '/material-vendor',
        },
      ],
    },
    {
      name: 'Purchase Order',
      path: '/',
      icon: BiPurchaseTagAlt,
      sub: [
        {
          name: 'PO Header',
          path: '/po-header',
        },
        {
          name: 'PO Item',
          path: '/po-item',
        },
        {
          name: 'PO Component',
          path: '/po-component',
        },
        {
          name: 'PO Assignment',
          path: '/po-assignment',
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

export default generateSidebarItemsUser;
