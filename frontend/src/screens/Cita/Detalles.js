import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker';

const Detalles = ({ navigation, route }) => {

    var cita = route.params.cita;
    var usuario = route.params.usuario;

    return (
        <>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Nombre del Cliente</Text>
                    <TextInput
                        value={cita.nombres + " " + cita.apellidos}
                        style={styles.input}
                        editable="false"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Telefono de Contacto</Text>
                    <TextInput
                        value={cita.telefono}
                        style={styles.input}
                        editable="false"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Fecha de la Cita</Text>
                    <TextInput
                        value={cita.fecha + " " + cita.hora}
                        style={styles.input}
                        editable="false"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Motivo de la Cita</Text>
                    <TextInput
                        value={cita.motivo}
                        style={styles.input}
                        editable="false"
                        multiline={true}
                        numberOfLines = "3"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Tipo de Cita</Text>
                    <TextInput
                        value={cita.detalle}
                        style={styles.input}
                        editable="false"
                    />
                </View>

                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />

                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Nombre de la Mascota</Text>
                    <TextInput
                        value={cita.mascotanombre}
                        style={styles.input}
                        editable="false"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Especie</Text>
                    <TextInput
                        value={cita.especie + "/" + cita.raza}
                        style={styles.input}
                        editable="false"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Sexo</Text>
                    <TextInput
                        value={cita.sexo}
                        style={styles.input}
                        editable="false"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Peso (lbs)</Text>
                    <TextInput
                        value={cita.peso}
                        style={styles.input}
                        editable="false"
                    />

                </View>

                <View style={styles.buttonContainer}>
                   
                    <TouchableOpacity
                        style={[styles.button, styles.buttonOutline]}
                        onPress={() =>  navigation.push('VeterinarioNavigation', {
                            screen: 'Citas Agendadas',
                            params: { usuario },
                        })}
                    >
                        <Text style={styles.buttonOutlineText}>Regresar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default Detalles

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
        fontSize: 21,
        borderColor: 'transparent',
        color: "black"
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
