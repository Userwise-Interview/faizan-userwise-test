import { Image } from "expo-image"
import { memo } from "react"
import { Text, View } from "react-native"

export interface DataItem  {
    title: string,
    url: string,
    id: number
}

const FeedItem = memo((item: DataItem) =>{

    return (<View style={{flex:1}}>
        <Text style={{color: 'white'}}>{item.title}</Text>
       <Image 
       style={{height: 128, width:128}}
       source={item.url}
       
       />
    </View>)
},  (prevProps, nextProps) => {
    return prevProps.title === nextProps.title;
  },)



export default FeedItem