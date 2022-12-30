import {
  Badge,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import ModalToolsBooks from '../../../utils/modals/ModalToolsBook/modalToolsBook';
import ModalWarning from '../../../utils/modals/ModalWarning';
import { Person } from '../../../utils/Testing/newPerson';
// import { makeData } from '../../../utils/Testing/makeData';

const useRemoteToolsBook = () => {
  //nantinya data API menggunkan React-query disini
  const data = Person;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure(); //menggunakan useDIsclosure open Modal in Chakra UI

  const newData = [];

  // ambil data biar ada action button
  data?.map((value) => {
    newData.push({
      id: value?.id,
      firstName: value?.firstName,
      lastName: value?.lastname,
      age: value?.age,
      visits: value?.visits,
      status:
        value?.status === 'active' ? (
          <Badge colorScheme="green">Active</Badge>
        ) : value?.status === 'Non active' ? (
          <Badge colorScheme="red">Non-active</Badge>
        ) : value?.status === 'In Production' ? (
          <Badge colorScheme="orange">Production</Badge>
        ) : (
          value?.status
        ),
      progress: value?.progress,
      // Menambahkan Menu Edit dan Delete
      action: (
        <>
          <Menu placement="left">
            <MenuButton
              as={IconButton}
              icon={<BsThreeDotsVertical />}
              variant="outline"
              w="14"
            />
            <MenuList>
              <MenuItem onClick={onOpen}>Ubah</MenuItem>
              <MenuItem onClick={onOpenDelete}>Hapus</MenuItem>
            </MenuList>
          </Menu>
          {/* Modal Edit */}
          <ModalToolsBooks
            isOpen={isOpen}
            id={value?.id} // Problem - Dimana Data yang di ambil per id tidak se ekspetasi
            onClose={onClose}
          />
          {/* Modal Delete */}
          <ModalWarning
            buttonText="Hapus"
            isOpen={isOpenDelete}
            onClose={onCloseDelete}
          >
            Apakah Kamu Yakin?
          </ModalWarning>
        </>
      ),
    });
  });

  //menggunakan useMemo agar data tidak open request saat load data

  // const newData = toolBooksMapper.toLocalList(data);

  return { data: useDataMemo };
};

export default useRemoteToolsBook;
