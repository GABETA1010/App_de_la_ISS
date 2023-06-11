import React, { Component } from 'react';
import { Text, 
    View, 
    ImageBackground, 
    SafeAreaView, 
    StyleSheet,
    Platform
} from 'react-native';
import MapView,{Marker} from "react-native-maps";


export default class IssLocationScreen extends Component {

constructor(props){
    super(props);
    this.state({
        location : {}
    })
}

getIssLocation = () =>{
   axios.get("https://api.wheretheiss.at/v1/satellites/25544.")
   .then(response => {
    this.setState({
        location : response.data 
    })
   .catch(error => {
    Alert.alert(error.message)
   })
   })
}

componetDidMount(){
    this.getIssLocation()
}

    render() {
        if (Object.keys(this.state.location).lenght === 0) {
           return(
             <View style = {{flex : 1, justifyContent : "center", alignItems : "center"}}>
                <Text>
                    Cargando espere por favor
                </Text>
             </View>
           )
        }
        return (
        <View style = {styles.container}>
          <SafeAreaView style = {styles.droidSafeArea}>
          <ImageBackground source = {require("../assets/bg.png")}>
             <View style ={styles.titleContainer}>
                <Text style = {styles.titleText}>Pantalla de localización EEI</Text>
             </View>
             <View style = {styles.mapContainer}>
                <MapView style = {styles.map}
                region = {{
                    latitude  : this.state.location.latitude,
                    longitude : this.state.location.longitude,
                    latitudDelta : 100,
                    longitudeDelta : 100,
                }}>
                    <Marker coordinate = {{
                        latitude  : this.state.location.latitude,
                        longitude : this.state.location.longitude
                    }}>
                        <Image style = {{width :50, height : 50}} source = {require("../assets/iss_icon.png")}/>
                    </Marker>
                </MapView>
             </View>
             <View style = {styles.infoContainer}>
               <Text style = {styles.infoText}> latitude : {this.state.location.latitude} </Text>
               <Text style = {styles.infoText}> longitude : {this.state.location.longitude} </Text>
               <Text style = {styles.infoText}> altitude (Km) : {this.state.location.altitude} </Text>
               <Text style = {styles.infoText}> velocity(Km/h) : {this.state.location.velocity} </Text>
             </View>
          </ImageBackground>
          </SafeAreaView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    mapContainer: {
        flex: 0.7
    },
    map: {
        width: "100%",
        height: "100%"
    },
    infoContainer: {
        flex: 0.2,
        backgroundColor: 'white',
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    infoText: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold"
    }
})