import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const SelectFilter = ({
  data,
  placeholder,
  searchInput,
  setSearchInput,
  filter,
  setFilter,
  onChangeItem,
  hasNextPage,
  isSuccess,
  fetchNextPage,
}) => {
  const containerRefDropDown = useRef(false);
  const observerElem = useRef(null);

  const [isOpenDropDown, setIsOpenDrowpDown] = useState(false);

  const handleObserver = useCallback(
    (entries) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        if (data?.length > 6) {
          fetchNextPage();
        }
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const element = observerElem.current;
    const option = { threshold: 0 };

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [fetchNextPage, hasNextPage, handleObserver]);

  const handleButtonFilterDrop = () => {
    setIsOpenDrowpDown(!isOpenDropDown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!containerRefDropDown?.current?.contains(event.target)) {
        setIsOpenDrowpDown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, [containerRefDropDown]);

  const setFilterFromFiltersInput = () => {
    setFilter(searchInput);
  };

  const handleSubmitFilter = (e) => {
    e.preventDefault();
    setFilterFromFiltersInput();
  };

  const clickFilterSelect = (e) => {
    setSearchInput(e);
    setIsOpenDrowpDown(false);
    setFilter(e);
  };

  const NullDataInput = () => {
    onChangeItem(filter);
    if (searchInput === '') {
      onChangeItem('');
      setFilter('');
    }
  };

  useEffect(() => {
    NullDataInput();
  });

  return (
    <Box ref={containerRefDropDown} position="relative" w="full">
      <InputGroup
        as="form"
        onClick={handleButtonFilterDrop}
        onSubmit={handleSubmitFilter}
      >
        <Input
          value={searchInput}
          placeholder={placeholder}
          onKeyDown={() => setIsOpenDrowpDown(true)}
          onChange={(e) => setSearchInput(e.target.value)}
          size="sm"
        />
        <InputRightElement
          pointerEvents="none"
          h="full"
          children={<BiChevronDown color="gray" />}
        />
      </InputGroup>
      <Box
        display={isOpenDropDown ? 'block' : 'none'}
        bg={useColorModeValue('white', 'gray.800')}
        position="absolute"
        mt="1"
        w="full"
        rounded="sm"
        zIndex={999}
        borderWidth={data?.length === 0 ? 0 : 1}
      >
        <Box
          overflow="auto"
          h={data?.length > 6 ? '180px' : 'max'}
          display={data?.length === 0 ? 'none' : 'block'}
        >
          {isSuccess &&
            data?.map((item) => (
              <Box>
                <Text
                  px="2"
                  cursor="default"
                  py="1"
                  onClick={() => clickFilterSelect(item.value)}
                  fontSize="sm"
                  _hover={{ bg: useColorModeValue('#F0F7FF', 'gray.700') }}
                >
                  {item.value}
                </Text>
              </Box>
            ))}
          <Box as="span" w="full" textAlign="center" ref={observerElem}></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectFilter;
