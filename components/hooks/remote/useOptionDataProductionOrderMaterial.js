import { useInfiniteQuery } from '@tanstack/react-query';
import { postFetcher } from '../../../libs/axios';

const useOptionDataProductionOrderMaterial = ({ mutate, filter }) => {
  const uri = 'production-order/list';

  const { data, ...others } = useInfiniteQuery(
    ['opsi-material-pd', mutate, filter],
    async ({ pageParam = 1 }) =>
      postFetcher(uri, {
        filter: {
          is_master_material_code: filter ? true : false,
          master_material_code: filter,
        },
        limit: 10,
        page: pageParam,
        order: 'master_material_code',
        sort: 'ASC',
      })
    // {
    //   getNextPageParam: (lastPage, allPages) => {
    //     const nextPage = allPages.length + 1;
    //     return lastPage?.data.length !== 0 ? nextPage : undefined;
    //   },
    // }
  );
  const removeDupicate = (value, index, self) => {
    return self.indexOf(value) === index && value !== '';
  };

  const hasMapDataArr = data?.pages
    ?.map((data) => data)
    ?.map((item) => item?.data);
  const DataToValues = hasMapDataArr?.map((values) =>
    values?.map((value) => value?.master_material_code).filter(removeDupicate)
  );

  const newData = DataToValues?.map((item) => item)
    ?.flat()
    ?.map((itemValues) => ({ value: itemValues }));

  return { data: newData, ...others };
};

export default useOptionDataProductionOrderMaterial;
