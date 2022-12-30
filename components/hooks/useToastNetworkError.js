import { useToast } from '@chakra-ui/react';

const useToastNetworkError = () => {
  const toast = useToast();
  const toastId = 'network-error';
  const showToastNetworkError = () => {
    if (!toast.isActive(toastId))
      toast({
        id: toastId,
        title: 'Terjadi kesalahan',
        description: 'Silahkan coba lagi',
        status: 'error',
        isClosable: true,
        position: 'bottom-left',
      });
  };

  return showToastNetworkError;
};

export default useToastNetworkError;
