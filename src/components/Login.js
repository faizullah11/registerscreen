/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';

 import {
 
   Text, 
    TouchableOpacity,
    TextInput,
   View,
 } from 'react-native';
 import Icon from 'react-native-vector-icons/dist/AntDesign';//Fontisto
 import Fontisto from 'react-native-vector-icons/dist/Fontisto';//Ionicons
 import Ionicons from 'react-native-vector-icons/dist/Ionicons';

 
 import {
   Colors,

 } from 'react-native/Libraries/NewAppScreen';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 
 
 import styles from '../styles';


 
 const Login = ()=> {
     let [changeColor,setChangecolor]=useState(0);
     let [changeColor2,setChangecolor2]=useState(0);
     let [changeColor3,setChangecolor3]=useState(0);
     let [changeColor4,setChangecolor4]=useState('');

    let onChange1=(opt)=>{
        if(opt==1){
            setChangecolor(1);
        }else if(opt==2){
            setChangecolor2(1);
        }else{
            setChangecolor3(1);
        }
      
       
     }
     let onChange2=(opt)=>{
        if(opt==1){
            setChangecolor(0);
        }else if(opt==2){
            setChangecolor2(0);
        }else{
            setChangecolor3(0);
        }
     
     }
     let changeLoginColor=()=>{
        setChangecolor4('#d3d3d3')
     }

     
 // Faiz ullah
   return (
     <View style={styles.container}>
         <View style={{left:wp(90),top:hp(2),width:wp(100),height:hp(6)}}>
         <Icon 
             name="arrowright" 
             size={20} 
             color="#900"
           />
         </View>
       
         <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
         <Text
         style={[
           styles.sectionDescription,
           {
             color: Colors.dark,fontWeight:'bold',marginTop:hp(4)
           },
         ]}>
      New Account
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: Colors.dark,
             marginTop:5
           },
         ]}>
        Welcome please create an account
       </Text>
         </View>
         <View>
             <View style={{
                     flexDirection:'row',
                     borderColor:'#900',
                      borderRadius:hp(2),
                      borderWidth:changeColor,
                      alignItems:'center',
                      backgroundColor:'#BDCAC4',
                      marginTop:hp(3),
                      width:wp(80),
                      alignSelf:'center'
             }}
             ><Icon style={{marginLeft:5}}
             name="user" 
             size={20} 
             color="#900"
           />   
             <TextInput  style={{width:wp(70)}}
             placeholder='Full Name'
              placeholderTextColor= '#004425'
             // onChange={onChange1}
             onFocus={()=>onChange1(1)}
             onEndEditing={()=>onChange2(1)}
              />
             </View>
             <View style={{
                     flexDirection:'row',
                     borderColor:'#900',
                      borderRadius:hp(2),
                      borderWidth:changeColor2,
                      alignItems:'center',
                      backgroundColor:'#BDCAC4',
                      marginTop:hp(3),
                      width:wp(80),
                      alignSelf:'center'
             }}
             >
             <Fontisto style={{marginLeft:5}}
             name="email" 
             size={20} 
             color="#900"
           />   
            <TextInput  style={{width:wp(70)}}
             placeholder='Email'
             placeholderTextColor= '#004425'
             onFocus={()=>onChange1(2)}
             onEndEditing={()=>onChange2(2)}
             />
             </View>
             <View style={{
                     flexDirection:'row',
                     borderColor:'#900',
                      borderRadius:hp(2),
                      borderWidth:changeColor3,
                      alignItems:'center',
                      backgroundColor:'#BDCAC4',
                      marginTop:hp(3),
                      width:wp(80),
                      alignSelf:'center'
             }}>
             <Ionicons style={{marginLeft:5}}
             name="lock-closed-outline" 
             size={20} 
             color="#900"
           />   
             <TextInput  style={{width:wp(64)}}
             placeholder='Password'
             placeholderTextColor= '#004425'
             onFocus={()=>onChange1(3)}
             onEndEditing={()=>onChange2(3)}
             />
             <Icon style={{marginLeft:5}}
             name="eyeo" 
             size={20} 
             color="#900"
           />
             </View>

             <View style={{flexDirection:'row',marginTop:hp(3),width:wp(80),alignSelf:'center',justifyContent:'center' }}>
                 <Text  style={{color:'#004425'}}>By Continueing you agree to our</Text>
                 <Text style={{color:'blue'}} > terms and user polycies</Text>
             </View>
            
             <TouchableOpacity style={styles.loginButton1}>
             <Text style={styles.buttonTitle}>
                    SignUp
             </Text>
             </TouchableOpacity>

        
             <Text style={{color:'#004425',textAlign:'center',marginTop:hp(2)}}>
                    OR sign up with
             </Text>
           


             <TouchableOpacity style={[styles.loginButton2,{backgroundColor:changeColor4}]}
             onPress={()=>changeLoginColor()}
            //onFocus={()=>changeLoginColor()}
             >   
             <Text style={styles.buttonTitle2}>
                    Sign up with google
             </Text>
             </TouchableOpacity>
         
             <View style={{flexDirection:'row',alignSelf:'center',marginTop:hp(10)}}>
                 <Text  style={{color:'#004425'}}>Already have an account</Text>
                 <Text style={{color:'#EFB140'}} > Login</Text>
             </View>

         </View>

     
     </View>
   );
 };
 
 
 export default Login;
 