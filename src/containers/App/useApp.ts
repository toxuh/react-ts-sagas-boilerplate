import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { checkUserAction } from '../../common/users/actions';
import { isLoggedSelector } from '../../common/users/selectors';

type UserAppReturnType = {
  bootstrap: () => void;
  isLogged: boolean;
};

const useApp = (): UserAppReturnType => {
  const dispatch = useDispatch();

  const isLogged = useSelector(isLoggedSelector);

  const bootstrap = useCallback(() => {
    dispatch(checkUserAction());
  }, [dispatch]);

  return { bootstrap, isLogged };
};

export default useApp;
