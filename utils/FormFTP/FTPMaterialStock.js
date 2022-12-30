import { useBoolean, useToast } from '@chakra-ui/react';
import useAxios from '../../components/hooks/useAxios';

const GetFTPMaterialStock = () => {
  const toast = useToast();
  const [isLoadingFTP, setIsloadingFTP] = useBoolean();

  const [, getFTPMaterialStock] = useAxios(
    { url: `/transaction-material-stock/csv`, method: 'GET' },
    { manual: true }
  );

  const [, getFTPMaterialBatch] = useAxios(
    { url: `/material-batch/csv`, method: 'GET' },
    { manual: true }
  );

  const [, getFTPMaterialValuation] = useAxios(
    { url: `/material-valuation/csv`, method: 'GET' },
    { manual: true }
  );

  const [, getFTPMaterialVendor] = useAxios(
    { url: `/vendor/csv`, method: 'GET' },
    { manual: true }
  );

  const [, getFTPMaterialList] = useAxios(
    { url: `/material/csv`, method: 'GET' },
    { manual: true }
  );

  const HandleGetFormFTP = async () => {
    setIsloadingFTP.on();
    try {
      await Promise.all([
        getFTPMaterialStock(),
        getFTPMaterialBatch(),
        getFTPMaterialValuation(),
        getFTPMaterialVendor(),
        getFTPMaterialList(),
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

export default GetFTPMaterialStock;
