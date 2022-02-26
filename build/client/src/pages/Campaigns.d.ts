import { ReactElement } from "react";
export interface CampaignI {
    id: any;
    title: string;
    description: string;
    photoUrl: string;
    isHomePage?: boolean;
}
export default function Campaigns(): ReactElement;
