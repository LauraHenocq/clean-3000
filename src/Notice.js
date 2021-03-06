import React, {useState} from 'react';
import { Image, TextInput, Text, View, StyleSheet, ScrollView } from 'react-native';
import customers from '../customers';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};

export const Notice = (props) => {

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [writedDate, setWritedDate] = useState("");
    const [inputValue, setInputValue] = useState('Rédigez votre message ici');
    const [customer, setCustomer] = useState("")

    const showDatepicker = () => {
        setShow(true);
      };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setWritedDate(selectedDate.toLocaleDateString("en-US", options));
      };

    return (
        <View style={styles.container}>
            <View style={styles.notice}>
                <Text style={styles.title}>Je souhaite éditer un avis de passage.</Text>
                <ScrollView>
                    <Image style={{width: 200, height:80, alignSelf:"center"}} source={require("../assets/logo-clean3000.png")}/>
                    <Text style={{fontSize:20, fontWeight:"bold", alignSelf:"center", textDecorationLine:"underline", textTransform: "uppercase", paddingBottom:30}}>Avis de passage</Text>
                    <View style={styles.noticeSection}>
                        <Text style={{fontSize:18, paddingTop:10}}>Nom de l'entreprise/client:</Text>

                        <Picker
                            selectedValue={customer}
                            style={{height: 50, width: 200}}
                            onValueChange={(itemValue, itemIndex) =>
                                setCustomer(itemValue)
                            }
                            dropdownIconColor="#3d3d33"
                            mode='dropdown'
                        >
                            <Picker.Item label={customers[0].name} value={customers[0].name} />
                            <Picker.Item label={customers[1].name} value={customers[1].name} />
                            <Picker.Item label={customers[2].name} value={customers[2].name} />
                            <Picker.Item label={customers[3].name} value={customers[3].name} />
                            <Picker.Item label={customers[4].name} value={customers[4].name} />
                        </Picker>

                        <Text style={{fontSize:18, paddingTop:10}}>Notre technicien est intervenu pour l'entretien de la vitretrie le {writedDate}</Text>
                        <Text style={styles.button} onPress={showDatepicker}>Choisir une date</Text>                        
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
                        <Text style={{fontSize:18, fontWeight:"bold", textTransform: "uppercase", paddingTop:10}}>Observations :</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={text => setInputValue(text)}
                            value={inputValue}
                        />
                        <Text style={styles.button} onPress={() => props.navigation.navigate("FinalizedNotice", {writedDate, inputValue, customer})}>Editer l'avis de passage</Text>
                    </View>

                </ScrollView>
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
    button: {
        marginTop:10,
        backgroundColor:"#3d3d33",
        borderRadius:15,
        borderWidth: 2,
        color:"white",
        textAlign:"center",
        width:"50%",
        alignSelf:"center"

    },
    input:{
        height: 100, 
        borderColor: '#dfdfdf', 
        borderWidth: 2 
    }
})
