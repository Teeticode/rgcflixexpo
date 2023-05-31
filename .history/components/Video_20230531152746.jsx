import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'



const Video = (props) => {
  const data = [
    {
      id:1,
      url:'https://res.cloudinary.com/teeti254/video/upload/v1683390819/1283-Nguluni-Redeemed-Gospel-Church-YouTube_ep3jru.mp4',
      name:'Kesha Friday',
      date:'3 days'
    }
  ]
 return(
  <View >
    <FlatList 
      data={data}
      keyExtractor={(item, index)=>`${index}`}
      renderItem={(item, index)=>(
        
          <View>
            <Text>{item.name}</Text>
          </View>
        )
      }
    />
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  }
})

export default memo(Video)