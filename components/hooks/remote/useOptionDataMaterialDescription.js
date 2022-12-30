import { useInfiniteQuery } from '@tanstack/react-query';
import { postFetcher } from '../../../libs/axios';

const useOptionDataMaterialDescription = ({ mutate, filterInput }) => {
  const uri = '/material/list';

  const { data, ...others } = useInfiniteQuery(
    ['opsi-material-description', mutate, filterInput],
    async ({ pageParam = 1 }) =>
      postFetcher(uri, {
        filter: {
          is_description: filterInput ? true : false,
          description: filterInput,
        },
        limit: 10,
        page: pageParam,
        order: 'description',
        sort: 'ASC',
      }),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        if (typeof(lastPage) !== 'undefined') {
          return lastPage.data?.length !== 0 ? nextPage : undefined;
        }
      },
    }
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

export default useOptionDataMaterialDescription;
