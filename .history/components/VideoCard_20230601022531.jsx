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
            margin:4,
            flexDirection:'row'
        }}
    >
        <View><Text style={styles.textTitle}>{data.name}</Text></View>
        <View><Text style={styles.dateText}>{data.date}</Text></View>
        
    </View>
    <View
    style={{
        margin:4
    }}
    >
            <Text style={styles.descText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </Text>
        </View>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'aliceblue',
    justifyContent: 'center',
    width:Dimensions.get('window').width/1.2,
    alignSelf:'center',
    margin:12,
    padding:10,
    borderRadius:10
  },
  textTitle:{
    letterSpacing:1,
    fontWeight:'bold',
    fontSize:15
  },
  dateText:{
    fontWeight:'900',
    color:Colors.brand,
    fontSize:13
  },
  descText:{
    fontSize:14,
    fontWeight:'600',
    letterSpacing:1,
    color:'dimgray'
  }
})

export default memo(VideoCard)