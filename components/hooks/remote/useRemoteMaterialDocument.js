import { useQuery } from '@tanstack/react-query';
import { postFetcher } from '../../../libs/axios';

const useRemoteMaterialDocument = ({
  nameQuery,
  pageLimit,
  pageIndex,
  short,
  order,
  pageEnabled,
  refetchOnWindowFocus,
  refetchOnMount,
  mutateFTP,
}) => {
  const uri = 'material-document/list';

  const shortData = short ? short : 'ASC';
  const orderData = order ? order : 'master_material_document';

  const { data, ...others } = useQuery(
    [
      nameQuery,
      pageLimit,
      pageIndex,
      orderData,
      shortData,
      mutateFTP
    ],
    () =>
      postFetcher(uri, {
        filter: {
            is_master_material_document: false,
            master_material_document: ''
          
        },
        limit: pageLimit,
        page: pageIndex,
        order: orderData,
        sort: shortData,
      }),
    {
      enabled: pageEnabled,
      refetchOnWindowFocus: refetchOnWindowFocus,
      refetchOnMount: refetchOnMount,
    }
  );

  return { data, ...others};
};

export default useRemoteMaterialDocument;
