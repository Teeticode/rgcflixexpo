import React, { memo } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
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
    backgroundColor:'grey',
    justifyContent: 'center',
    alignItems: 'center',
    width:Dimensions.get('window').width/2
  }
})

export default memo(VideoCard)