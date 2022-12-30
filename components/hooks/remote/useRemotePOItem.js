import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { postFetcher } from '../../../libs/axios';
import useAuthUserStore from '../../../store/useAuthUserStore';

const useRemotePOItem = (
  nameQuery,
  pageLimit,
  pageIndex,
  pageEnabled,
  refetchOnWindowFocus,
  refetchOnMount
) => {
  const uri = '/po-item/list';

  const router = useRouter();
  const toast = useToast();
  const removeCookies = useAuthUserStore((state) => state.setLogout);

  const { data, ...others } = useQuery(
    [nameQuery, pageLimit, pageIndex],
    () =>
      postFetcher(uri, {
        limit: pageLimit,
        page: pageIndex,
        order: 'master_po_item_no',
        sort: 'ASC',
      }),
    {
      onSuccess: async (data) => {
        if (data.status === 400) {
          toast({
            title: 'Session Token Habis',
            description: 'Silahkan Logout Terlebih dahulu',
            status: 'error',
            isClosable: true,
            position: 'top',
          });
          await removeCookies();
          router.reload('/login');
        }
      },
      onError: (error) => {
        console.log('Data error: ' + error);
      },
      enabled: pageEnabled,
      refetchOnWindowFocus: refetchOnWindowFocus,
      refetchOnMount: refetchOnMount,
    }
  );

  return { data, ...others };
};

export default useRemotePOItem;
