import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
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
import Select from '../../core/select';
import useOptionDataNoProductionOrder from '../../hooks/remote/useOptionDataNoProductionOder';
import useOptionDataMaterialCode from '../../hooks/remote/useOptionDataProductionOrderMaterial';

const FilterReservation = () => {
  const NameDownloadData = 'Production_Order';
  // const DataToDownload = data?.data;
  const {
    isOpen: isOpenDownload,
    onOpen: onOpenDownload,
    onClose: onCloseDownload,
  } = useDisclosure();

  const { HandleGetFormFTP, isLoadingFTP } = useFormFTP('production-order');

  // const { exportFileXLSX } = ExportFileXLSX(DataToDownload, NameDownloadData);

  const [isActiveFilter, setActiveFilter] = useState(false);

  const ButtonFIlterAction = () => {
    setActiveFilter(!isActiveFilter);
  };

  const isLoading = false;

  // const { data: optionDataNoProduction } = useOptionDataNoProductionOrder();
  // const { data: optionDataMaterial } = useOptionDataMaterialCode();

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
        <Box
          w={{ base: 'full', md: 'full' }}
          display={isActiveFilter ? 'block' : 'none'}
          transitionProperty="common"
        >
          <Stack spacing="2">
            <Text fontWeight="bold">FILTER</Text>
            <Stack spacing="2">
              <HStack>
                <Text w="40%" fontSize="sm">
                  NO RESERVATION
                </Text>
                <Box w="60%">
                  <Select
                    name="noReservation"
                    placeholder="Select No Resevation"
                    // options={optionDataNoProduction}
                    isClearable={true}
                    // onChange={(e) => changeNoProductionOder(e)}
                    menuPlacement="bottom"
                  />
                </Box>
              </HStack>
              <HStack>
                <Text w="40%" fontSize="sm">
                  MATERIAL
                </Text>
                <Box w="60%">
                  <Select
                    name="material"
                    placeholder="Select Material"
                    // options={optionDataMaterial}
                    isClearable={true}
                    // onChange={(e) => changeMaterial(e)}
                    menuPlacement="bottom"
                  />
                </Box>
              </HStack>
              <HStack>
                <Text w="40%" fontSize="sm">
                  NO PRODUCTION ORDER
                </Text>
                <Box w="60%">
                  <Select
                    name="noPd"
                    placeholder="Select No Production Order"
                    // options={optionDataMaterial}
                    isClearable={true}
                    // onChange={(e) => changeMaterial(e)}
                    menuPlacement="bottom"
                  />
                </Box>
              </HStack>
            </Stack>
          </Stack>
        </Box>
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
          {isLoading === false ? (
            <Tooltip label="GET From FTP">
              <Box
                mr="2"
                bg="#A4CDE8"
                w="40px"
                h="40px"
                cursor="pointer"
                rounded="md"
                _hover={{ bg: 'ims-primary-new' }}
                // onClick={HandleGetFormFTP}
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
            <Button rounded="md" bg="#A4CDE8" isLoading></Button>
          )}
          {isLoading === false ? (
            <Tooltip label="Download">
              <IconButton
                variant="solid-blue"
                fontSize="20px"
                icon={<CgSoftwareDownload />}
                _hover={{ bg: 'ims-primary-new' }}
                // onClick={onOpenDownload}
              />
            </Tooltip>
          ) : (
            <Button rounded="md" bg="#A4CDE8" isLoading></Button>
          )}
        </Flex>
        {/* <ModalDownloadProductionOrder
          filePerXLSX={exportFileXLSX}
          filePerCSV={DataToDownload}
          isOpen={isOpenDownload}
          onClose={onCloseDownload}
          isLoading={isLoading}
        /> */}
      </Box>
    </HStack>
  );
};

export default FilterReservation;
