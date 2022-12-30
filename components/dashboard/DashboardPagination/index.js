import React from 'react';
import { Box, Icon, Flex, useColorModeValue } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ReactPaginate from 'react-paginate';

const DashboardPagination = ({ current, total, onPageClick }) => {
  return (
    <Flex justifyContent="center" alignItems="center" py="2">
      <Box
        sx={{
          '.pg-container': {
            listStyle: 'none',
            display: 'flex',
            gap: '5px',
          },
          '.pg-item': {
            width: { base: 'full', md: '47px' },
            height: { base: '30px', md: '35px', xl: '40px' },
            lineHeight: '0',
            fontSize: { base: '10px', xl: 'sm' },
            display: 'flex',
            padding: { base: '1.5' },
            color: useColorModeValue('blue.700', 'white'),
            bg: useColorModeValue('background-primary', 'gray.700'),
            justifyContent: 'center',
            alignItems: 'center',
            rounded: { base: '3px', xl: 'md' },
            fontFamily: 'button',
            _hover: { bg: 'ims-primary-new', color: 'white' },
            userSelect: 'none',
            transitionProperty: 'common',
            transitionDuration: 'normal',
          },
          '.pg-item-active': {
            color: 'white',
            bg: 'ims-primary-new',
          },
          '.pg-item-disabled': {
            color: 'grey',
            bg: useColorModeValue('background-primary', 'gray.600'),
            cursor: 'not-allowed',
          },
          '.pg-break': {
            py: '3',
          },
        }}
      >
        <ReactPaginate
          breakLabel="..."
          pageRangeDisplayed={1}
          pageCount={total}
          nextLabel={<Icon as={FiChevronRight} fontSize="md" />}
          previousLabel={<Icon as={FiChevronLeft} fontSize="md" />}
          renderOnZeroPageCount={null}
          containerClassName="pg-container"
          previousLinkClassName="pg-item"
          nextLinkClassName="pg-item"
          pageLinkClassName="pg-item"
          activeLinkClassName="pg-item-active"
          disabledLinkClassName="pg-item-disabled"
          breakClassName="pg-break"
          onPageChange={(page) => onPageClick(page.selected + 1)}
          forcePage={current - 1}
        />
      </Box>
    </Flex>
  );
};

export default DashboardPagination;
