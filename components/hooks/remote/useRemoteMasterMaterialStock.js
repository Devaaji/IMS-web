import { useQuery } from '@tanstack/react-query';
import { postFetcher } from '../../../libs/axios';

const useRemoteMasterMaterialStock = ({
  nameQuery,
  pageLimit,
  pageIndex,
  short,
  order,
  materialNumber,
  materialDescription,
  storageLocation,
  pageEnabled,
  refetchOnWindowFocus,
  refetchOnMount,
  mutateFTP,
}) => {
  const uri = '/transaction-material-stock/list';

  const shortData = short ? short : 'ASC';
  const orderData = order ? order : 'transaksi_material_stock_material';
  const FilterNumber = materialNumber ? materialNumber : '';
  const FilterDescription = materialDescription ? materialDescription : '';
  const FilterSloc = storageLocation ? storageLocation : '';

  const { data, ...others } = useQuery(
    [
      nameQuery,
      pageLimit,
      pageIndex,
      orderData,
      shortData,
      FilterNumber,
      FilterDescription,
      FilterSloc,
      mutateFTP,
    ],
    () =>
      postFetcher(uri, {
        filter: {
          is_transaksi_material_stock_material: FilterNumber ? true : false,
          transaksi_material_stock_material: FilterNumber,
          is_description: FilterDescription ? true : false,
          description: FilterDescription,
          is_transaksi_material_stock_storage: FilterSloc ? true : false,
          transaksi_material_stock_storage: FilterSloc,
        },
        limit: pageLimit,
        page: pageIndex,
        order: orderData,
        sort: shortData,
      }),
    {
      enabled: pageEnabled,
      refetchOnWindowFocus: refetchOnWindowFocus ? refetchOnWindowFocus : true,
      refetchOnMount: refetchOnMount ? refetchOnMount : true,
    }
  );

  return { data, ...others };
};

export default useRemoteMasterMaterialStock;
