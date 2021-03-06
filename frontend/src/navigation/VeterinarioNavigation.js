import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CitasDisponibles from '../screens/Cita/Disponibles';
import CitasAgendadas from '../screens/Cita/Agendadas';
import CitasDetalles from '../screens/Cita/Detalles';




const Drawer = createDrawerNavigator();

const VeterinarioHome = ({ route, navigation }) => {
    //Obtiene el valor del usuario registrado
    const Drawer = createDrawerNavigator();
    var usuario = route.params;

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">   
            <Image
                style={{ height: 100, width: 300, marginBottom: 40 }}
                source={require('../img/logo.png')}
            />
            <Text style={styles.titulo}>Veterinarios</Text>
        </KeyboardAvoidingView>
    )
}

const CerrarSesion = ({ route, navigation }) => {
    useEffect(() => {
        logout();
    }, []);
    
    const logout = async () => {  
        try {   
            await AsyncStorage.removeItem('@logueado');
            await AsyncStorage.removeItem('@usuario').then(navigation.navigate('Login'));            
            
        } catch(e) {   
            console.log(e);
        }
    }
    return(<></>);
}

const VeterinarioNavigation = ({ route, navigation }) => {
    var usuario = route.params;
    return ( 
        <Drawer.Navigator initialRouteName="VeterinarioHome">
            <Drawer.Screen name="Inicio" component={VeterinarioHome} initialParams={usuario}/>
            <Drawer.Screen name="Citas Disponibles" component={CitasDisponibles} initialParams={usuario}/>
            <Drawer.Screen name="Citas Agendadas" component={CitasAgendadas} initialParams={usuario}/>
            <Drawer.Screen name="Citas Detalles" component={CitasDetalles} initialParams={usuario}/>

            <Drawer.Screen name="Cerrar Sesi??n" component={CerrarSesion} initialParams={usuario} options={{headerShown: false}}/>
        </Drawer.Navigator>
    )
}

export default VeterinarioNavigation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#b2dfdb"

    },
    inputContainer: {
        width: '80%'
    },
    labelInput: {
        fontWeight: 500,
        color: "#505050"
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 21
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    button: {
        backgroundColor: "#82ada9",
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: "#82ada9",
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: 700,
        fontSize: 16
    },
    buttonOutlineText: {
        color: "#82ada9",
        fontWeight: 700,
        fontSize: 16
    },
    errorText: {
        color: "#f44336",
        fontWeight: 700,
        fontSize: 21,
        alignSelf: 'center'
    },
    titulo:{
        fontSize: 35,
        color:'white',
        fontWeight: 700
    }
})

