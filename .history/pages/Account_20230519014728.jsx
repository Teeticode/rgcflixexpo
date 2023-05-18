
import React, { useState } from 'react'
import { StyleSheet,View,Text, Touchable, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import camera from '../assets/images/camera.jpg'
import { TextInput } from 'react-native-gesture-handler'
import { useEffect } from 'react'
import { Keyboard } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Colors, StyledContainer } from '../config/styles'
import { SvgCssUri } from 'react-native-svg';
import stream from '../assets/images/stream.png'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
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
          <StatusBar style='dark'/>
          <SafeAreaView>
            <View
                style={{
                  alignSelf:'flex-end',
                  margin:6
                }}
              >
                <TouchableOpacity
                  style={{
                    width:40,
                    height:40,
                    borderRadius:20,
                    backgroundColor:Colors.secondary,
                    alignItems:'center'
                  }}
                  onPress={()=>{navigation.replace('Home')}}
                >
                <Ionicons
                  name="close-outline"
                  size={35}
                  color='grey'
                  style={{alignSelf:'center'}}
                />
                </TouchableOpacity>
            </View>
            <View
              style={styles.container}
            >
              <ScrollView>
                <View style={styles.innerContainer}>
                  <Image style={{
                    width:Dimensions.get('window').width/2.5,
                    height:Dimensions.get('window').height/4.5
                  }}
                  source={stream}
                  />
                  <Text style={styles.pageTitle}>Stream Fast</Text>
                  <Text style={styles.subTitle}>Account Login</Text>
                  
                    <Formik
                      initialValues={{email:'', password:''}}
                      onSubmit={(values)=>{
                        console.log(values)
                      }}
                    >
                      {({handleChange, handleBlur, handleSubmit, values})=>(
                        <View
                        style={{width:'90%'}}
                      >
                        <MyTextInput/>
                        </View>
                      )}
                    </Formik>
                  
                </View>
              </ScrollView>
              
            
            </View>
      
          </SafeAreaView>
        </ScrollView>
        
    
  )
}
const MyTextInput = ({label, icon, ...props})=>{
  return(
    <View>
      <TextInput style={styles.myInput}/>
    </View>
  )
} 

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    padding:10,
    backgroundColor: Colors.primary
  },
  innerContainer:{
    flex:1,
    width:'100%',
    alignItems:'center'
  },
  pageTitle:{
    fontSize:30,
    textAlign:'center',
    fontWeight:'bold',
    color:Colors.brand,
    padding:10
  },
  subTitle:{
    fontSize:18,
    marginBottom:20,
    letterSpacing:1,
    fontWeight:'bold',
    color:Colors.tertiay
  },
  myInput:{
    backgroundColor:Colors.secondary,
    padding:10,
    borderRadius:5,
    fontSize:16,
    height:60,
    marginVertical:3,
    marginBottom:10,
    color:Colors.tertiay
  },
  myInputLabel:{
    color:Colors.tertiay,
    fontSize:13,
    textAlign:'left'
  }
})