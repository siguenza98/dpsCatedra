import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

const Index = ({ route, navigation }) => {
    const [citas, setCitas] = useState([]);
    const [citasPasadas, setCitasPasadas] = useState([]);

    var usuario = route.params;

    const getCitas = () => {
        setCitas('');
        //Conexion a la api
        fetch('http://127.0.0.1:8000/api/miscitas', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cliente_id: usuario.id,
            })
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.length != 0) {
                    setCitas(json);
                    console.log(citas);
                }
            })
            .catch((error) => {
                alert("Error al obtener los datos.");
            });
    }

    const getCitasPasadas = () => {
        setCitasPasadas('');

        //Conexion a la api
        fetch('http://127.0.0.1:8000/api/citaspasadas', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cliente_id: usuario.id,
            })
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.length != 0) {
                    setCitasPasadas(json);
                    console.log(citas);
                }
            })
            .catch((error) => {
                alert("Error al obtener los datos.");
            });
    }

    const detallesCita = (cita) => {
        navigation.push('CitasDetalles', { usuario, cita });
    }

    const addCita = () => {
        navigation.push('CitasCreate');
    }

    useEffect(() => {
        getCitas();
        getCitasPasadas();
    }, []);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">

            <Text style={styles.titulo}>Citas Pendientes</Text>
            <View style={styles.item}>
                <View style={{ width: "35%", alignItems: "flex-start", justifyContent: "center" }}>
                    <Text style={styles.detalle}>Fecha/Hora</Text>
                </View>

                <View style={{ width: "25%", alignItems: "flex-start", justifyContent: "center" }}>
                    <Text style={styles.detalle}>Tipo</Text>
                </View>

                <View style={{ width: "20%", alignItems: "flex-start", justifyContent: "center" }}>
                    <Text style={styles.detalle}>Mascota</Text>
                </View>

                <View style={{ width: "20%", alignItems: "flex-end" }}>
                    <Text style={styles.detalle}>Acciones</Text>
                </View>
            </View>

            <FlatList
                data={citas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <View style={{ width: "35%", alignItems: "flex-start", justifyContent: "center" }}>
                            <Text style={styles.detalle}>{item.fecha}{"\n"}{item.hora}</Text>
                        </View>
                        <View style={{ width: "25%", alignItems: "flex-start", justifyContent: "center" }}>
                            <Text style={styles.detalle}>{item.detalle}</Text>
                        </View>
                        <View style={{ width: "20%", alignItems: "flex-start", justifyContent: "center" }}>
                            <Text style={styles.detalle}>{item.nombre}</Text>
                        </View>

                        <View style={{ width: "20%", alignItems: "flex-end" }}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => detallesCitas(item)}
                            >
                                <Icon name='list' color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            <Text style={styles.titulo}>Citas Finalizadas</Text>
            <View style={styles.item}>
                <View style={{ width: "35%", alignItems: "flex-start", justifyContent: "center" }}>
                    <Text style={styles.detalle}>Fecha/Hora</Text>
                </View>

                <View style={{ width: "25%", alignItems: "flex-start", justifyContent: "center" }}>
                    <Text style={styles.detalle}>Tipo</Text>
                </View>

                <View style={{ width: "20%", alignItems: "flex-start", justifyContent: "center" }}>
                    <Text style={styles.detalle}>Mascota</Text>
                </View>

                <View style={{ width: "20%", alignItems: "flex-end" }}>
                    <Text style={styles.detalle}>Acciones</Text>
                </View>
            </View>

            <FlatList
                data={citasPasadas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <View style={{ width: "35%", alignItems: "flex-start", justifyContent: "center" }}>
                            <Text style={styles.detalle}>{item.fecha}{"\n"}{item.hora}</Text>
                        </View>
                        <View style={{ width: "25%", alignItems: "flex-start", justifyContent: "center" }}>
                            <Text style={styles.detalle}>{item.detalle}</Text>
                        </View>
                        <View style={{ width: "20%", alignItems: "flex-start", justifyContent: "center" }}>
                            <Text style={styles.detalle}>{item.nombre}</Text>
                        </View>

                        <View style={{ width: "20%", alignItems: "flex-end" }}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => detallesCitas(item)}
                            >
                                <Icon name='list' color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
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
    buttonFloat: {
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


