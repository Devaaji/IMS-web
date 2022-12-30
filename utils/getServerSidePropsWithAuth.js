import merge from 'merge';
import { destroyCookie, parseCookies } from 'nookies';

export const getServerSidePropsWithNoAuth = async (context) => {
  const { _t: accessToken, _id: userId } = parseCookies(context, { path: '/' });

  if (userId && accessToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export const getServerSidePropsWithAuth = async (context, admin, callback) => {
  const { _t: accessToken, _id: userId } = parseCookies(context, { path: '/' });

  if (userId && accessToken) {
    switch (admin) {
      case 'admin':
        break;
      case 'user':
        if (admin === 'user') {
          return {
            redirect: {
              destination: '/',
              permanent: false,
            },
          };
        }
        break;
    }

    const returnValue = {
      props: {
        fallback: {},
      },
    };
    if (callback) {
      const callbackValue = await callback(userId);
      const returnMergedValue = merge.recursive(returnValue, callbackValue);

      return returnMergedValue;
    }
    return returnValue;
  }

  destroyCookie(context, '_t', { path: '/' });
  destroyCookie(context, '_id', { path: '/' });

  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
};
