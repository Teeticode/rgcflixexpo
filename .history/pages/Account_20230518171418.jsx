
import React, { useState } from 'react'
import { StyleSheet,View,Text, Touchable, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import camera from '../assets/images/camera.jpg'
import { TextInput } from 'react-native-gesture-handler'
import { useEffect } from 'react'
import { Keyboard } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux'
import { StyledContainer } from '../config/styles'

function Login({email,setEmail, password, setPsd, isSecure, setSecure}){
  return(
    <View style={{marginTop: 40}}>
                  <View>
                    <View
                      style={{
                        borderColor:'gray', 
                        borderWidth:1, 
                        borderRadius:10,
                        padding:8,
                        marginBottom:20
                      }}
                    >
                      <TextInput 
                        editable
                        onChangeText={text=>setEmail(text)}
                        value={email}
                        style={{padding:10, fontSize:17, fontWeight:'900'}}
                        placeholder='johndoe@gmail.com'
                      />
                    </View>
                    <View
                      style={{
                        borderColor:'gray', 
                        borderWidth:1, 
                        borderRadius:10,
                        padding:8,
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-between'
                      }}
                    >
                      
                        <View>
                        <TextInput 
                        editable
                        onChangeText={text=>setPsd(text)}
                        value={password}
                        style={{padding:10, fontSize:17, fontWeight:'900'}}
                        placeholder='password'
                        secureTextEntry={isSecure}
                      />
                        </View>
                      <View>
                        <TouchableOpacity
                          onPress={()=>{setSecure(!isSecure)}}
                        >
                          {
                            isSecure?(
                              <Ionicons name='eye-outline' size={30} color='grey' style={{fontWeight:'900'}}/>
                            ):(
                              <Ionicons name='eye-off-outline' size={30} color='grey' style={{fontWeight:'900'}}/>
                            )
                          }
                        
                        </TouchableOpacity>
                      </View>
                      
                    </View>
                    <View
                      style={{
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center',
                        marginTop:10
                      }}
                    >
                    <View>
                    <Text style={{fontWeight:'700'}}>Forgot password? </Text>
                    </View>
                    <View>
                      <TouchableOpacity>
                      <Text style={{color:'#0077b5'}}> Reset</Text>
                      </TouchableOpacity>
                    </View>
                     
                    </View>
                    <TouchableOpacity
                      style={{
                        alignItems:'center',
                        justifyContent:'center',
                        marginTop:25,
                        marginLeft:Dimensions.get('window').width/6,
                        backgroundColor:'#0077b5',
                        padding:18, 
                        color:'white',
                        width:Dimensions.get('window').width/2
                      }}
                    >
                      <Text style={{color:'white', fontSize:15, fontWeight:'900'}}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
  )
}
function Register({email,setEmail, password, setPsd, isSecure, setSecure}){
  return(
    <View style={{marginTop: 40}}>
                  <View>
                    <View
                      style={{
                        borderColor:'gray', 
                        borderWidth:1, 
                        borderRadius:10,
                        padding:8,
                        marginBottom:20
                      }}
                    >
                      <TextInput 
                        editable
                        onChangeText={text=>setEmail(text)}
                        value={email}
                        style={{padding:10, fontSize:17, fontWeight:'900'}}
                        placeholder='johndoe@gmail.com'
                      />
                    </View>
                    <View
                      style={{
                        borderColor:'gray', 
                        borderWidth:1, 
                        borderRadius:10,
                        padding:8,
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-between'
                      }}
                    >
                      
                        <View>
                        <TextInput 
                        editable
                        onChangeText={text=>setPsd(text)}
                        value={password}
                        style={{padding:10, fontSize:17, fontWeight:'900'}}
                        placeholder='password'
                        secureTextEntry={isSecure}
                      />
                        </View>
                      <View>
                      <TouchableOpacity
                          onPress={()=>{setSecure(!isSecure)}}
                        >
                          {
                            isSecure?(
                              <Ionicons name='eye-outline' size={30} color='grey' style={{fontWeight:'900'}}/>
                            ):(
                              <Ionicons name='eye-off-outline' size={30} color='grey' style={{fontWeight:'900'}}/>
                            )
                          }
                        
                        </TouchableOpacity>
                      </View>
                      
                    </View>
                    
                    <TouchableOpacity
                      style={{
                        alignItems:'center',
                        justifyContent:'center',
                        marginTop:35,
                        marginLeft:Dimensions.get('window').width/6,
                        backgroundColor:'#0077b5',
                        padding:18, 
                        color:'white',
                        width:Dimensions.get('window').width/2
                      }}
                    >
                      <Text style={{color:'white', fontSize:15, fontWeight:'900'}}>Register</Text>
                    </TouchableOpacity>
                  </View>
                </View>
  )
}
function ResetMail({email,setEmail, isReset, setReseting}){
  return(
    <View style={{marginTop: 40}}>
                  <View>
                    <View
                      style={{
                        borderColor:'gray', 
                        borderWidth:1, 
                        borderRadius:10,
                        padding:8,
                        marginBottom:20
                      }}
                    >
                      <TextInput 
                        editable
                        onChangeText={text=>setEmail(text)}
                        value={email}
                        style={{padding:10, fontSize:17, fontWeight:'900'}}
                        placeholder='johndoe@gmail.com'
                      />
                    </View>
                    
                    
                    <TouchableOpacity
                      style={{
                        alignItems:'center',
                        justifyContent:'center',
                        marginTop:35,
                        marginLeft:Dimensions.get('window').width/6,
                        backgroundColor:'#0077b5',
                        padding:18, 
                        color:'white',
                        width:Dimensions.get('window').width/2
                      }}
                    >
                      <Text style={{color:'white', fontSize:15, fontWeight:'900'}}>Send </Text>
                    </TouchableOpacity>
                  </View>
                </View>
  )
}
export default function Account({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPsd] = useState('');
  const [keyboardStatus, setKeyboardStatus] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [isReset, setIsReset] = useState(false)
  const [isSecure, setSecure] = useState(true);
  const dispatch = useDispatch();
  const {loading, error, } = useSelector(state=>state.auth)
  
  return (
   
       
          <ScrollView 
          
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text>Hello</Text>
          </View>
        </ScrollView>
        
    
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
  },
  brandContainer:{
    justifyContent:'center', 
    flex:1,
    alignItems:'center'
  },
  brandText:{
    color:'#ffffff',
    fontSize:30,
    fontWeight:'bold',
    textTransform:'uppercase',
  },
  bottomView:{
    flex:1.5,
    backgroundColor: 'white',
    bottom: 50,
    borderTopStartRadius:60,
    borderTopEndRadius:60
  }
})