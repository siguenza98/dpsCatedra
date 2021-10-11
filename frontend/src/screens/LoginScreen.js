import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState(' ');

    const handleLogin = () => {
        setErrorText(" ");
        //Conexion a la api
        fetch('http://127.0.0.1:8000/api/login', { 
            method: 'POST', 
            headers: { 
                Accept: 'application/json', 
                'Content-Type': 'application/json' }, 
            body: JSON.stringify({ 
                //datos enviados por post
                correo: correo, 
                password: password 
            }) 
        })
        .then((response)=>response.json())
        .then((json)=>{
            if(json.length != 0){
                storeLogin(json);
            }
        })
        .catch((error)=>{
            setErrorText("Correo o contraseña incorrecta");
        });
    }

    const storeLogin = async (usuario) =>{
        //guardando datos de sesion
        await AsyncStorage.setItem('@logueado', "True");
        await AsyncStorage.setItem('@usuario', JSON.stringify(usuario));
        navigation.navigate("UsuarioHome", usuario);
    }

    return (
        <>
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Image 
                style={{height: 100, width: 300, marginBottom: 40}}
                source={require('../img/logo.png')}
            />
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Correo Eléctronico</Text>
                <TextInput
                    onChangeText={text => setCorreo(text)}
                    style={styles.input}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Contraseña</Text>
                <TextInput
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <Text style={styles.errorText}>{errorText}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.buttonOutline]}
                    onPress={() => navigation.navigate('Registrarse')}
                >
                    <Text style={styles.buttonOutlineText}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </>
    )
}

export default LoginScreen

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
    labelInput:{
        fontWeight: 500,
        color:"#505050"
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
    errorText:{
        color: "#f44336",
        fontWeight: 700,
        fontSize: 21,
        alignSelf: 'center'
    }
})
