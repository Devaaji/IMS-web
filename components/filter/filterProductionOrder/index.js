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

import useFormFTP from '../../../utils/FormFTP';
import ExportFileXLSX from '../../../utils/download/ExportFileXLSX';
import { ModalDownloadProductionOrder } from '../../modalDownload/ModalDownloadProductionOder';
import { CgSoftwareDownload } from 'react-icons/cg';
import { HiOutlineFilter } from 'react-icons/hi';
import IconFTP from '../../../assets/icons/png/Download-FTP.png';
import Image from 'next/image';
import { useState } from 'react';
import useOptionDataNoProductionOrder from '../../hooks/remote/useOptionDataNoProductionOder';
import useOptionDataProductionOrderMaterial from '../../hooks/remote/useOptionDataProductionOrderMaterial';
import useOptionDataProductionOrderDescription from '../../hooks/remote/useOptionDataProductionOrderDescription';
import SelectFilter from '../../core/select-filter';
import ModalLoadingFTP from '../../../utils/modals/ModalLoadingFTP';

const FilterProductionOrder = ({
  data,
  isLoading,
  changeNoProductionOder,
  changeMaterial,
  changeDescription,
  setMutate,
}) => {
  const NameDownloadData = 'Production_Order';
  const DataToDownload = data?.data;
  const {
    isOpen: isOpenDownload,
    onOpen: onOpenDownload,
    onClose: onCloseDownload,
  } = useDisclosure();

  //handleFTP
  const { HandleGetFormFTP, isLoadingFTP } = useFormFTP('production-order');
  setMutate(isLoadingFTP);

  const { exportFileXLSX } = ExportFileXLSX(DataToDownload, NameDownloadData);

  const [isActiveFilter, setActiveFilter] = useState(false);

  const ButtonFIlterAction = () => {
    changeNoProductionOder('');
    changeMaterial('');
    changeDescription('');
    setActiveFilter(!isActiveFilter);

    setSearchInputNoProduction('');
    setFilterNoProduction('');

    setSearchInputMaterial('');
    setFilterMaterial('');

    setSearchInputDescription('');
    setFilterDescription('');
  };

  //Filter No Production Order
  const [searchInputNoProduction, setSearchInputNoProduction] = useState('');
  const [filterNoProductionOrder, setFilterNoProduction] = useState('');

  const {
    data: optionDataNoProduction,
    isLoading: isLoadingNoProductionOrder,
    isSuccess: isSuccessNoProductionOrder,
    isFetchingNextPage: isFetchingNextPageNoProductionOrder,
    hasNextPage: hasNextPageNoProductionOrder,
    fetchNextPage: fetchNextPageNoProductionOrder,
  } = useOptionDataNoProductionOrder({
    mutate: isLoadingFTP,
    filter: searchInputNoProduction,
  });

  //Filter Material PD
  const [searchInputMaterial, setSearchInputMaterial] = useState('');
  const [filterMaterial, setFilterMaterial] = useState('');

  const {
    data: optionDataMaterial,
    isLoading: isLoadingMaterial,
    isSuccess: isSuccessPdMaterial,
    isFetchingNextPage: isFetchingNextPagePdMaterial,
    hasNextPage: hasNextPagePdMaterial,
    fetchNextPage: fetchNextPagePdMaterial,
  } = useOptionDataProductionOrderMaterial({
    mutate: isLoadingFTP,
    filter: searchInputMaterial,
  });
  //Filter Description PD
  const [searchInputDescription, setSearchInputDescription] = useState('');
  const [filterDescription, setFilterDescription] = useState('');

  const {
    data: optionDescription,
    isLoading: isLoadingDescription,
    isSuccess: isSuccessPdDescription,
    isFetchingNextPage: isFetchingNextPagePdDescription,
    hasNextPage: hasNextPagePdDescription,
    fetchNextPage: fetchNextPagePdDescription,
  } = useOptionDataProductionOrderDescription({
    mutate: isLoadingFTP,
    filter: searchInputMaterial,
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
              <Text fontWeight="bold">FILTER</Text>
              <Stack spacing="2">
                <HStack>
                  <Text w="40%" fontSize="sm">
                    NO PRODUCTION ORDER
                  </Text>
                  <Box w="60%">
                    <SelectFilter
                      placeholder="Search a no production order"
                      data={optionDataNoProduction}
                      searchInput={searchInputNoProduction}
                      setSearchInput={setSearchInputNoProduction}
                      filter={filterNoProductionOrder}
                      setFilter={setFilterNoProduction}
                      onChangeItem={changeNoProductionOder}
                      isLoading={isLoadingNoProductionOrder}
                      isFetchingNextPage={isFetchingNextPageNoProductionOrder}
                      hasNextPage={hasNextPageNoProductionOrder}
                      isSuccess={isSuccessNoProductionOrder}
                      fetchNextPage={fetchNextPageNoProductionOrder}
                    />
                  </Box>
                </HStack>
                <HStack>
                  <Text w="40%" fontSize="sm">
                    MATERIAL
                  </Text>
                  <Box w="60%">
                    <SelectFilter
                      placeholder="Search a material"
                      data={optionDataMaterial}
                      searchInput={searchInputMaterial}
                      setSearchInput={setSearchInputMaterial}
                      filter={filterMaterial}
                      setFilter={setFilterMaterial}
                      onChangeItem={changeMaterial}
                      isLoading={isLoadingMaterial}
                      isFetchingNextPage={isFetchingNextPagePdMaterial}
                      hasNextPage={hasNextPagePdMaterial}
                      isSuccess={isSuccessPdMaterial}
                      fetchNextPage={fetchNextPagePdMaterial}
                    />
                  </Box>
                </HStack>
                <HStack>
                  <Text w="40%" fontSize="sm">
                    DESCRIPTION
                  </Text>
                  <Box w="60%">
                    <SelectFilter
                      placeholder="Search a description"
                      data={optionDescription}
                      searchInput={searchInputDescription}
                      setSearchInput={setSearchInputDescription}
                      filter={filterDescription}
                      setFilter={setFilterDescription}
                      onChangeItem={changeDescription}
                      isLoading={isLoadingDescription}
                      isFetchingNextPage={isFetchingNextPagePdDescription}
                      hasNextPage={hasNextPagePdDescription}
                      isSuccess={isSuccessPdDescription}
                      fetchNextPage={fetchNextPagePdDescription}
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
        <ModalDownloadProductionOrder
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

export default FilterProductionOrder;
