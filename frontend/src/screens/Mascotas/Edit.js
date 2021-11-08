import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker';

const Edit = ({ navigation, route }) => {
    const [errorText, setErrorText] = useState('');
    const [nombre, setNombre] = useState('');
    const [raza, setRaza] = useState();
    const [especie, setEspecie] = useState('');
    const [edad, setEdad] = useState('');
    const [sexo, setSexo] = useState('');
    const [color, setColor] = useState('');
    const [peso, setPeso] = useState('');

    const [selectGatos, setSelectGatos] = useState('');
    const [selectPerros, setSelectPerros] = useState('');
    const [selectActual, setSelectActual] = useState('');

    const usuario = route.params.usuario;
    const mascota = route.params.mascota;

    const razasPerros = [
        {
            "id": 1,
            "name": "Affenpinscher"
        },
        {
            "id": 2,
            "name": "Afghan Hound"
        },
        {
            "id": 3,
            "name": "African Hunting Dog"
        },
        {
            "id": 4,
            "name": "Airedale Terrier"
        },
        {
            "id": 5,
            "name": "Akbash Dog"
        },
        {
            "id": 6,
            "name": "Akita"
        },
        {
            "id": 7,
            "name": "Alapaha Blue Blood Bulldog"
        },
        {
            "id": 8,
            "name": "Alaskan Husky"
        },
        {
            "id": 9,
            "name": "Alaskan Malamute"
        },
        {
            "id": 10,
            "name": "American Bulldog"
        },
        {
            "id": 11,
            "name": "American Bully"
        },
        {
            "id": 12,
            "name": "American Eskimo Dog"
        },
        {
            "id": 13,
            "name": "American Eskimo Dog (Miniature)"
        },
        {
            "id": 14,
            "name": "American Foxhound"
        },
        {
            "id": 15,
            "name": "American Pit Bull Terrier"
        },
        {
            "id": 16,
            "name": "American Staffordshire Terrier"
        },
        {
            "id": 17,
            "name": "American Water Spaniel"
        },
        {
            "id": 18,
            "name": "Anatolian Shepherd Dog"
        },
        {
            "id": 19,
            "name": "Appenzeller Sennenhund"
        },
        {
            "id": 21,
            "name": "Australian Cattle Dog"
        },
        {
            "id": 22,
            "name": "Australian Kelpie"
        },
        {
            "id": 23,
            "name": "Australian Shepherd"
        },
        {
            "id": 24,
            "name": "Australian Terrier"
        },
        {
            "id": 25,
            "name": "Azawakh"
        },
        {
            "id": 26,
            "name": "Barbet"
        },
        {
            "id": 28,
            "name": "Basenji"
        },
        {
            "id": 29,
            "name": "Basset Bleu de Gascogne"
        },
        {
            "id": 30,
            "name": "Basset Hound"
        },
        {
            "id": 31,
            "name": "Beagle"
        },
        {
            "id": 32,
            "name": "Bearded Collie"
        },
        {
            "id": 33,
            "name": "Beauceron"
        },
        {
            "id": 34,
            "name": "Bedlington Terrier"
        },
        {
            "id": 36,
            "name": "Belgian Malinois"
        },
        {
            "id": 38,
            "name": "Belgian Tervuren"
        },
        {
            "id": 41,
            "name": "Bernese Mountain Dog"
        },
        {
            "id": 42,
            "name": "Bichon Frise"
        },
        {
            "id": 43,
            "name": "Black and Tan Coonhound"
        },
        {
            "id": 45,
            "name": "Bloodhound"
        },
        {
            "id": 47,
            "name": "Bluetick Coonhound"
        },
        {
            "id": 48,
            "name": "Boerboel"
        },
        {
            "id": 50,
            "name": "Border Collie"
        },
        {
            "id": 51,
            "name": "Border Terrier"
        },
        {
            "id": 53,
            "name": "Boston Terrier"
        },
        {
            "id": 54,
            "name": "Bouvier des Flandres"
        },
        {
            "id": 55,
            "name": "Boxer"
        },
        {
            "id": 56,
            "name": "Boykin Spaniel"
        },
        {
            "id": 57,
            "name": "Bracco Italiano"
        },
        {
            "id": 58,
            "name": "Briard"
        },
        {
            "id": 59,
            "name": "Brittany"
        },
        {
            "id": 61,
            "name": "Bull Terrier"
        },
        {
            "id": 62,
            "name": "Bull Terrier (Miniature)"
        },
        {
            "id": 64,
            "name": "Bullmastiff"
        },
        {
            "id": 65,
            "name": "Cairn Terrier"
        },
        {
            "id": 67,
            "name": "Cane Corso"
        },
        {
            "id": 68,
            "name": "Cardigan Welsh Corgi"
        },
        {
            "id": 69,
            "name": "Catahoula Leopard Dog"
        },
        {
            "id": 70,
            "name": "Caucasian Shepherd (Ovcharka)"
        },
        {
            "id": 71,
            "name": "Cavalier King Charles Spaniel"
        },
        {
            "id": 76,
            "name": "Chesapeake Bay Retriever"
        },
        {
            "id": 78,
            "name": "Chinese Crested"
        },
        {
            "id": 79,
            "name": "Chinese Shar-Pei"
        },
        {
            "id": 80,
            "name": "Chinook"
        },
        {
            "id": 81,
            "name": "Chow Chow"
        },
        {
            "id": 84,
            "name": "Clumber Spaniel"
        },
        {
            "id": 86,
            "name": "Cocker Spaniel"
        },
        {
            "id": 87,
            "name": "Cocker Spaniel (American)"
        },
        {
            "id": 89,
            "name": "Coton de Tulear"
        },
        {
            "id": 92,
            "name": "Dalmatian"
        },
        {
            "id": 94,
            "name": "Doberman Pinscher"
        },
        {
            "id": 95,
            "name": "Dogo Argentino"
        },
        {
            "id": 98,
            "name": "Dutch Shepherd"
        },
        {
            "id": 101,
            "name": "English Setter"
        },
        {
            "id": 102,
            "name": "English Shepherd"
        },
        {
            "id": 103,
            "name": "English Springer Spaniel"
        },
        {
            "id": 104,
            "name": "English Toy Spaniel"
        },
        {
            "id": 105,
            "name": "English Toy Terrier"
        },
        {
            "id": 107,
            "name": "Eurasier"
        },
        {
            "id": 108,
            "name": "Field Spaniel"
        },
        {
            "id": 110,
            "name": "Finnish Lapphund"
        },
        {
            "id": 111,
            "name": "Finnish Spitz"
        },
        {
            "id": 113,
            "name": "French Bulldog"
        },
        {
            "id": 114,
            "name": "German Pinscher"
        },
        {
            "id": 115,
            "name": "German Shepherd Dog"
        },
        {
            "id": 116,
            "name": "German Shorthaired Pointer"
        },
        {
            "id": 119,
            "name": "Giant Schnauzer"
        },
        {
            "id": 120,
            "name": "Glen of Imaal Terrier"
        },
        {
            "id": 121,
            "name": "Golden Retriever"
        },
        {
            "id": 123,
            "name": "Gordon Setter"
        },
        {
            "id": 124,
            "name": "Great Dane"
        },
        {
            "id": 125,
            "name": "Great Pyrenees"
        },
        {
            "id": 127,
            "name": "Greyhound"
        },
        {
            "id": 128,
            "name": "Griffon Bruxellois"
        },
        {
            "id": 129,
            "name": "Harrier"
        },
        {
            "id": 130,
            "name": "Havanese"
        },
        {
            "id": 134,
            "name": "Irish Setter"
        },
        {
            "id": 135,
            "name": "Irish Terrier"
        },
        {
            "id": 137,
            "name": "Irish Wolfhound"
        },
        {
            "id": 138,
            "name": "Italian Greyhound"
        },
        {
            "id": 140,
            "name": "Japanese Chin"
        },
        {
            "id": 141,
            "name": "Japanese Spitz"
        },
        {
            "id": 142,
            "name": "Keeshond"
        },
        {
            "id": 144,
            "name": "Komondor"
        },
        {
            "id": 145,
            "name": "Kooikerhondje"
        },
        {
            "id": 147,
            "name": "Kuvasz"
        },
        {
            "id": 149,
            "name": "Labrador Retriever"
        },
        {
            "id": 151,
            "name": "Lagotto Romagnolo"
        },
        {
            "id": 153,
            "name": "Lancashire Heeler"
        },
        {
            "id": 155,
            "name": "Leonberger"
        },
        {
            "id": 156,
            "name": "Lhasa Apso"
        },
        {
            "id": 161,
            "name": "Maltese"
        },
        {
            "id": 165,
            "name": "Miniature American Shepherd"
        },
        {
            "id": 167,
            "name": "Miniature Pinscher"
        },
        {
            "id": 168,
            "name": "Miniature Schnauzer"
        },
        {
            "id": 171,
            "name": "Newfoundland"
        },
        {
            "id": 172,
            "name": "Norfolk Terrier"
        },
        {
            "id": 176,
            "name": "Norwich Terrier"
        },
        {
            "id": 177,
            "name": "Nova Scotia Duck Tolling Retriever"
        },
        {
            "id": 178,
            "name": "Old English Sheepdog"
        },
        {
            "id": 179,
            "name": "Olde English Bulldogge"
        },
        {
            "id": 181,
            "name": "Papillon"
        },
        {
            "id": 183,
            "name": "Pekingese"
        },
        {
            "id": 184,
            "name": "Pembroke Welsh Corgi"
        },
        {
            "id": 185,
            "name": "Perro de Presa Canario"
        },
        {
            "id": 188,
            "name": "Pharaoh Hound"
        },
        {
            "id": 189,
            "name": "Plott"
        },
        {
            "id": 193,
            "name": "Pomeranian"
        },
        {
            "id": 196,
            "name": "Poodle (Miniature)"
        },
        {
            "id": 197,
            "name": "Poodle (Toy)"
        },
        {
            "id": 201,
            "name": "Pug"
        },
        {
            "id": 204,
            "name": "Puli"
        },
        {
            "id": 205,
            "name": "Pumi"
        },
        {
            "id": 207,
            "name": "Rat Terrier"
        },
        {
            "id": 208,
            "name": "Redbone Coonhound"
        },
        {
            "id": 209,
            "name": "Rhodesian Ridgeback"
        },
        {
            "id": 210,
            "name": "Rottweiler"
        },
        {
            "id": 211,
            "name": "Russian Toy"
        },
        {
            "id": 212,
            "name": "Saint Bernard"
        },
        {
            "id": 213,
            "name": "Saluki"
        },
        {
            "id": 214,
            "name": "Samoyed"
        },
        {
            "id": 216,
            "name": "Schipperke"
        },
        {
            "id": 218,
            "name": "Scottish Deerhound"
        },
        {
            "id": 219,
            "name": "Scottish Terrier"
        },
        {
            "id": 221,
            "name": "Shetland Sheepdog"
        },
        {
            "id": 222,
            "name": "Shiba Inu"
        },
        {
            "id": 223,
            "name": "Shih Tzu"
        },
        {
            "id": 225,
            "name": "Shiloh Shepherd"
        },
        {
            "id": 226,
            "name": "Siberian Husky"
        },
        {
            "id": 228,
            "name": "Silky Terrier"
        },
        {
            "id": 232,
            "name": "Smooth Fox Terrier"
        },
        {
            "id": 233,
            "name": "Soft Coated Wheaten Terrier"
        },
        {
            "id": 235,
            "name": "Spanish Water Dog"
        },
        {
            "id": 236,
            "name": "Spinone Italiano"
        },
        {
            "id": 238,
            "name": "Staffordshire Bull Terrier"
        },
        {
            "id": 239,
            "name": "Standard Schnauzer"
        },
        {
            "id": 242,
            "name": "Swedish Vallhund"
        },
        {
            "id": 243,
            "name": "Thai Ridgeback"
        },
        {
            "id": 244,
            "name": "Tibetan Mastiff"
        },
        {
            "id": 245,
            "name": "Tibetan Spaniel"
        },
        {
            "id": 246,
            "name": "Tibetan Terrier"
        },
        {
            "id": 248,
            "name": "Toy Fox Terrier"
        },
        {
            "id": 250,
            "name": "Treeing Walker Coonhound"
        },
        {
            "id": 251,
            "name": "Vizsla"
        },
        {
            "id": 253,
            "name": "Weimaraner"
        },
        {
            "id": 254,
            "name": "Welsh Springer Spaniel"
        },
        {
            "id": 256,
            "name": "West Highland White Terrier"
        },
        {
            "id": 257,
            "name": "Whippet"
        },
        {
            "id": 258,
            "name": "White Shepherd"
        },
        {
            "id": 259,
            "name": "Wire Fox Terrier"
        },
        {
            "id": 260,
            "name": "Wirehaired Pointing Griffon"
        },
        {
            "id": 261,
            "name": "Wirehaired Vizsla"
        },
        {
            "id": 262,
            "name": "Xoloitzcuintli"
        },
        {
            "id": 264,
            "name": "Yorkshire Terrier"
        }
    ];

    const razasGatos = [

        { "id": 0, "name": "Abyssinian" },
        { "id": 1, "name": "Aegean" },
        { "id": 2, "name": "American Curl" },
        { "id": 3, "name": "American Bobtail" },
        { "id": 4, "name": "American Shorthair" },
        { "id": 5, "name": "American Wirehair" },
        { "id": 6, "name": "Arabian Mau" },
        { "id": 7, "name": "Australian Mist" },
        { "id": 8, "name": "Asian" },
        { "id": 9, "name": "Asian Semi-longhair" },
        { "id": 10, "name": "Balinese" },
        { "id": 11, "name": "Bambino" },
        { "id": 12, "name": "Bengal" },
        { "id": 13, "name": "Birman" },
        { "id": 14, "name": "Bombay" },
        { "id": 15, "name": "Brazilian Shorthair" },
        { "id": 16, "name": "British Semi-longhair" },
        { "id": 17, "name": "British Shorthair" },
        { "id": 18, "name": "British Longhair" },
        { "id": 19, "name": "Burmese" },
        { "id": 20, "name": "Burmilla" },
        { "id": 21, "name": "California Spangled" },
        { "id": 22, "name": "Chantilly-Tiffany" },
        { "id": 23, "name": "Chartreux" },
        { "id": 24, "name": "Chausie" },
        { "id": 25, "name": "Cheetoh" },
        { "id": 26, "name": "Colorpoint Shorthair" },
        { "id": 27, "name": "Cornish Rex" },
        { "id": 28, "name": "Cymric" },
        { "id": 29, "name": "Cyprus" },
        { "id": 30, "name": "Devon Rex" },
        { "id": 31, "name": "Donskoy" },
        { "id": 32, "name": "Dragon Li" },
        { "id": 33, "name": "Dwarf cat" },
        { "id": 34, "name": "Egyptian Mau" },
        { "id": 35, "name": "European Shorthair" },
        { "id": 36, "name": "Exotic Shorthair" },
        { "id": 37, "name": "Foldex" },
        { "id": 38, "name": "German Rex" },
        { "id": 39, "name": "Havana Brown" },
        { "id": 40, "name": "Highlander" },
        { "id": 41, "name": "Himalayan" },
        { "id": 42, "name": "Japanese Bobtail" },
        { "id": 43, "name": "Javanese" },
        { "id": 44, "name": "Karelian Bobtail" },
        { "id": 45, "name": "Khao Manee" },
        { "id": 46, "name": "Korat" },
        { "id": 47, "name": "Korean Bobtail" },
        { "id": 48, "name": "Korn Ja" },
        { "id": 49, "name": "Kurilian Bobtail" },
        { "id": 50, "name": "LaPerm" },
        { "id": 51, "name": "Lykoi" },
        { "id": 52, "name": "Maine Coon" },
        { "id": 53, "name": "Manx" },
        { "id": 54, "name": "Mekong Bobtail" },
        { "id": 55, "name": "Minskin" },
        { "id": 56, "name": "Munchkin" },
        { "id": 57, "name": "Nebelung" },
        { "id": 58, "name": "Napoleon" },
        { "id": 59, "name": "Norwegian Forest cat" },
        { "id": 60, "name": "Ocicat" },
        { "id": 61, "name": "Ojos Azules" },
        { "id": 62, "name": "Oregon Rex" },
        { "id": 63, "name": "Oriental Bicolor" },
        { "id": 64, "name": "Oriental Shorthair" },
        { "id": 65, "name": "Oriental Longhair" },
        { "id": 66, "name": "PerFold" },
        { "id": 67, "name": "Persian (Modern Persian Cat)" },
        { "id": 68, "name": "Persian (Traditional Persian Cat)" },
        { "id": 69, "name": "Peterbald" },
        { "id": 70, "name": "Pixie-bob" },
        { "id": 71, "name": "Raas" },
        { "id": 72, "name": "Ragamuffin" },
        { "id": 73, "name": "Ragdoll" },
        { "id": 74, "name": "Russian Blue" },
        { "id": 75, "name": "Russian White, Black and Tabby" },
        { "id": 76, "name": "Sam Sawet" },
        { "id": 77, "name": "Savannah" },
        { "id": 78, "name": "Scottish Fold" },
        { "id": 79, "name": "Selkirk Rex" },
        { "id": 80, "name": "Serengeti" },
        { "id": 81, "name": "Serrade petit" },
        { "id": 82, "name": "Siamese" },
        { "id": 83, "name": "Siberian" },
        { "id": 84, "name": "Singapura" },
        { "id": 85, "name": "Snowshoe" },
        { "id": 86, "name": "Sokoke" },
        { "id": 87, "name": "Somali" },
        { "id": 88, "name": "Sphynx" },
        { "id": 89, "name": "Suphalak" },
        { "id": 90, "name": "Thai" },
        { "id": 91, "name": "Thai Lilac" },
        { "id": 92, "name": "Tonkinese" },
        { "id": 93, "name": "Toyger" },
        { "id": 94, "name": "Turkish Angora" },
        { "id": 95, "name": "Turkish Van" },
        { "id": 96, "name": "Ukrainian Levkoy" }
    ];

    const validarEditar = () => {
        var validado = true;
        var mensaje = "";
        setErrorText("");

        if (nombre === "") {
            validado = false;
            mensaje += "El nombre de la mascota no puede ser vacio. \n";
        }
        if (raza === "") {
            validado = false;
            mensaje += "La raza no puede ser vacia. \n";
        }
        if (especie === "") {
            validado = false;
            mensaje += "La raza no puede ser vacia. \n";
        }
        if (isNaN(Number(edad)) || !Number.isInteger(Number(edad)) || (Number(edad) <= 0)) {
            validado = false;
            mensaje += "La edad debe ser un número entero mayor a cero. \n";
        }
        if (sexo === "") {
            validado = false;
            mensaje += "El sexo no puede ser vacio. \n";
        }
        if (color === "") {
            validado = false;
            mensaje += "El color no puede ser vacio. \n";
        }
        if (isNaN(Number(peso)) || !Number.isInteger(Number(peso)) || (Number(peso) <= 0)) {
            validado = false;
            mensaje += "El peso debe ser un número mayor a cero. \n";
        }

        if (validado) {
            handleEdit();
        } else {
            setErrorText(mensaje);
        }
    }

    const handleEdit = () => {
        setErrorText("");
        fetch('http://127.0.0.1:8000/api/vetya-mascotas/' + mascota.id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre,
                raza: raza,
                especie: especie,
                edad: edad,
                sexo: sexo,
                color: color,
                peso: peso,
                usuario_id: usuario.id
            })
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.resultado === "OK") {
                    alert("Se ha editado con exito.");
                    navigation.push("MascotasIndex");
                } else {
                    setErrorText("Hubo un error al editar.");
                }
            })
            .catch((error) => {
                setErrorText(error);
            });
    }

    const renderSelect = (itemValue) => {
        setEspecie(itemValue);

        if (itemValue == "Gato") {
            setSelectActual(selectGatos);
        }
        else { //raza == perro
            setSelectActual(selectPerros);
        }
    }

    useEffect(() => {
        renderSelect(especie);
    }, [especie]);

    useEffect(() => {
        setSelectGatos(razasGatos.map((raza) =>
            <Picker.Item label={raza.name} value={raza.name} />
        ));

        setSelectPerros(razasPerros.map((raza) =>
            <Picker.Item label={raza.name} value={raza.name} />
        ));

        console.log(mascota);
        setNombre(mascota.nombre);
        setRaza(mascota.raza);
        setEspecie(mascota.especie);
        setEdad(mascota.edad);
        setSexo(mascota.sexo);
        setColor(mascota.color);
        setPeso(mascota.peso);
    }, []);


    return (
        <>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Nombre</Text>
                    <TextInput
                        onChangeText={text => setNombre(text)}
                        style={styles.input}
                        defaultValue={nombre}
                        editable="true"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Especie</Text>
                    <Picker
                        onValueChange={(itemValue) =>
                            renderSelect(itemValue)
                        }
                        style={styles.input}
                        selectedValue={especie}
                    >

                        <Picker.Item label="Perro" value="Perro" />
                        <Picker.Item label="Gato" value="Gato" />
                    </Picker>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput} >Raza</Text>
                    <Picker
                        onValueChange={(itemValue) =>
                            setRaza(itemValue)
                        }
                        style={styles.input}
                        selectedValue={raza}
                    >
                        {selectActual}
                    </Picker>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Edad (años)</Text>
                    <TextInput
                        onChangeText={text => setEdad(text)}
                        style={styles.input}
                        editable="true"
                        defaultValue={edad}

                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Sexo</Text>
                    <Picker
                        onValueChange={(itemValue) =>
                            setSexo(itemValue)
                        }
                        style={styles.input}
                        selectedValue={sexo}
                    >

                        <Picker.Item label="Macho" value="Macho" />
                        <Picker.Item label="Hembra" value="Hembra" />
                    </Picker>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Color</Text>
                    <TextInput
                        onChangeText={text => setColor(text)}
                        style={styles.input}
                        editable="true"
                        defaultValue={color}

                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.labelInput}>Peso (lbs)</Text>
                    <TextInput
                        onChangeText={text => setPeso(text)}
                        style={styles.input}
                        editable="true"
                        defaultValue={peso}

                    />

                    <Text style={styles.errorText}>{errorText}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={validarEditar}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Editar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.buttonOutline]}
                        onPress={() => navigation.navigate('MascotasIndex')}
                    >
                        <Text style={styles.buttonOutlineText}>Regresar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default Edit

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
