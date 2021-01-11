import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  loginUserAction,
  registerUserAction,
} from '../../common/users/actions';
import { isRegistrationCompletedSelector } from '../../common/users/selectors';
import { UserLoginType, UserRegistrationType } from '../../common/users/types';

type UseSignReturnType = {
  isRegistrationCompleted: boolean;
  login: (data: UserLoginType) => void;
  register: (data: UserRegistrationType) => void;
};

const useSign = (): UseSignReturnType => {
  const dispatch = useDispatch();

  const isRegistrationCompleted = useSelector(isRegistrationCompletedSelector);

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

  return { isRegistrationCompleted, login, register };
};

export default useSign;
