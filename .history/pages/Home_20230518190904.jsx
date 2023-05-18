import React from 'react-native'
import { View,Text, StyleSheet } from 'react-native'
import Carousel from '../components/Carousel'

import {SafeAreaView} from 'react-native-safe-area-context'

export default function Home({navigation}) {
  return (
    <SafeAreaView>
     
        <View>
          <Carousel/>
    </View>
    </SafeAreaView>
    
    
  )
}

const styles = StyleSheet.create({
    txt:{
        fontWeight:'900', 
        fontSize:18
    }
})