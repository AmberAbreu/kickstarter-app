import { ReactElement } from "react";
export interface CampaignI {
    id?: any;
    title?: string;
    description?: string;
    photoUrl?: string;
    status?: boolean;
    raised?: number;
    profile?: boolean;
}
export default function Campaigns(): ReactElement;
