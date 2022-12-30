import React from 'react';
import {
  Box,
  Collapse,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { ViChevronBack, ViChevronForward } from '../../core/icons';

const DashboardSidebarItem = ({ item, pathname }) => {
  const isActive = item.sub
    ? item.sub.some((subItem) => subItem.path === pathname)
    : item.path === pathname;

  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: isActive });

  if (item.sub)
    return (
      <React.Fragment>
        <Flex
          align="stretch"
          alignItems="center"
          borderLeftColor={isActive ? 'ims-primary-new' : 'transparent'}
          borderLeftWidth={4}
          p="3"
          bg={
            isActive
              ? useColorModeValue('ims-transparent', 'gray.700')
              : undefined
          }
          color={isActive ? 'ims-primary-new' : 'grey'}
          onClick={onToggle}
          cursor="pointer"
          transitionProperty="common"
          transitionDuration="normal"
        >
          <Box ml="2" mr="4" color={isActive ? 'ims-primary-new' : 'grey'}>
            <Icon as={item.icon} />
          </Box>
          <Text fontSize="md">{item.name}</Text>
          <Box ml="auto" color={useColorModeValue('gray', 'white')}>
            {isOpen ? <ViChevronBack /> : <ViChevronForward />}
          </Box>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          {item.sub.map((subItem) => (
            <NextLink href={subItem.path} key={subItem.path} passHref>
              <Text
                as="a"
                display="block"
                p="2"
                bg={
                  isActive
                    ? useColorModeValue('ims-transparent', 'gray.700')
                    : undefined
                }
                color={subItem.path === pathname ? 'white' : 'grey'}
                bgColor={subItem.path === pathname && 'ims-primary-new'}
                pl="14"
                transitionProperty="common"
                transitionDuration="normal"
                _hover={{
                  bg: 'ims-primary-new',
                  color: 'white',
                }}
              >
                {subItem.name}
              </Text>
            </NextLink>
          ))}
        </Collapse>
      </React.Fragment>
    );
  return (
    <React.Fragment>
      <NextLink href={item.path} passHref>
        <Flex
          as="a"
          align="stretch"
          alignItems="center"
          borderLeftColor={
            isActive
              ? useColorModeValue('ims-primary-new', 'blue.700')
              : 'transparent'
          }
          borderLeftWidth={4}
          p="3"
          bg={
            isActive
              ? useColorModeValue('ims-transparent', 'ims-primary-new')
              : undefined
          }
          color={
            isActive ? useColorModeValue('ims-primary-new', 'white') : 'grey'
          }
          transitionProperty="common"
          transitionDuration="normal"
        >
          <Box
            ml="2"
            mr="4"
            color={
              isActive ? useColorModeValue('ims-primary-new', 'white') : 'grey'
            }
          >
            <Icon as={item.icon} />
          </Box>
          <Text fontSize="md">{item.name}</Text>
        </Flex>
      </NextLink>
    </React.Fragment>
  );
};

export default DashboardSidebarItem;
