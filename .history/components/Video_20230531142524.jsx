import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'



const Video = (props) => {
  const data = [
    {
      id:1,
      url:''
    }
  ]
 return(
  <View >
    <Text>Video</Text>
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