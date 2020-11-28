import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { dummiesSelector } from './selectors';

import { handleDummyAction } from './actions';
import { DummyType } from './types';

type UseDummyReturnType = {
  addDummy: () => void;
  dummies: DummyType[];
};

const useDummy = (): UseDummyReturnType => {
  const dispatch = useDispatch();

  const dummies = useSelector(dummiesSelector);

  const addDummy = useCallback(() => {
    dispatch(handleDummyAction());
  }, [dispatch]);

  return { addDummy, dummies };
};

export default useDummy;
