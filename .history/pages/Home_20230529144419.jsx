import React from 'react-native'
import { View,Text, StyleSheet } from 'react-native'
import Carousel from '../components/Carousel'
import { dummyData } from '../data'
import {SafeAreaView} from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
export default function Home({navigation}) {
  return (
    <SafeAreaView>
     
        <View>
          <View
            style={{
              padding:10,
              backgroundColor:'white',
              marginBottom:10
            }}
          >
            <View>
              <Ionicons name='arrow-back-outline' size={30} color={black} style={{
                fontWeight:'800'
              }}/>
            </View>
          </View>
          <Carousel data={dummyData}/>
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