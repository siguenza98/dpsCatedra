import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, KeyboardAvoidingView, TouchableOpacity } from 'react-native'

const Index = ({ route, navigation }) => {
    const [tipos, setTipos] = useState([]);
    useEffect(() => {
        getTipos();
    }, []);

    const getTipos = () => {

        //Conexion a la api
        fetch('http://127.0.0.1:8000/api/vetya-tipousuarios', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then((response) => response.json())
        .then((json) => {
            if (json.length != 0) {
                setTipos(json);
                console.log(json);
            }
        })
        .catch((error) => {
            setErrorText("Error al obtener los datos.");
        });
    }

    const editarTipo = (idTipo)=>{
        alert(idTipo);
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">
            <FlatList
                data={tipos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.detalle}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>editarTipo(item.id.toString())}
                        >
                            <Text  style={styles.buttonText}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </KeyboardAvoidingView>
    )
}

export default Index

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
    titulo: {
        fontSize: 35,
        color: 'white',
        fontWeight: 700
    }
})

