import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'

const Create = ({ navigation, route }) => {
    const [errorText, setErrorText] = useState('');
    const [detalle, setDetalle] = useState('');

    const validarCrear = () => {
        var validado = true;
        if (detalle === "") {
            validado = false;
            setErrorText("El nombre del tipo de cita no puede ser vacio.");
        }

        if (validado) {
            handleCreate();
        }
    }

    const handleCreate = () => {
        setErrorText("");
        fetch('http://127.0.0.1:8000/api/vetya-tipocitas/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                detalle: detalle,
            })
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.resultado === "OK") {
                    alert("Se ha agregado con exito.");
                    navigation.push("TipoCitasIndex");
                } else {
                    setErrorText("Hubo un error al agregar.");
                }
            })
            .catch((error) => {
                setErrorText(error);
            });
    }

    return (
        <>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <Text style={styles.titulo}>Agregar Tipo de Cita</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Detalle</Text>
                    <TextInput
                        onChangeText={text => setDetalle(text)}
                        style={styles.input}
                        defaultValue={detalle}
                        editable="true"
                    />
                    <Text style={styles.errorText}>{errorText}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={validarCrear}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Agregar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.buttonOutline]}
                        onPress={() => navigation.navigate('TipoCitasIndex')}
                    >
                        <Text style={styles.buttonOutlineText}>Regresar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#b2dfdb"

    },
    titulo: {
        fontSize: 25,
        alignSelf: "center",
        color: 'white',
        fontWeight: 700,
        marginTop: 20,
        marginBottom: 40
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
        color: "#e53935",
        fontWeight: 700,
        fontSize: 18,
        alignSelf: 'center'
    }
})
