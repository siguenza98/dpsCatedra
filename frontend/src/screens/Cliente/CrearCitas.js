import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CalendarPicker from 'react-native-calendar-picker';


const CrearCita = ({ navigation, route }) => {
    var usuario = route.params;

    const [fecha, setFecha] = useState();
    const [fechaActual, setFechaActual] = useState(new Date());

    const [hora, setHora] = useState('');
    const [horas, setHoras] = useState();
    const [minuto, setMinuto] = useState();

    const [motivo, setMotivo] = useState('');
    const [tipocita, setTipoCita] = useState(' ');
    const [mascota, setMascota] = useState(' ');
    const [errorText, setErrorText] = useState(' ');

    const [listaMascotas, setListaMascotas] = useState([]);
    const [listaTipoCitas, setListaTipoCitas] = useState([]);

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
                    setListaMascotas(json.map((mascota) =>
                        <Picker.Item label={mascota.nombre} value={mascota.id} />
                    ));
                    setMascota(json[0].id);
                }
            })
            .catch((error) => {
                console.log(error);
                alert("Error al obtener los datos.");
            });
    }

    const getTipoCitas = () => {

        //Conexion a la api
        fetch('http://127.0.0.1:8000/api/vetya-tipocitas', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.length != 0) {
                    setListaTipoCitas(json.map((tipo) =>
                        <Picker.Item label={tipo.detalle} value={tipo.id} />
                    ));
                    setTipoCita(json[0].id);
                }
            })
            .catch((error) => {
                console.log(error);
                alert("Error al obtener los datos.");
            });
    }

    const validarRegistrar = () => {
        var validado = true;
        var mensaje = "";
        if (motivo === "")
            validado = false;
       
        if (validado) {
            setHora(horas+":"+minuto);
            console.log("hora: "+hora + " fecha" + fecha + " mascota" + mascota + " tipocita" + tipocita );
            handleRegistrar();
        } else {
            mensaje += "Uno o más campos están vacios.";
            setErrorText(mensaje);
        }

    }
    const handleRegistrar = () => {

        setErrorText(" ");
        fetch('http://127.0.0.1:8000/api/vetya-citas', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fecha: fecha,
                hora: horas+":"+minuto,
                motivo: motivo,
                tipocita: tipocita,
                mascota: mascota,
                cliente_id: usuario.id
            })
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.resultado === "OK") {
                    alert("Se ha agendado con exito.");
                    navigation.goBack();
                } else {
                    alert("Hubo un error al agendar la cita.");
                }
            })
            .catch((error) => {
                setErrorText(error);
            });
    }

    useEffect(() => {
        getMascotas();
        getTipoCitas();
        setHoras('08');
        setMinuto('00');
        setHora('08:00');
        setFecha(fechaActual.getFullYear()+"-"+fechaActual.getMonth()+"-"+fechaActual.getDate());
    }, []);

    return (

        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainerCalendar}>
                <Text style={styles.labelInput}>Fecha</Text>

                <CalendarPicker
                    selectedDayColor="#82ada9"
                    minDate={fechaActual}
                    onDateChange={date => setFecha(date)}
                    weekdays={['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']}
                    months={['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']}
                    previousTitle="Anterior"
                    nextTitle="Siguiente"
                />

            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Hora</Text>

                <View style={styles.item}>
                    <View style={{ width: "45%", alignItems: "flex-start", justifyContent: "center" }}>
                        <Picker
                            onValueChange={(itemValue, itemIndex) =>
                                setHoras(itemValue)
                            }
                            style={styles.input}
                        >
                            <Picker.Item label="08" value="08" />
                            <Picker.Item label="09" value="09" />
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="11" value="11" />
                            <Picker.Item label="12" value="12" />
                            <Picker.Item label="13" value="13" />
                            <Picker.Item label="14" value="14" />
                            <Picker.Item label="15" value="15" />
                            <Picker.Item label="16" value="16" />
                        </Picker>
                    </View>

                    <View style={{ width: "45%", alignItems: "flex-start", justifyContent: "center" }}>
                        <Picker
                            onValueChange={(itemValue, itemIndex) =>
                                setMinuto(itemValue)
                            }
                            style={styles.input}
                        >
                            <Picker.Item label="00" value="00" />
                            <Picker.Item label="15" value="15" />
                            <Picker.Item label="30" value="30" />
                            <Picker.Item label="45" value="45" />
                            
                        </Picker>
                    </View>

                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Motivo de la Cita</Text>
                <TextInput
                    onChangeText={text => setMotivo(text)}
                    style={styles.input}
                    multiline={true}
                    numberOfLines={3}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Tipo de Cita</Text>
                <Picker
                    onValueChange={(itemValue, itemIndex) =>
                        setTipoCita(itemValue)
                    }
                    style={styles.input}
                >
                    {listaTipoCitas}
                </Picker>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Mascota</Text>
                <Picker
                    onValueChange={(itemValue, itemIndex) =>
                        setMascota(itemValue)
                    }
                    style={styles.input}
                >
                    {listaMascotas}
                </Picker>
            </View>

            <Text style={styles.errorText}>{errorText}</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={validarRegistrar}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Registrar Cita</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.buttonOutline]}
                    onPress={() => navigation.navigate('Inicio')}
                >
                    <Text style={styles.buttonOutlineText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    )
}

export default CrearCita

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#b2dfdb",
        height: "100%",
        overflow: "scroll",
        maxWidth: "100%"

    },
    inputContainer: {
        width: '80%',
    },
    inputContainerCalendar: {
        flex: 1,
        width: '70%',
        minHeight: "550px",
        paddingTop: "150px",
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
        borderWidth: 2,
        marginBottom: 20
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
    },
    item: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10

    },
})

