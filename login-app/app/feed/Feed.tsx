import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Button, FlatList, View } from 'react-native';
import FeedItem from './FeedItem';
import useFeed from './useFeed';

const FeedScreen = () => {

     const {data, getData, isLoading} = useFeed()

     const [showButton, setShowButton] = useState(false)


     useEffect(()=> {
        getData()
     },[])

     
  const handleScroll = (event: { nativeEvent: { contentOffset: { y: any; }; }; }) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowButton(offsetY > 200);
  };

     const flatListRef = useRef<FlatList>(null)

    const toTop = () => {
        // use current
        if(flatListRef){
        flatListRef.current?.scrollToOffset({ animated: true, offset: 0 })    
        }
        
    }

     if(isLoading) {
        return <ActivityIndicator size={'small'} />
     }
     
     return (
        <View style={{flex:1, }}>
            <FlatList 
            ref={flatListRef}
            style={{flex:1}}
            data={data}
            keyExtractor={(item) => `${item.id}`}
            renderItem={(item) => <FeedItem title={item.item.title} url={item.item.url} id={item.item.id}  />}
                onScroll={handleScroll}
        scrollEventThrottle={16} 
            
            
            />
           {showButton && <View style={{position:'absolute', bottom: 48, right: 48, }}>
                <Button 
                title='Top'
                onPress={toTop}
                />
            </View>}
        
        </View>
      );
}

export default FeedScreen