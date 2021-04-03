import * as campaignsApi from './campaigns';
import * as userApi from './users';
import * as videoApi from './video';

export default {
  ...campaignsApi,
  ...userApi,
  ...videoApi,
};
