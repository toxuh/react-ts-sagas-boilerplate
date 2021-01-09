import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  loginUserAction,
  registerUserAction,
} from '../../common/users/actions';
import { UserLoginType, UserRegistrationType } from '../../common/users/types';

type UseSignReturnType = {
  login: (data: UserLoginType) => void;
  register: (data: UserRegistrationType) => void;
};

const useSign = (): UseSignReturnType => {
  const dispatch = useDispatch();

  const login = useCallback(
    (data) => {
      dispatch(loginUserAction(data));
    },
    [dispatch],
  );

  const register = useCallback(
    (data) => {
      dispatch(registerUserAction(data));
    },
    [dispatch],
  );

  return { login, register };
};

export default useSign;
