import { parseCookies, setCookie, destroyCookie } from 'nookies';
import create from 'zustand';

const useAuthUserStore = create(
  (set) => {
    const cookies = parseCookies();
    const { id: id, _u: username, _s: status, _t: accessToken } = cookies;

    return {
      id,
      username,
      status,
      accessToken,
      setLogin: (newId, newUsername, newStatus) => {
        setCookie(null, '_id', newId, {
          path: '/',
        });
        setCookie(null, '_u', newUsername, {
          path: '/',
        });
        setCookie(null, '_s', newStatus, {
          path: '/',
        });
        set({
          id: newId,
          status: newStatus,
          username: newUsername,
        });
      },
      setCreateToken: (newAccessToken) => {
        setCookie(null, '_t', newAccessToken, { path: '/' });
        set({
          accessToken: newAccessToken,
        });
      },
      setLogout: () => {
        destroyCookie(null, '_id', { path: '/' });
        destroyCookie(null, '_u', { path: '/' });
        destroyCookie(null, '_s', { path: '/' });
        destroyCookie(null, '_t', { path: '/' });
        set({
          id: undefined,
          status: undefined,
          username: undefined,
          accessToken: undefined,
        });
      },
    };
  },
  { name: 'user' }
);

export default useAuthUserStore;
