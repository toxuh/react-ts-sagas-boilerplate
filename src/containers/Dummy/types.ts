export const DUMMY_CONST = 'DUMMY_CONST';
export const ANOTHER_DUMMY_CONST = 'ANOTHER_DUMMY_CONST';

export type DummyType = {
  id: number;
  name: string;
};

export type DummyState = {
  dummies: DummyType[];
};

type DummyAction = {
  type: typeof DUMMY_CONST;
};
type AnotherDummyAction = {
  type: typeof ANOTHER_DUMMY_CONST;
  payload: DummyType[];
};

export type DummyActionTypes = DummyAction | AnotherDummyAction;
