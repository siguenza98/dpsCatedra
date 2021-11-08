import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

const Index = ({ route, navigation }) => {
    const [mascotas, setMascotas] = useState([]);
    var usuario = route.params;


    const getMascotas = () => {
        //Conexion a la api
        fetch('http://127.0.0.1:8000/api/mismascotas', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                usuario_id: usuario.id,
            }) 
        })
        .then((response) => response.json())
        .then((json) => {
            if (json.length != 0) {
                setMascotas(json);
            }
        })
        .catch((error) => {
            alert("Error al obtener los datos.");
        });
    }


    const editMascota = (mascota) => {
        navigation.push('MascotasEdit', { usuario, mascota });
    }

    const addMascota= (mascota) => {
        navigation.push('MascotasCreate');
    }

    useEffect(() => {
        getMascotas();
    }, []);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">
            <Text style={styles.titulo, {marginBottom: '20px'}}></Text>
            <View style={styles.item}>
                <View style={{ width: "25%", alignItems: "flex-start", justifyContent: "center" }}>
                    <Text style={styles.detalle}>Nombre</Text>
                </View>

                <View style={{ width: "25%", alignItems: "flex-start", justifyContent: "center" }}>
                    <Text style={styles.detalle}>Especie</Text>
                </View>

                <View style={{ width: "25%", alignItems: "flex-start", justifyContent: "center" }}>
                    <Text style={styles.detalle}>Raza</Text>
                </View>

                <View style={{ width: "25%", alignItems: "flex-end" }}>
                    <Text style={styles.detalle}>Acciones</Text>
                </View>
            </View>
            <FlatList
                data={mascotas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <View style={{ width: "25%", alignItems: "flex-start", justifyContent: "center" }}>
                            <Text style={styles.detalle}>{item.nombre}</Text>
                        </View>
                        <View style={{ width: "25%", alignItems: "flex-start", justifyContent: "center" }}>
                            <Text style={styles.detalle}>{item.especie}</Text>
                        </View>
                        <View style={{ width: "25%", alignItems: "flex-start", justifyContent: "center" }}>
                            <Text style={styles.detalle}>{item.raza}</Text>
                        </View>

                        <View style={{ width: "25%", alignItems: "flex-end" }}>
                        <TouchableOpacity
                                style={styles.button}
                                //onPress={() => historialMascota(item)}
                            >
                                <Icon name='book' color="#FFFFFF" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => editMascota(item)}
                            >
                                <Icon name='edit' color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            <TouchableOpacity
                style={styles.buttonFloat}
                onPress={() => addMascota()}
            >
                <Icon name='add' color="#FFFFFF" />
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#b2dfdb",
        width: "100%"

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
        width: 50,
        height: 50,
        padding: 15,
        marginBottom: 5,
        borderRadius: 10,
        alignItems: 'center',
        fontSize: 23
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
    buttonFloat:{
        borderRadius: 60,            
        backgroundColor: '#82ada9', 
        position: 'absolute',
        bottom: 10,
        right: 10,  
        alignItems: 'center',
        fontSize: 23,
        padding: 15,                                 
    },
    errorText: {
        color: "#f44336",
        fontWeight: 700,
        fontSize: 21,
        alignSelf: 'center'
    },
    titulo: {
        fontSize: 25,
        alignSelf: "center",
        color: 'white',
        fontWeight: 700,
        marginTop: 20,
        marginBottom: 40
    },
    item: {
        display: "flex",
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-around",
        borderBottomColor: "#82ada9",
        borderBottomWidth: 2,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10

    },
    detalle: {
        fontSize: 18
    }
})


