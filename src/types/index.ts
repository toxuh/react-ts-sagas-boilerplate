import { CampaignsState } from '../common/campaigns/types';
import { UserState } from '../common/users/types';
import { VideoState } from '../common/video/types';

export type AnyObject = Record<string, unknown>;

export type GlobalState = {
  campaigns: CampaignsState;
  users: UserState;
  video: VideoState;
};
