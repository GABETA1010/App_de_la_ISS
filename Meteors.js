import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from "axios"

export default class MeteorScreen extends Component {

    constructor(props){
        super(props);
        this.state({
          meteors : {} 
        })
    }

    getMeteors = ()=>{
        axios.get("https://api.nasa.gov/neo/rest/v1/feed?api_key=G4cZ2xfKVEg7y473TbtYGrsj7tBsNLkI3iOeWHpR")
        .then()
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>¡Pantalla de Meteoritos!</Text>
            </View>
        )
    }
}
