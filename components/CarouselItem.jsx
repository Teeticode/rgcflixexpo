import { memo } from 'react';
import React from 'react-native';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const CarouselItem = ({item})=>{
    return(
        <View style={styles.cardView}>
            <Image style={styles.image} source={{uri:item.image}}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    cardView:{
        width:width- 20,
        height: height / 3,
        backgroundColor:'white',
        margin:10,
        borderRadius:10,
        shadowColor:'#000',
        shadowOffset:{width:0.5, height:0.5},
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation:5
    },
    textView:{
        position:'absolute',
        bottom:10,
        margin:10,
        left:5,
        backgroundColor:'whitesmoke',
        padding:8,
        borderRadius:10
    },
    image:{
        width:width-20,
        height:height/3,
        borderRadius:10
    },
    itemTitle:{
        color:'black',
        fontSize:24,
        shadowColor:'#000',
        shadowOffset:{width:0.8, height:0.8},
        shadowOpacity:1,
        shadowRadius:3,
        marginBottom:5,
        fontWeight:'bold',
        elevation: 5
    },
    itemDescription:{
        color:'black',
        fontSize:15,
        shadowColor:'#000',
        shadowOffset:{width:0.8, height:0.8},
        shadowOpacity: 1,
        shadowRadius:3,
        elevation:5
    },
})

export default memo(CarouselItem);