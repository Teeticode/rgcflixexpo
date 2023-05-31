import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import VideoCard from './VideoCard'



const Video = (props) => {
  const data = [
    {
      id:1,
      url:'https://res.cloudinary.com/teeti254/video/upload/v1683390819/1283-Nguluni-Redeemed-Gospel-Church-YouTube_ep3jru.mp4',
      name:'Kesha Friday',
      date:'3 days ago'
    },
    {
      id:2,
      url:'https://res.cloudinary.com/teeti254/video/upload/v1683390819/1283-Nguluni-Redeemed-Gospel-Church-YouTube_ep3jru.mp4',
      name:'New tutorial',
      date:'a week ago'
    }
  ]
 return(
  <View >
    {
      data.map((dt,ind)=>(
        <View key={ind}>
          <VideoCard data={dt}/>
        </View>
      ))
    }
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