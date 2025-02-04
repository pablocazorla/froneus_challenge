import { User } from '@/models/user'

export type Status = "actived" | "ended" | "on_hold";



export interface Campaign {
  id: string;
  name: string;
  created_at: string;
  start_at: string;
  record_calls: boolean;
  status: Status;
  users: User[];
}

export interface CampaignInList {
  id: string;
  name: string;
  created_at: string;
  start_at: string;
  record_calls: boolean;
  status: Status;
  users: number;
}



export interface CampaignList {
  elementsTotal: number;
  data: CampaignInList[];
}