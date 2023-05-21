
import React, { useState } from 'react'
import { StyleSheet,View,Text, Touchable, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import camera from '../assets/images/camera.jpg'
import { TextInput } from 'react-native-gesture-handler'
import { useEffect } from 'react'
import { Keyboard } from 'react-native'
import { Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Colors, StyledContainer } from '../config/styles'
import { SvgCssUri } from 'react-native-svg';
import stream from '../assets/images/stream.png'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
function Login({email,setEmail, password, setPsd, isSecure, setSecure, setIsLogin, isLogin}){
  return(
    <Formik
      initialValues={{email:'', password:''}}
      onSubmit={(values)=>{
        console.log(values)
      }}
    >
      {({handleChange, handleBlur, handleSubmit, values})=>(
        <View
        style={{
          width:'100%',
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <MyTextInput icon='mail' label='Email' placeholder='johndoe@gmail.com'/>
        <MyTextInput icon='key' label='Password' isSecure={isSecure} secureTextEntry={isSecure} setSecure={setSecure} placeholder='password'/>
        <View style={{marginTop:10, marginBottom:20}}>
          <TouchableOpacity
            onPress={()=>{setIsLogin(!isLogin)}}
          >
          <Text style={{fontWeight:'800'}}>Dont Have An Account? <Text style={{color:'#0077b5'}}>Register</Text></Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          
          style={styles.StyledButton}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        </View>
      )}
    </Formik>
  )
}
function Register({email,setEmail, password, setPsd, isSecure, setSecure,setIsLogin, isLogin}){
  return(
    <Formik
      initialValues={{email:'', password:''}}
      onSubmit={(values)=>{
        console.log(values)
      }}
    >
      {({handleChange, handleBlur, handleSubmit, values})=>(
        <View
        style={{
          width:'100%',
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <MyTextInput icon='mail' label='Email' placeholder='johndoe@gmail.com'/>
        <MyTextInput icon='key' label='Password' isSecure={isSecure} secureTextEntry={isSecure} setSecure={setSecure} placeholder='password'/>
        <View style={{marginTop:10, marginBottom:20}}>
          <TouchableOpacity
            onPress={()=>{setIsLogin(!isLogin)}}
          >
          <Text style={{fontWeight:'800'}}>Already Have An Account? <Text style={{color:'#0077b5'}}>Login</Text></Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.StyledButton}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        </View>
      )}
    </Formik>
  )
}
function ResetMail({email,setEmail, isReset, setIsReset, isLogin, setIsLogin}){
  return(
    <Formik
      initialValues={{email:'', password:''}}
      onSubmit={(values)=>{
        console.log(values)
      }}
    >
      {({handleChange, handleBlur, handleSubmit, values})=>(
        <View
        style={{
          width:'100%',
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <MyTextInput icon='mail' label='Email' placeholder='johndoe@gmail.com'/>
        <View style={{marginTop:10, marginBottom:20}}>
          <TouchableOpacity
            onPress={()=>{setIsLogin(!isLogin)}}
          >
          <Text style={{fontWeight:'800'}}>Already Have An Account? <Text style={{color:'#0077b5'}}>Login</Text></Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.StyledButton}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        </View>
      )}
    </Formik>
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
                 <View
                  style={{alignItems:'center', justifyContent:'center', marginRight:16}}
                 >
                   <Image style={{
                    width:Dimensions.get('window').width/2.5,
                    height:Dimensions.get('window').height/4.5
                  }}
                  source={stream}
                  />
                  <Text style={styles.pageTitle}>Stream Fast</Text>
                  {
                    isLogin?(
                      <Text style={styles.subTitle}>Account Login</Text>
                    ):(
                      <Text style={styles.subTitle}>Account Register</Text>
                    )
                  }
                  
                 </View>
                  
                  {
                    isLogin&&(
                      <Login 
                        email={email}
                        setEmail={setEmail} 
                        password={password}
                        setPsd={setPsd}
                        isSecure={isSecure}
                        setSecure={setSecure}
                        setIsLogin={setIsLogin}
                        isLogin={isLogin}
                      />
                    )
                  }
                  {
                    !isLogin&&(
                      <Register
                        email={email}
                        setEmail={setEmail} 
                        password={password}
                        setPsd={setPsd}
                        isSecure={isSecure}
                        setSecure={setSecure}
                        setIsLogin={setIsLogin}
                        isLogin={isLogin}
                      />
                    )
                  }
                  {
                    isReset&&(
                      <ResetMail
                        email={email}
                        setEmail={setEmail} 
                        isReset={isReset}
                        setIsReset={setIsReset}
                        setIsLogin={setIsLogin}
                        isLogin={isLogin}
                      />
                    )
                  }
                  
                </View>
              </ScrollView>
              
            
            </View>
      
          </SafeAreaView>
        </ScrollView>
        
    
  )
}
const MyTextInput = ({setSecure,isSecure,label, icon, ...props})=>{
  return(
    <View
      style={{
        width:'80%',
        
      }}
    >
      <Octicons name={icon} style={styles.LeftIcon} size={25}/>
      <Text style={styles.myInputLabel}>{label}</Text>
    
          <TextInput style={styles.myInput} {...props} />
      
      
      {
        label === 'Password'&&(
          <TouchableOpacity onPress={()=>{setSecure(!isSecure)}} style={styles.RightIcon}>
           {isSecure?(
             <Ionicons name='eye-off' color='grey' size={25} />
           ):(
            <Ionicons name='eye' color='grey' size={25} />
           )}
          </TouchableOpacity>
        )
      }
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
    width: Dimensions.get('window').width,
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
    paddingLeft:55,
    paddingRight:55,
    borderRadius:5,
    fontSize:16,
    height:60,
    marginVertical:3,
    marginBottom:10,
    color:Colors.tertiay
  },
  myInputLabel:{
    color:Colors.tertiay,
    fontSize:15,
    textAlign:'left',
    fontWeight:'bold'
  },
  LeftIcon:{
    left:15,
    top:40,
    position:'absolute',
    zIndex:1
  },
  RightIcon:{
    right:15,
    top:40,
    position:'absolute',
    zIndex:1
  },
  StyledButton:{
    padding:15,
    backgroundColor:Colors.brand,
    justifyContent:'center',
    borderRadius:5,
    marginVertical:5,
    height:60,
    width:'50%',
    marginRight:10
  },
  buttonText:{
    color:Colors.primary,
    fontSize:16,
    alignSelf:'center'
  }
})