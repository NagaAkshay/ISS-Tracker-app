import React,{Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native';
export default class HomeScreen extends Component{
    render(){
        return(
            <View 
            style = {styles.container}>
                <ImageBackground source = {require('../assets/bg.png')} style = {styles.backgroundImage}>
                    <View style = {styles.titleBar}>
                        <Text style = {styles.titleText}>ISS Tracker App</Text>
                    </View>
                    <TouchableOpacity style = {styles.routeCard} onPress = {()=> 
                        this.props.navigation.navigate("Iss Location")}>
                            <Text style = {styles.routeText}>ISS Location</Text>
                            <Text style = {styles.knowMore}>{"Know More ---> "}</Text>
                            <Text style = {styles.bgDigit}>1</Text>
                            <Image source = {require("../assets/iss_icon.png")} style = {styles.iconImage}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.routeCard} onPress = {()=> 
                        this.props.navigation.navigate("Meteors")}>
                            <Text style = {styles.routeText}>Meteors</Text>
                            <Text style = {styles.knowMore}>{"Know More ---> "}</Text>
                            <Text style = {styles.bgDigit}>2</Text>
                            <Image source = {require("../assets/meteor_icon.png")} style = {styles.iconImage}></Image>
                        </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },

    backgroundImage: {
        flex:1,
    },

    routeCard : {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderradius: 30,
        backgroundColor: 'white'
    },

    titleBar: {
        flex:0.15,
        jusifyContent: 'center',
        alignItems: "center",
    },

    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color:"white",
    },

    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30,
    },

    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15,
    },

    bgDigit: {
        color:"rgba(183,183,183,0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15, 
    },

    iconImage:{
        position: "absolute",
        height: 200,
        width: 200,
        right: 20,
        top: -80,
    } 
})