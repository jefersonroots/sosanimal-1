import {StyleSheet} from 'react-native';
import { Platform } from 'react-native';
import {KeyboardAvoidingView} from 'react-native';


export default StyleSheet.create({

    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#E5ECE8',
    },
    logo: {
      width:150,
      height:150,
      borderRadius:60
      
    },
    LogoView:{
        borderRadius:50,
        padding:20,
    },
    input:{
      marginTop:20,
      padding:10,
      width:250,
      height:50,
      backgroundColor:'#ffff',
      fontSize:16,
      fontWeight:'bold',
      borderRadius:3
    },
    botao:{
      width:180,
      height:50,
      backgroundColor:'#FF4500',
      marginTop:20,
      borderRadius:4,
      alignItems:'center',
      justifyContent:'center'
      
    },
    botaoText:{
      fontSize:18,
      fontWeight:'bold',
      color:'#ffff',
    },
    botaoTextReg:{
      fontSize:18,
      fontWeight:'bold',
      color:'#fff',
    }
    
     });
    
