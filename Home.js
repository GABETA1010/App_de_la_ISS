import React, { Component } from 'react';
import { Text, View, TouchableOpacity,
Image, ImageBackground, StyleSheet, SafeAreaView,
Platform, StatusBar} from 'react-native';
import { beginAsyncEvent } from 'react-native/Libraries/Performance/Systrace';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style = { styles.container}>
                <SafeAreaView style = {styles.droidSafeArea}>
                <ImageBackground source = {require("../assets/bg.png")} style = {styles.backgroundImage}>
                  <View styles = {styles.titleBar}>
                    <Text styles = {styles.titleText}>
                       La ISS y su importancia
                    </Text>
                  </View> 

                  <TouchableOpacity style = {styles.rootCard} onPress = {() => this.props.navigation.navigate("ISS location")}>
                     <Image source = {require("../assets/iss_icon.png")} style = {styles.iconImage}/>
                     <Text style = {styles.rootText}>Ubicación en tiempo real de la ISS</Text>
                     <Text style = {styles.knowMore}> {"Para saber más --->"} </Text>
                     <Text style = {styles.bgDigit}> 1 </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {styles.rootCard} onPress = {() => this.props.navigation.navigate("Meteors")}>
                     <Image source = {require("../assets/meteor_icon.png")} style = {styles.iconImage}/>
                     <Text style = {styles.rootText}>¿Que tan cerca puede estar un meteorito?</Text>
                     <Text style = {styles.knowMore}> {"Para saber más --->"} </Text>
                     <Text style ={styles.bgDigit}> 2 </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {styles.rootCard} onPress = {() => this.props.navigation.navigate("Updates")}>
                     <Image source = {require("../assets/blog_icon.png")} style = {styles.iconImage}/>
                     <Text style = {styles.rootText}>Noticias hacerca de la ISS y su trabajo</Text>
                     <Text style = {styles.knowMore}> {"Para saber más --->"} </Text>
                     <Text style ={styles.bgDigit}> 3 </Text>
                  </TouchableOpacity>
                </ImageBackground>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center" 
    }, 
    droidSafeArea : {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar : {
        flex: 0.15, 
        justifyContent: "center", 
        alignItems: "center"
    },
    titleText : {
        ontSize: 40, 
        fontWeight: "bold", 
        color: "white"
    },
    rootCard : {
        flex: 0.25, 
        marginLeft: 100, 
        marginRight: 100, 
        marginTop: 100, 
        borderRadius: 30, 
        backgroundColor: 'white'
    },
    backgroundImage : {
        flex: 1, 
        resizeMode: 'cover',
    },
    iconImage : {
        position: "absolute", 
        height: 200, width: 200, 
        resizeMode: "contain", 
        right: 20, 
        top: -80
    },
    knowMore : {
        paddingLeft: 30, 
        color: "red", 
        fontSize: 15
    },
    bgDigit : {
        position: "absolute", 
        color: "rgba(183, 183, 183, 0.5)", 
        fontSize: 150, 
        right: 20, 
        bottom: -15, 
        zIndex: -1
    },
    rootText : {
        fontSize: 35, 
        fontWeight: "bold", 
        color: "black", 
        marginTop: 75, 
        paddingLeft: 30
    }
})