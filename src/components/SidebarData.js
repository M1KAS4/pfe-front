import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'My Products',
    path: '/my-products',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Add Product',
    path: '/add-product',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Products History',
    path: '/products-history',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
];