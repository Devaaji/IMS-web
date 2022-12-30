import { useQuery } from '@tanstack/react-query';
import { postFetcher } from '../../../libs/axios';

const useRemoteMasterMaterial = ({
  nameQuery,
  pageLimit,
  pageIndex,
  short,
  order,
  materialCode,
  description,
  materialGroup,
  pageEnabled,
  refetchOnWindowFocus,
  refetchOnMount,
  mutateFTP,
}) => {
  const uri = '/material/list';

  const shortData = short ? short : 'ASC';
  const orderData = order ? order : 'master_material_code';
  const FiltermaterialNumber = materialCode ? materialCode : '';
  const FilterDescription = description ? description : '';
  const FilterGroup = materialGroup ? materialGroup : '';

  const { data, ...others } = useQuery(
    [
      nameQuery,
      pageLimit,
      pageIndex,
      orderData,
      shortData,
      FiltermaterialNumber,
      FilterDescription,
      FilterGroup,
      mutateFTP,
    ],
    () =>
      postFetcher(uri, {
        filter: {
          is_master_material_code: FiltermaterialNumber ? true : false,
          master_material_code: FiltermaterialNumber,
          is_description: FilterDescription ? true : false,
          description: FilterDescription,
          is_master_material_group_code: FilterGroup ? true : false,
          master_material_group_code: FilterGroup,
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

  return { data, ...others };
};

export default useRemoteMasterMaterial;
