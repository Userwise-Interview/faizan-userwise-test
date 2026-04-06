import { DataItem } from "../app/feed/FeedItem";

export function isEmailValid(email: string){
    if(email.length === 0) return false
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        return regex.test(email)

}


export function getDummyFeed(size: number): DataItem[]{

    const data: DataItem[] = []
    for(let i = 0; i< size; i++){
        data.push({title: `Feed: ${i}`, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s", id: i})
    }
    return data
}