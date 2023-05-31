import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../config/styles'


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
    backgroundColor:Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default memo(VideoCard)