
import React, { useState } from 'react'
import { StyleSheet,View,Text, Touchable, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Image, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import camera from '../assets/images/camera.jpg'
import { TextInput } from 'react-native-gesture-handler'
import { useEffect } from 'react'
import { Keyboard } from 'react-native'
import { Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Colors, StyledContainer } from '../config/styles'
import { SvgCssUri } from 'react-native-svg';
import stream from '../assets/icons/mobile-tv.png'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
import { loginUser } from '../redux/slices/AuthSlice'
function Login({email,setEmail, password, setPsd, isSecure, setSecure, setIsLogin, isLogin, isReset, setIsReset}){
  const dispatch = useDispatch();
  const [sub, setSub] = useState(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')
  useEffect(()=>{
    if(sub === true){
      const Login = ()=>{
        setLoading(true)
        fetch('https://rgcstreamapp.onrender.com/api/v1/users/login',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            email:email,
            password:password
          })
        }).then(response=>response.json())
        .then((data)=>{
          setLoading(false)
          if(data.error){
            setError(data.error)
          }else{
            setError(null)
            setUser(data.user)
          }
        })
        .catch(err=>{
          console.log(err)
        })
        
      }
      Login()
      setSub(false)
    }
  },[sub])
  
  return(
    <View
    >
   
        <View
        style={{
          width:Dimensions.get('window').width,
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <MyTextInput icon='mail' label='Email' placeholder='johndoe@gmail.com' onChangeText={(text)=>{setEmail(text)}}/>
        <MyTextInput icon='key' label='Password' isSecure={isSecure} secureTextEntry={isSecure} onChangeText={(text)=>{setPsd(text)}} setSecure={setSecure} placeholder='password'/>
        <View style={{marginTop:10, marginBottom:20}}>
          <TouchableOpacity  onPress={()=>{setIsLogin('Reset')}}>
            <Text style={{fontWeight:'800', alignSelf:'flex-end'}}>Forgot Password? <Text style={{color:'#0077b5'}}>Reset</Text></Text>
          </TouchableOpacity>
        </View>
        
        {
          error&&(
            <View
              style={{
                alignItems:'center',
                justifyContent:'center',
                marginBottom:20
              }}
            >
              <Text style={{
                color:'#990F02',
                fontWeight:'700'
              }}>{error}</Text>
            </View>
          )
        }
        {
          loading?(
            <ActivityIndicator color='blue' size={30}/>
          ):(
            <TouchableOpacity
          onPress={()=>{setSub(true)}}
          style={styles.StyledButton}
         
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
          )
        }
        <View style={{marginTop:10, marginBottom:20}}>
          <TouchableOpacity
            onPress={()=>{setIsLogin('Register')}}
          >
          <Text style={{fontWeight:'800'}}>Dont Have An Account? <Text style={{color:'#0077b5'}}>Register</Text></Text>
          </TouchableOpacity>
        </View>
        </View>
     
    </View>
  )
}
function Register({email,setEmail, password, setPsd, isSecure, setSecure,setIsLogin, isLogin}){
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const Reg = ()=>{
    setLoading(true)
    fetch('https://rgcstreamapp.onrender.com/api/v1/users/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:{
        email: JSON.stringify(email),
        password: JSON.stringify(password)
      }
    }).then(res=>res.json())
    .then((data)=>{
      setLoading(false)
      if(data.error){
        setError(data.error)
      }
      if(data.user){
        setError(null)
        console.log(data.user)
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  return(
   <View
    >
   
        <View
        style={{
          width:Dimensions.get('window').width,
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <MyTextInput icon='mail' label='Email' placeholder='johndoe@gmail.com' onChangeText={(text)=>{setEmail(text)}}/>
        <MyTextInput icon='key' label='Password' isSecure={isSecure} secureTextEntry={isSecure} onChangeText={(text)=>{setPsd(text)}} setSecure={setSecure} placeholder='password'/>
        <View style={{marginTop:10, marginBottom:20}}>
          <TouchableOpacity  onPress={()=>{setIsLogin('Login')}}>
            <Text style={{fontWeight:'800', alignSelf:'flex-end'}}>Already Have An Account? <Text style={{color:'#0077b5'}}>Login</Text></Text>
          </TouchableOpacity>
        </View>
        
        {
          error&&(
            <View
              style={{
                alignItems:'center',
                justifyContent:'center',
                marginBottom:20
              }}
            >
              <Text style={{
                color:'#990F02',
                fontWeight:'700'
              }}>{error}</Text>
            </View>
          )
        }
        {
          loading?(
            <ActivityIndicator style={{fontWeight:'bold'}} color='blue' size={30}/>
          ):(
            <TouchableOpacity
          onPress={Reg}
          style={styles.StyledButton}
         
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
          )
        }
        
        </View>
     
    </View>
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
            onPress={()=>{setIsLogin('Login')}}
          >
          <Text style={{fontWeight:'800'}}>Already Have An Account? <Text style={{color:'#0077b5'}}>Login</Text></Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.StyledButton}
        >
          <Text style={styles.buttonText}>Reset Password</Text>
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
  const [isLogin, setIsLogin] = useState('Login');
  const [isReset, setIsReset] = useState(false)
  const [isSecure, setSecure] = useState(true);
  const dispatch = useDispatch();
  const {loading, error, } = useSelector(state=>state.auth)
  

  useEffect(()=>{
    
  })
  return (
   
       
          <ScrollView 
          
          showsVerticalScrollIndicator={false}
        >
          <StatusBar style='light' hidden={true}/>
          <SafeAreaView
            
          >
            <View
            style={{
              marginRight:15
            }}
            >
            <View
                style={{
                  alignSelf:'flex-end',
                  margin:6,
                  position:'relative',
                  marginTop:15
                }}
              >
                <TouchableOpacity
                  style={{
                    width:40,
                    height:40,
                    borderRadius:20,
                    alignItems:'center',
                    backgroundColor:Colors.secondary
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
                    width:80,
                    height:80
                  }}
                  source={stream}
                  />
                  <Text style={styles.pageTitle}>Rgc Stream</Text>
                  {
                    isLogin==='Login' &&(
                      <Text style={styles.subTitle}>Account Login</Text>
                    )
                  }
                  {
                    isLogin==='Register' &&(
                      <Text style={styles.subTitle}>Account Register</Text>
                    )
                  }
                  {
                    isLogin==='Reset' &&(
                      <Text style={styles.subTitle}>Account Reset</Text>
                    )
                  }
                  
                 </View>
                  
                  {
                    isLogin === 'Login' &&(
                    
                       <Login 
                        email={email}
                        setEmail={setEmail} 
                        password={password}
                        setPsd={setPsd}
                        isReset={isReset}
                        setIsReset={setIsReset}
                        isSecure={isSecure}
                        setSecure={setSecure}
                        setIsLogin={setIsLogin}
                        isLogin={isLogin}
                      />
                   
                     
                    )
                  }
                  {
                    isLogin === 'Register' &&(
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
                  isLogin === 'Reset' &&(
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