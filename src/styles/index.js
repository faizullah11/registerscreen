

 
  import {
    StyleSheet
  } from 'react-native';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


 const styles = StyleSheet.create({
    container: {
      flex:1,
      width:wp(100),
      height:hp(100),
      alignItems:'center',
     // justifyContent:'center'
    },
    loginButton1:{
    width:wp(70),
    height:hp(7),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#EFB140',
    borderRadius:hp(2),
    marginTop:hp(5),
    alignSelf:'center'
    },
    loginButton2:{
        width:wp(70),
        height:hp(7),
        alignItems:'center',
        justifyContent:'center',
      //  backgroundColor:'white',
        borderRadius:hp(2),
        marginTop:hp(3),
        alignSelf:'center'
        },
        loginButton3:{
            width:wp(70),
            height:hp(7),
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#BDCAC4',
            borderRadius:hp(2),
            marginTop:hp(3),
            alignSelf:'center'
            },
    buttonTitle: {
      fontSize: RFPercentage(2.5),
      fontWeight: '400',
      color:'white'
    },
    buttonTitle2: {
        fontSize: RFPercentage(2.5),
        fontWeight: '400',
        color:'#004425'
      },
    loginInput:{
        flexDirection:'row',
       borderColor:'#900',
        borderRadius:hp(2),
       borderWidth:1,
        alignItems:'center',
        backgroundColor:'#BDCAC4',
        marginTop:hp(3)

    }
  });

  export default styles;

// import styled from 'styled-components/native';


// export const Container = styled.View`
// 	flex: 1;
//     width: 100%;
//     alignItems: center;
//     justifyContent: center;
//     marginBottom: 60px;
// `;

// export const Button= styled.Button`
//     flex: .6;
//     alignItems: center;
//     justifyContent: center;
//     alignSelf:center;
//     marginBottom: 60px;
// `;



// export const Background = styled.Image`
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;

// `;

// export const CardContainer = styled.ScrollView`
//     width: 100%;
//     height: 100%;
//     marginTop: 24;
// `;