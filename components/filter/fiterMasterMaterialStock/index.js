import { useState } from 'react';

import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  IconButton,
  Modal,
  ModalContent,
  ModalOverlay,
  SlideFade,
  Spinner,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';

import IconFTP from '../../../assets/icons/png/Download-FTP.png';
import SelectFilter from '../../core/select-filter';
import ExportFileXLSX from '../../../utils/download/ExportFileXLSX';
import { HiOutlineFilter } from 'react-icons/hi';
import GetFTPMaterialStock from '../../../utils/FormFTP/FTPMaterialStock';
import { CgSoftwareDownload } from 'react-icons/cg';
import useOptionDataMatStockNumber from '../../hooks/remote/useOptionDataMatStockNumber';
import useOptionDataMatStockDescription from '../../hooks/remote/useOptionDataMatStockDescription';
import useOptionDataMatStockStorage from '../../hooks/remote/useOptionDataMatStockStorage';
import { ModalDownloadMasterMaterialStock } from '../../modalDownload/ModalDowloadMasterMaterialStock';
import ModalLoadingFTP from '../../../utils/modals/ModalLoadingFTP';

const FilterMasterMaterialStock = ({
  data,
  isLoading,
  setMutate,
  changeMaterialNumber,
  changeMaterialDescription,
  changeMaterialStorage,
}) => {
  const NameDownloadData = 'MasterMaterialStock';
  const DataToDownload = data?.data;

  const {
    isOpen: isOpenDownload,
    onOpen: onOpenDownload,
    onClose: onCloseDownload,
  } = useDisclosure();

  const { HandleGetFormFTP, isLoadingFTP } = GetFTPMaterialStock();

  setMutate(isLoadingFTP);

  const { exportFileXLSX } = ExportFileXLSX(DataToDownload, NameDownloadData);

  const [isActiveFilter, setActiveFilter] = useState(false);

  const ButtonFIlterAction = () => {
    setActiveFilter(!isActiveFilter);

    // Disini Di non aktif saat click tutup filter bisa juga dihapus
    // changeMaterialNumber('');
    // changeMaterialDescription('');
    // changeMaterialStorage('');

    // setSearchInputMaterialNumber('');
    // setFilterMaterialNumber('');

    // setSearchInputMaterialDescription('');
    // setFilterMaterialDescription('');
  };

  //FILTER MATERIAL NUMBER - MATERIAL STOCK
  const [searchInputMaterialNumber, setSearchInputMaterialNumber] =
    useState('');
  const [filterMaterialNumber, setFilterMaterialNumber] = useState('');

  const {
    data: optionDataMaterialStockNumber,
    isSuccess: isSuccessMaterialStockNumber,
    hasNextPage: hasNextPageMaterialStockNumber,
    fetchNextPage: fetchNextPageMaterialStockNumber,
  } = useOptionDataMatStockNumber({
    mutate: isLoadingFTP,
    filterInput: searchInputMaterialNumber,
  });

  //FILTER MATERIAL DESCRIPTION - MATERIAL STOCK
  const [searchInputMaterialDescription, setSearchInputMaterialDescription] =
    useState('');
  const [filterMaterialDescription, setFilterMaterialDescription] =
    useState('');

  const {
    data: optionDataMaterialStockDescription,
    isSuccess: isSuccessMaterialStockDescription,
    hasNextPage: hasNextPageMaterialStockDescription,
    fetchNextPage: fetchNextPageMaterialStockDescription,
  } = useOptionDataMatStockDescription({
    mutate: isLoadingFTP,
    filterInput: searchInputMaterialDescription,
  });

  //FILTER MATERIAL STORAGE - MATERIAL STOCK
  const [searchInputMaterialStorage, setSearchInputMaterialStorage] =
    useState('');
  const [filterMaterialStorage, setFilterMaterialStorage] = useState('');

  const {
    data: optionDataMaterialStockStorage,
    isSuccess: isSuccessMaterialStockStorage,
    hasNextPage: hasNextPageMaterialStockStorage,
    fetchNextPage: fetchNextPageMaterialStockStorage,
  } = useOptionDataMatStockStorage({
    mutate: isLoadingFTP,
    filterInput: searchInputMaterialStorage,
  });

  return (
    <HStack
      as="div"
      py="2"
      display="flex"
      justify={{ base: 'center', md: 'start' }}
      direction={{ base: 'column', md: 'row' }}
      align="start"
    >
      <Box
        display={{ base: 'flex' }}
        w={{ base: 'full' }}
        flexDir={{ base: 'column-reverse', md: 'row' }}
      >
        <SlideFade in={isActiveFilter}>
          <Box
            w={{ base: 'full', md: '567px' }}
            display={isActiveFilter ? 'block' : 'none'}
            transitionProperty="common"
          >
            <Stack spacing="2">
              <Text pl={{ base: '2', md: 0 }} fontWeight="bold">
                FILTER
              </Text>
              <Stack spacing="2">
                <HStack>
                  <Text
                    display={{ base: 'none', md: 'block' }}
                    w="40%"
                    fontSize="sm"
                  >
                    MATERIAL NUMBER
                  </Text>
                  <Box w={{ base: 'full', md: '60%' }}>
                    <SelectFilter
                      placeholder="Search material Number"
                      data={optionDataMaterialStockNumber}
                      searchInput={searchInputMaterialNumber}
                      setSearchInput={setSearchInputMaterialNumber}
                      filter={filterMaterialNumber}
                      setFilter={setFilterMaterialNumber}
                      onChangeItem={changeMaterialNumber}
                      hasNextPage={hasNextPageMaterialStockNumber}
                      isSuccess={isSuccessMaterialStockNumber}
                      fetchNextPage={fetchNextPageMaterialStockNumber}
                    />
                  </Box>
                </HStack>
                <HStack>
                  <Text
                    display={{ base: 'none', md: 'block' }}
                    w="40%"
                    fontSize="sm"
                  >
                    MATERIAL DESCRIPTION
                  </Text>
                  <Box w={{ base: 'full', md: '60%' }}>
                    <SelectFilter
                      placeholder="Search material description"
                      data={optionDataMaterialStockDescription}
                      searchInput={searchInputMaterialDescription}
                      setSearchInput={setSearchInputMaterialDescription}
                      filter={filterMaterialDescription}
                      setFilter={setFilterMaterialDescription}
                      onChangeItem={changeMaterialDescription}
                      hasNextPage={hasNextPageMaterialStockDescription}
                      isSuccess={isSuccessMaterialStockDescription}
                      fetchNextPage={fetchNextPageMaterialStockDescription}
                    />
                  </Box>
                </HStack>
                <HStack>
                  <Text
                    display={{ base: 'none', md: 'block' }}
                    w="40%"
                    fontSize="sm"
                  >
                    STORAGE LOCATION
                  </Text>
                  <Box w={{ base: 'full', md: '60%' }}>
                    <SelectFilter
                      placeholder="Search storage location"
                      data={optionDataMaterialStockStorage}
                      searchInput={searchInputMaterialStorage}
                      setSearchInput={setSearchInputMaterialStorage}
                      filter={filterMaterialStorage}
                      setFilter={setFilterMaterialStorage}
                      onChangeItem={changeMaterialStorage}
                      hasNextPage={hasNextPageMaterialStockStorage}
                      isSuccess={isSuccessMaterialStockStorage}
                      fetchNextPage={fetchNextPageMaterialStockStorage}
                    />
                  </Box>
                </HStack>
              </Stack>
            </Stack>
          </Box>
        </SlideFade>
        <Flex w={{ md: 'full' }} justify={{ base: 'center', md: 'end' }}>
          <Tooltip label="Filter">
            <IconButton
              mr="2"
              bg={isActiveFilter === true ? 'ims-primary-new' : '#A4CDE8'}
              rounded="md"
              color="black"
              fontSize="20px"
              icon={<HiOutlineFilter />}
              onClick={ButtonFIlterAction}
              _hover={{ bg: 'ims-primary-new' }}
            />
          </Tooltip>
          {isLoadingFTP === false ? (
            <Tooltip label="GET From FTP">
              <Box
                mr="2"
                bg="#A4CDE8"
                w="40px"
                h="40px"
                cursor="pointer"
                rounded="md"
                _hover={{ bg: 'ims-primary-new' }}
                onClick={HandleGetFormFTP}
              >
                <Flex h="full" justify="center" align="center">
                  <Image
                    src={IconFTP}
                    alt="Picture of the author"
                    width="22px"
                    height="22px"
                  />
                </Flex>
              </Box>
            </Tooltip>
          ) : (
            <ModalLoadingFTP />
          )}
          {isLoading === false ? (
            <Tooltip label="Download">
              <IconButton
                variant="solid-blue"
                fontSize="20px"
                icon={<CgSoftwareDownload />}
                onClick={onOpenDownload}
              />
            </Tooltip>
          ) : (
            <Button rounded="md" bg="#A4CDE8" isLoading></Button>
          )}
        </Flex>
        <ModalDownloadMasterMaterialStock
          mutateLoadFTP={isLoadingFTP}
          filePerXLSX={exportFileXLSX}
          filePerCSV={DataToDownload}
          isOpen={isOpenDownload}
          onClose={onCloseDownload}
          isLoading={isLoading}
        />
      </Box>
    </HStack>
  );
};

export default FilterMasterMaterialStock;
