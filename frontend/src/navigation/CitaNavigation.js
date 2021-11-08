import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CitasIndex from '../screens/Cita/Index';
import CitasCreate from '../screens/Cita/Create';
import CitasDetalles from '../screens/Cita/Detalles';



const Stack = createNativeStackNavigator();

const CitasNavigation = ({ route, navigation }) => {
    var usuario = route.params;
    return (
        <Stack.Navigator initialRouteName="CitasIndex">
            <Stack.Screen options={{ headerShown: false }} name="CitasIndex" component={CitasIndex} initialParams={usuario}/>
            <Stack.Screen options={{ headerShown: false }} name="CitasCreate" component={CitasCreate} initialParams={usuario}/>
            <Stack.Screen options={{ headerShown: false }} name="CitasDetalles" component={CitasDetalles} initialParams={usuario}/>
        </Stack.Navigator>
    )
}

export default CitasNavigation

const styles = StyleSheet.create({})
