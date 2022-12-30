import { useBoolean, useToast } from '@chakra-ui/react';
import useAxios from '../../components/hooks/useAxios';

const GetFTPMaterialList = () => {
  const toast = useToast();
  const [isLoadingFTP, setIsloadingFTP] = useBoolean();

  const [, getFTPMaterialList] = useAxios(
    { url: `/material/csv`, method: 'GET' },
    { manual: true }
  );

  const [, getFTPTypeMaterial] = useAxios(
    { url: `/type-material/csv`, method: 'GET' },
    { manual: true }
  );

  const [, getFTPGroupMaterial] = useAxios(
    { url: `/group-material/csv`, method: 'GET' },
    { manual: true }
  );

  const [, getFTPUomMaterial] = useAxios(
    { url: `/uom/csv`, method: 'GET' },
    { manual: true }
  );

  const HandleGetFormFTP = async () => {
    setIsloadingFTP.on();
    try {
      await Promise.all([
        getFTPMaterialList(),
        getFTPTypeMaterial(),
        getFTPGroupMaterial(),
        getFTPUomMaterial(),
      ]).then(() => {
        toast({
          title: 'Insert to Databases and Move CSV File succeeded',
          status: 'success',
          isClosable: true,
          position: 'top',
        });
      });
    } catch (error) {
      setIsloadingFTP.off();
      if (error.response.data.status === 500) {
        toast({
          title: `${error.response.data.message}`,
          description: 'Silahkan Cek Data terlebih dahulu',
          status: 'success',
          isClosable: true,
          position: 'top',
        });
      } else {
        toast({
          title: `${error.response.data.message}`,
          description: 'Silahkan Cek Data terlebih dahulu',
          status: 'error',
          isClosable: true,
          position: 'top',
        });
      }
    }

    setIsloadingFTP.off();
  };

  return { HandleGetFormFTP, isLoadingFTP };
};

export default GetFTPMaterialList;
