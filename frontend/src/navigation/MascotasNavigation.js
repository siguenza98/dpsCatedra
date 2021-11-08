import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MascotasIndex from '../screens/Mascotas/Index';
import MascotasCreate from '../screens/Mascotas/Create';
import MascotasEdit from '../screens/Mascotas/Edit';


const Stack = createNativeStackNavigator();

const MascotasNavigation = ({ route, navigation }) => {
    var usuario = route.params;
    return (
        <Stack.Navigator initialRouteName="MascotasIndex">
            <Stack.Screen options={{ headerShown: false }} name="MascotasIndex" component={MascotasIndex} initialParams={usuario}/>
            <Stack.Screen options={{ headerShown: false }} name="MascotasCreate" component={MascotasCreate} initialParams={usuario}/>
            <Stack.Screen options={{ headerShown: false }} name="MascotasEdit" component={MascotasEdit} initialParams={usuario}/>
        </Stack.Navigator>
    )
}

export default MascotasNavigation

const styles = StyleSheet.create({})
