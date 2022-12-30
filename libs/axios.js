import axios from 'axios';
import { destroyCookie } from 'nookies';
import useAuthUserStore from '../store/useAuthUserStore';

const axiosInstance = axios.create({
  baseURL: 'https://qa-ims.pindad.com/be/ims/api/v1/',
});

axiosInstance.interceptors.request.use((response) => {
  if (response) {
    response.headers = {
      token: `${useAuthUserStore.getState().accessToken}`,
    };
  }
  return response;
});

export const fetcher = (resource, init) =>
  axiosInstance.get(resource, init).then((res) => res.data);

export const postFetcher = (resource, init) =>
  axiosInstance
    .post(resource, init)
    .then((res) => res.data)
    .catch((error) => {
      if (
        error.response.status === 500 &&
        error.message === 'Request failed with status code 500'
      ) {
        destroyCookie(null, '_id', { path: '/' });
        destroyCookie(null, '_u', { path: '/' });
        destroyCookie(null, '_s', { path: '/' });
        destroyCookie(null, '_t', { path: '/' });
      } else if (error.message === 'Network Error') {
        destroyCookie(null, '_id', { path: '/' });
        destroyCookie(null, '_u', { path: '/' });
        destroyCookie(null, '_s', { path: '/' });
        destroyCookie(null, '_t', { path: '/' });
      } else if (error.response.status === 502 && error.response.statusText === 'Bad Gateway') {
        destroyCookie(null, '_id', { path: '/' });
        destroyCookie(null, '_u', { path: '/' });
        destroyCookie(null, '_s', { path: '/' });
        destroyCookie(null, '_t', { path: '/' });
      } else {
        console.log(error);
      }
    });

export default axiosInstance;
