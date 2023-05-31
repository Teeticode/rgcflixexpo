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
    <View
        style={{
            justifyContent:'space-between',
            flexDirection:'row'
        }}
    >
        <View><Text>{data.name}</Text></View>
        <View><Text>{data.date}</Text></View>
    </View>
    
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    width:Dimensions.get('window').width/1.3,
    alignSelf:'center',
    margin:7,
    padding:10,
    borderRadius:10
  },
  textTitle:{

  }
})

export default memo(VideoCard)