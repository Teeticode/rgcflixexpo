
import React, { useState } from 'react'
import { StyleSheet,View,Text, Touchable, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import camera from '../assets/images/camera.jpg'
import { TextInput } from 'react-native-gesture-handler'
import { useEffect } from 'react'
import { Keyboard } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux'

function Login({email,setEmail, password, setPsd, isSecure, setSecure}){
  return(
    <View style={{marginTop: 40}}>
                  <View>
                    <View
                      style={{
                        borderColor:'gray', 
                        borderWidth:1, 
                        borderRadius:10,
                        padding:4,
                        marginBottom:20,
                        backgroundColor:'lightgray'
                      }}
                    >
                      <TextInput 
                        editable
                        onChangeText={text=>setEmail(text)}
                        value={email}
                        style={{padding:10, fontSize:17, fontWeight:'900', color:'black'}}
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
          <ImageBackground 
            source={camera}
            style={{height:Dimensions.get('window').height/2.5}}
            blurRadius={5}>
              <View
                style={styles.brandContainer}
              >
                <Image
                  source={require('../assets/icons/tv.png')}
                  style={{width:80,height:80}}
                 />
              </View>
          </ImageBackground>
          {/**Bottom View */}
          <View style={styles.bottomView}>
            {/**Welcome View */}
            <View
              style={{padding:30}}
            >
                <Text style={{
                  color:'grey',
                  alignItems:'center',
                  justifyContent:'center', 
                  alignSelf:'center', 
                  fontSize:30, 
                  fontWeight:'600',
                  marginBottom:10
                }}>RGC FLIX</Text>
                <View
                  style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}
                >
                    <View>
                      {
                        isLogin?(
                          <Text style={{fontWeight:'800', alignSelf:'center'}}>
                          Don't have an account?
                          </Text>
                        ):(
                          <Text style={{fontWeight:'800', alignSelf:'center'}}>
                          Already have an account?
                          </Text>
                        )
                      } 
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={()=>{setIsLogin(!isLogin)}}
                      >
                        
                            <>
                                  {
                              isLogin?(
                                    <Text style={{fontSize:15,fontWeight:'600',color:'#0077b5', fontStyle:'italic'}}>
                                {' '}
                                Register Now
                              </Text>
                                  ):(
                                    <Text style={{fontSize:15,fontWeight:'600',color:'#0077b5', fontStyle:'italic'}}>
                                {' '}
                                Login Now
                              </Text>
                                )}
                            </>
                          
                        
                      
                      </TouchableOpacity>
                    
                    </View>
                </View>
                
                    
                      
                 
                  
                
                {/***Form Inputs */}
                {
                  isLogin?(
                    <Login 
                      email={email} 
                      setEmail={setEmail}
                      password={password}
                      setPsd={setPsd}
                      isSecure={isSecure} 
                      setSecure={setSecure}/>
                  ):(
                    <Register 
                      email={email} 
                      setEmail={setEmail}
                      password={password}
                      setPsd={setPsd} 
                      isSecure={isSecure} 
                      setSecure={setSecure}/>
                  ) 
                }
            </View>
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