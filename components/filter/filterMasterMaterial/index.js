import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  SlideFade,
  Spinner,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';

import { HiOutlineFilter } from 'react-icons/hi';

import ExportFileXLSX from '../../../utils/download/ExportFileXLSX';
import IconFTP from '../../../assets/icons/png/Download-FTP.png';
import useOptionDataMaterialDescription from '../../hooks/remote/useOptionDataMaterialDescription';
import useOptionDataMaterialGroup from '../../hooks/remote/useOptionDataMaterialGroup';
import useOptionDataMaterialNumber from '../../hooks/remote/useOptionDataMaterialNumber';
import { ModalDownloadMasterMaterial } from '../../modalDownload/ModalDownloadMasterMaterial';
import { useState } from 'react';
import { CgSoftwareDownload } from 'react-icons/cg';
import SelectFilter from '../../core/select-filter';
import GetFTPMaterialList from '../../../utils/FormFTP/FTPMaterialList';
import ModalLoadingFTP from '../../../utils/modals/ModalLoadingFTP';

const FilterMaterialMaster = ({
  data,
  isLoading,
  setMutate,
  changeMaterialCode,
  changeMaterialDescription,
  changeMaterialGroup,
}) => {
  const NameDownloadData = 'MasterMaterial';
  const DataToDownload = data?.data;
  const {
    isOpen: isOpenDownload,
    onOpen: onOpenDownload,
    onClose: onCloseDownload,
  } = useDisclosure();

  const { HandleGetFormFTP, isLoadingFTP } = GetFTPMaterialList();

  setMutate(isLoadingFTP);

  const { exportFileXLSX } = ExportFileXLSX(DataToDownload, NameDownloadData);

  const [isActiveFilter, setActiveFilter] = useState(false);

  const ButtonFIlterAction = () => {
    setActiveFilter(!isActiveFilter);


    // Disini Di non aktif saat click tutup filter bisa juga dihapus
    // changeMaterialCode('');
    // changeMaterialDescription('');
    // changeMaterialGroup('');
    // setSearchMaterialNumber('');
    // setFilterMaterialNumber('');

    // setSearchInputMaterialDescrition('');
    // setFilterMaterialDescrition('');

    // setInputSearchMaterialGroup('');
    // setFilterMaterialGroup('');
  };

  // Filter Material Number
  const [searchInputMaterialNumber, setSearchMaterialNumber] = useState('');
  const [filterMaterialNumber, setFilterMaterialNumber] = useState('');

  const {
    data: optionsDataMaterialNumber,
    isSuccess: isSuccessMaterialNumber,
    hasNextPage: hasNextPageMaterialNumber,
    fetchNextPage: fetchNextPageMaterialNumber,
  } = useOptionDataMaterialNumber({
    mutate: isLoadingFTP,
    filterInput: searchInputMaterialNumber,
  });

  //Filter Material Description
  const [searchInputMaterialDescription, setSearchInputMaterialDescrition] =
    useState('');
  const [filterMaterialDescription, setFilterMaterialDescrition] = useState('');

  const {
    data: optionsDataMaterialDescription,
    isSuccess: isSuccessMaterialDescription,
    hasNextPage: hasNextPageMaterialDescription,
    fetchNextPage: fetchNextPageMaterialDescription,
  } = useOptionDataMaterialDescription({
    mutate: isLoadingFTP,
    filterInput: searchInputMaterialDescription,
  });
  // Filter Material GROUP
  const [searchInputMaterialGroup, setInputSearchMaterialGroup] = useState('');
  const [filterMaterialGroup, setFilterMaterialGroup] = useState('');

  const {
    data: optionsDataMaterialGroup,
    isSuccess: isSuccessMaterialGroup,
    hasNextPage: hasNextPageMaterialGroup,
    fetchNextPage: fetchNextPageMaterialGroup,
  } = useOptionDataMaterialGroup({
    mutate: isLoadingFTP,
    filterInput: searchInputMaterialGroup,
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
                      data={optionsDataMaterialNumber}
                      searchInput={searchInputMaterialNumber}
                      setSearchInput={setSearchMaterialNumber}
                      filter={filterMaterialNumber}
                      setFilter={setFilterMaterialNumber}
                      onChangeItem={changeMaterialCode}
                      hasNextPage={hasNextPageMaterialNumber}
                      isSuccess={isSuccessMaterialNumber}
                      fetchNextPage={fetchNextPageMaterialNumber}
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
                      data={optionsDataMaterialDescription}
                      searchInput={searchInputMaterialDescription}
                      setSearchInput={setSearchInputMaterialDescrition}
                      filter={filterMaterialDescription}
                      setFilter={setFilterMaterialDescrition}
                      onChangeItem={changeMaterialDescription}
                      hasNextPage={hasNextPageMaterialDescription}
                      isSuccess={isSuccessMaterialDescription}
                      fetchNextPage={fetchNextPageMaterialDescription}
                    />
                  </Box>
                </HStack>
                <HStack>
                  <Text
                    display={{ base: 'none', md: 'block' }}
                    w="40%"
                    fontSize="sm"
                  >
                    MATERIAL GROUP
                  </Text>
                  <Box w={{ base: 'full', md: '60%' }}>
                    <SelectFilter
                      placeholder="Search material group"
                      data={optionsDataMaterialGroup}
                      searchInput={searchInputMaterialGroup}
                      setSearchInput={setInputSearchMaterialGroup}
                      filter={filterMaterialGroup}
                      setFilter={setFilterMaterialGroup}
                      onChangeItem={changeMaterialGroup}
                      hasNextPage={hasNextPageMaterialGroup}
                      isSuccess={isSuccessMaterialGroup}
                      fetchNextPage={fetchNextPageMaterialGroup}
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
        <ModalDownloadMasterMaterial
          mutateLoadFTP={isLoadingFTP}
          mutateCode={searchInputMaterialNumber}
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

export default FilterMaterialMaster;
