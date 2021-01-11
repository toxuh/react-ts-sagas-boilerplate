import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from 'store2';

import { LS_TOKEN_NAME } from '../../api/constants';

import { fetchUserDataAction, toggleLogin } from '../../common/users/actions';
import { isLoggedSelector } from '../../common/users/selectors';

type UserAppReturnType = {
  bootstrap: () => void;
  isLogged: boolean;
};

const useApp = (): UserAppReturnType => {
  const dispatch = useDispatch();

  const isLogged = useSelector(isLoggedSelector);

  const bootstrap = useCallback(() => {
    const token = store.get(LS_TOKEN_NAME);

    if (token) {
      dispatch(toggleLogin(true));
      dispatch(fetchUserDataAction());
    } else {
      dispatch(toggleLogin(false));
    }
  }, [dispatch]);

  return { bootstrap, isLogged };
};

export default useApp;
