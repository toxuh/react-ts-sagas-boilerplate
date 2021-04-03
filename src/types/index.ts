import { CampaignsState } from '../common/campaigns/types';
import { UserState } from '../common/users/types';
import { VideoState } from '../common/video/types';

export type GlobalState = {
  campaigns: CampaignsState;
  users: UserState;
  video: VideoState;
};
