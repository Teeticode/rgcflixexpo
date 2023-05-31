import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'


/**
* @author
* @function VideoCard
**/
const VideoCard = (props) => {


 return(
  <View style={container}>
    <Text>VideoCard</Text>
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

export default memo(VideoCard)