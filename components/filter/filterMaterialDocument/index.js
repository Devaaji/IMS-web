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
  Spinner,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';

import Select from '../../core/select';
import useOptionDataNoProductionOrder from '../../hooks/remote/useOptionDataNoProductionOder';
import { HiOutlineFilter } from 'react-icons/hi';
import IconFTP from '../../../assets/icons/png/Download-FTP.png';
import { CgSoftwareDownload } from 'react-icons/cg';
import Image from 'next/image';
import useFormFTP from '../../../utils/FormFTP';
import ModalLoadingFTP from '../../../utils/modals/ModalLoadingFTP';

const FilterMaterialDocument = ({ data, setMutate }) => {
  const isLoading = false;
  const NameDownloadData = 'materialDocument';
  const DataToDownload = data?.data;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { HandleGetFormFTP, isLoadingFTP } = useFormFTP('material-document');
  setMutate(isLoadingFTP);

  const [isActiveFilter, setActiveFilter] = useState(false);

  const ButtonFIlterAction = () => {
    setActiveFilter(!isActiveFilter);
  };

  // const { data: optionDataNoProduction } = useOptionDataNoProductionOrder();

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
                  NO MATERIAL DOCUMENT
                </Text>
                <Box w="60%">
                  <Select
                    name="noMaterialDocument"
                    placeholder="Select No Material Document"
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
                    name="noMaterialDocument"
                    placeholder="Select Material"
                    // options={optionDataNoProduction}
                    isClearable={true}
                    // onChange={(e) => changeNoProductionOder(e)}
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

export default FilterMaterialDocument;
