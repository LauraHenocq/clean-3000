import React, {useState} from 'react';
import { Image, TextInput, Text, View, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import customers from '../customers';
import DateTimePicker from '@react-native-community/datetimepicker';

export const Notice = () => {

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const showDatepicker = () => {
        setShow(true);
      };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
      };

    return (
        <View style={styles.container}>
            <View style={styles.notice}>
                <Text style={styles.title}>Je souhaite éditer un avis de passage.</Text>
                <TouchableOpacity
                    //onPress={() => alert("Imprimer votre avis de passage")}
                >
                    <Image style={{width: 200, height:80, alignSelf:"center"}} source={require("../assets/logo-clean3000.png")}/>
                    <Text style={{fontSize:20, fontWeight:"bold", alignSelf:"center", textDecorationLine:"underline", paddingBottom:30}}>Avis de passage</Text>
                    <View style={styles.noticeSection}>
                        <Text>Client : {customers[0].name}</Text>
                        <Text>Notre technicien est intervenu pour l'entretien de la vitretrie le :</Text>
                        <Button onPress={showDatepicker} title="Choisir une date" />
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode="date"
                                is24Hour={true}
                                display="calendar"
                                onChange={onChange}
                                // maximumDate={new Date(2021, 12, 31)}
                                // minimumDate={new Date(2021, 01, 01)}
                            />
                        )}
                        <Text>Observations :</Text>
                        <TextInput style={styles.input}></TextInput>
                        <Text>Merci de votre confiance.</Text>
                    </View>





                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:"flex-start"
    },
    notice:{
        margin:20
    },
    title:{
        fontSize:20,
        textAlign:"center",
        paddingBottom:50
    },
    noticeSection:{
        padding:20,
        backgroundColor:"#fff",
        borderRadius:15,
        borderWidth: 2,
        borderColor: '#dfdfdf',
        shadowColor: "#3d3d33",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent:"center"
    },
    input:{
        height: 100, 
        borderColor: '#dfdfdf', 
        borderWidth: 2 
    }
})
