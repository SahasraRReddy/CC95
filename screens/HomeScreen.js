
import React from 'react'
import { Text,View,StyleSheet,SafeAreaView, Platform,StatusBar,TouchableOpacity,Image } from 'react-native'


export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style= {styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style = {styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>Geronimo Stilton</Text>
                    
                    </View> 
                    <View style={{alignItems:'center',marginLeft:400,}}>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Rumble")}>
                        <Text style={styles.buttonText}>Rumble in The Jungle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>The Secret Of The Cacklefur Castle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Play It Again Mozart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Field Trip To Niagara Falls</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>A Very Merry Christmas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Bollywood Burglary</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Geronimo Stilton,Secret Agent</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>The Way Of The Samurai</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>The Sticky Situation</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>The Stinky Cheese Vacation</Text>
                        </TouchableOpacity>
                        </View>
                        
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{
        marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
    },
    appTitleTextContainer:{
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        marginLeft:400,
        backgroundColor:'#000033'
        

    },
    appTitleText:{
        fontSize:28,
        color:'white',

    },
    button:{
        width:500,
        height:100,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
       
        borderWidth:1,
        borderColor:'blue',
        backgroundColor:'#000033',
        marginTop:40,
        
        
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    }
})
