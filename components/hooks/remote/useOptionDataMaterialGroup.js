import { useInfiniteQuery } from '@tanstack/react-query';
import { postFetcher } from '../../../libs/axios';

const useOptionDataMaterialGroup = ({ mutate, filterInput }) => {
  const uri = '/material/list';

  const { data, ...others } = useInfiniteQuery(
    ['opsi-material-group', mutate, filterInput],
    async () =>
      postFetcher(uri, {
        filter: {
          is_master_material_group_code: filterInput ? true : false,
          master_material_group_code: filterInput,
        },
        limit: 5000,
        page: 1,
        order: 'master_material_group_code',
        sort: 'ASC',
      })
  );

  const removeDupicate = (value, index, self) => {
    return self.indexOf(value) === index && value !== '';
  };

  const hasMapDataArr = data?.pages
    ?.map((data) => data)
    ?.map((item) => item?.data);
  const DataToValues = hasMapDataArr?.map((values) =>
    values
      ?.map((value) => value?.master_material_group_code)
      .filter(removeDupicate)
  );

  const newData = DataToValues?.map((item) => item)
    ?.flat()
    ?.map((itemValues) => ({ value: itemValues }));

  return { data: newData, ...others };
};

export default useOptionDataMaterialGroup;
