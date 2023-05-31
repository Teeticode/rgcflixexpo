import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'


/**
* @author
* @function VideoCard
**/
const VideoCard = (props) => {
    const {data} = props

 return(
  <View style={styles.container}>
    <Text>{data.name}</Text>
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