import { useSelector } from 'react-redux';

import { userSelector } from '../../common/users/selectors';
import { UserType } from '../../common/users/types';

type ReturnType = {
  user: undefined | UserType;
};

const useAccount = (): ReturnType => {
  const user = useSelector(userSelector);

  return { user };
};

export default useAccount;
