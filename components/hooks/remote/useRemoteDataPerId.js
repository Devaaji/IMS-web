import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../../../libs/axios';

const useRemoteDataPerId = (getURL, nameQuery, id) => {
  const uri = getURL ? getURL : null;

  const { data, ...others } = useQuery([nameQuery, id], () => fetcher(uri));

  return { data, ...others };
};

export default useRemoteDataPerId;
