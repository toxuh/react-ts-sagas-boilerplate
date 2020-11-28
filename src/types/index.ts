import { DummyState } from '../containers/Dummy/types';

export type AnyObject = Record<string, unknown>;

export type GlobalState = {
  dummy: DummyState;
};
