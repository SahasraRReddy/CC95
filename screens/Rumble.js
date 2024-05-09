import React  from "react";
import { Text,View,Image,TouchableOpacity,StyleSheet } from 'react-native'

export default class Rumble extends React.Component{
    render(){
        return(
            <View><TouchableOpacity style={styles.imagebutton}>
                <Image source={require("../assets/GS_1.jpg")}/>
                </TouchableOpacity>
                </View>
        )
    }
}

const styles =StyleSheet.create({
   imagebutton:{
        width:100,
        height:500,
       
        justifyContent:'center',
        alignItems:'center',
       
        borderWidth:1,
    
    
        marginTop:40,
        
        
    },
})