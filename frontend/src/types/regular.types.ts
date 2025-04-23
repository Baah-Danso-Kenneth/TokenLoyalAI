export interface RecentTypes {
    image:string;
    date:string;
    points:number;
    time:string;
    brand:string;
    state:"Sucess" | "Pending" | "Decline";
    wallet:string
}

export interface YourRewardsProps{
    image:string;
    title:string;
    subTitle:string;
    direction:string;
    points:number;
} 