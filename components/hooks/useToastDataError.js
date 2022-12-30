import { useToast } from '@chakra-ui/react';

const useToastDataError = (error) => {
  const toast = useToast();
  const showToastDataError = () => {
    if (error)
      toast({
        title: 'Terjadi kesalahan',
        description: 'Silahkan coba lagi',
        status: 'error',
        isClosable: true,
        position: 'bottom-left',
      });
  };

  return { showToastDataError };
};

export default useToastDataError;
