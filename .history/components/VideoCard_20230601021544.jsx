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
            alignItems:'center',
            justifyContent:'space-between',
            flexDirection:'row'
        }}
    >
        <View><Text style={styles.textTitle}>{data.name}</Text></View>
        <View><Text style={styles.dateText}>{data.date}</Text></View>
    </View>
    
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.secondary,
    justifyContent: 'center',
    width:Dimensions.get('window').width/1.3,
    alignSelf:'center',
    margin:7,
    padding:10,
    borderRadius:10
  },
  textTitle:{
    margin:4,
    fontWeight:'bold',
    fontSize:15
  },
  dateText:{
    fontWeight:'900',
    color:Colors.primary,
    fontSize:13
  }
})

export default memo(VideoCard)