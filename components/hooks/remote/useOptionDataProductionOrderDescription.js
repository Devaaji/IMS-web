import { useInfiniteQuery } from '@tanstack/react-query';
import { postFetcher } from '../../../libs/axios';

const useOptionDataProductionOrderDescription = ({ mutate, filter }) => {
  const uri = 'production-order/list';

  const { data, ...others } = useInfiniteQuery(
    ['opsi-pd-description', mutate, filter],
    async ({ pageParam = 1 }) =>
      await postFetcher(uri, {
        filter: {
          is_description: filter ? true : false,
          description: filter,
        },
        limit: 10,
        page: pageParam,
        order: 'description',
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
    values?.map((value) => value?.description).filter(removeDupicate)
  );

  const newData = DataToValues?.map((item) => item)
    ?.flat()
    ?.map((itemValues) => ({ value: itemValues }));

  return { data: newData, ...others };
};

export default useOptionDataProductionOrderDescription;
