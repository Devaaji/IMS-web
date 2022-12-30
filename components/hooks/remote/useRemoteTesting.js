import { useMemo } from 'react';

import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../../../libs/axios';

const useRemoteTestingData = () => {
  const uri = '/posts';

  const { data, ...others } = useQuery(['posts'], () => fetcher(uri));

  const newData = useMemo(
    () =>
      data
        ? {
            data: data,
          }
        : data,
    [data]
  );

  return { data: newData, ...others };
};

export default useRemoteTestingData;
