import { useQuery } from '@tanstack/react-query';
import { postFetcher } from '../../../libs/axios';

const useRemoteProductionOrder = ({
  nameQuery,
  pageLimit,
  pageIndex,
  short,
  order,
  noProduction,
  material,
  description,
  pageEnabled,
  refetchOnWindowFocus,
  refetchOnMount,
  mutateFTP,
}) => {
  const uri = 'production-order/list';

  const shortData = short ? short : 'ASC';
  const orderData = order ? order : 'no_pd';
  const FilterNoProduction = noProduction ? noProduction : '';
  const FilterMaterial = material ? material : '';
  const FilterDescription = description ? description : '';

  const { data, ...others } = useQuery(
    [
      nameQuery,
      pageLimit,
      pageIndex,
      orderData,
      shortData,
      FilterNoProduction,
      FilterMaterial,
      FilterDescription,
      mutateFTP
    ],
    () =>
      postFetcher(uri, {
        filter: {
          is_no_pd: FilterNoProduction ? true : false,
          no_pd: FilterNoProduction,
          is_master_material_code: FilterMaterial ? true : false,
          master_material_code: FilterMaterial,
          is_description: FilterDescription ? true : false,
          description: FilterDescription,
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

export default useRemoteProductionOrder;
