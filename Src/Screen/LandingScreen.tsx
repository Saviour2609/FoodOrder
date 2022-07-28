import React, { useState, useReducer, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import * as Location from 'expo-location';

import {connect} from 'react-redux'
import {onUpdateLocation,UserState,Applicationstate} from '../Redux'

import { useNavigation } from '../Utils';


const screenWidth = Dimensions.get('screen').width

 const _LandingScreen = () => {

    const { navigate } = useNavigation()


    const [errorMsg, setErrorMsg] = useState("")
    const [address, setAddress] = useState<Location.Address>()
    const [displayAddress, setDisplayAddress] = useState("Waiting for Current Location")

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted'){
                setErrorMsg('Permission to access location is not granted')
            }
            let location: any = await Location.getCurrentPositionAsync({});
            const { coords } = location
            if(coords){
                const { latitude, longitude} = coords;
                let addressResponse: any = await Location.reverseGeocodeAsync({ latitude, longitude})
                for(let item of addressResponse){
                    setAddress(item)
                    let currentAddress = `${item.name},${item.street}, ${item.postalCode}, ${item.country}`
                    setDisplayAddress(currentAddress)

                    if(currentAddress.length > 0){
                        setTimeout(() =>{
                            navigate('homeStack')
                        }, 2000)
                    }


                    return;
                }


            }else{
                //notify user something went wrong with location
            }

        })();



    }, [])

    return (

        <View style={styles.container}>
            <View style={styles.navigation} />

            <View style={styles.body}>
                <Image source={require('../Images/delivery_icon.png')} style={styles.deliveryIcon} />
                <View style={styles.addressContainer}>
                    <Text style={styles.addressTitle}>Your Delivery Address</Text>
                </View>
                <Text style={styles.addressText}>{displayAddress}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(242,242,242,1)'
    },
    navigation: {
        flex: 2,
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deliveryIcon: {
        width: 120,
        height: 120
    },
    addressContainer: {
        width: screenWidth - 100,
        borderBottomColor: 'red',
        borderBottomWidth: 0.5,
        padding: 5,
        marginBottom: 10,
        alignItems: 'center',

    },
    addressTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#7D7D7D'
    },
    addressText: {
        fontSize: 20,
        fontWeight: '200',
        color: '#4F4F4F'
    },



})


// const mapToStateProps = (state: Applicationstate) => ({
//     userReducer: state.useReducer
// })

// const LandingScrreen = connect(mapToStateProps, { onUpdateLocation })(_LandingScreen)

// export {LandingScrreen}