import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native'

export const FinalizedNotice = (props) => {


    const [writedDate, setWritedDate] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [customer, setCustomer] = useState("");

    useEffect(() => {
        //props.route.params permet d'accéder à n'importe quel élément véhiculé via la méthode navigate dans Home.js
        // setItem permet de mettre à jour la propriété item du state local
        // le tableau vide à la fin est nécessaire pour que ça ne s'éxécute pas en boucle
        setWritedDate(props.route.params.writedDate),
        setInputValue(props.route.params.inputValue),
        setCustomer(props.route.params.customer)
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.notice}>
                <Image style={{width: 200, height:80, alignSelf:"center"}} source={require("../assets/logo-clean3000.png")}/>
                <Text style={{fontSize:20, fontWeight:"bold", alignSelf:"center", textDecorationLine:"underline", textTransform: "uppercase", paddingBottom:30}}>Avis de passage</Text>
                <View style={styles.noticeSection}>
                    <Text style={styles.text}>Nom de l'entreprise/client: {customer}</Text>
                    <Text style={styles.text}>Notre technicien est intervenu pour l'entretien de la vitretrie le {writedDate}</Text>
                    <Text style={{fontSize:18, fontWeight:"bold", textTransform: "uppercase", paddingTop:10}}>Observations :</Text>
                    <Text style={styles.text}>{inputValue}</Text>
                    <Text style={styles.text}>Merci de votre confiance.</Text>
                    <Text style={{fontSize:18, paddingTop:20, paddingBottom:30}}>Signature du technicien :</Text>
                    <Text style={{fontSize:18, paddingBottom:50}}>Signature du client/Cachet de l'entreprise :</Text>
                    </View>
            </ScrollView>
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
    text:{
        fontSize:18,
        paddingTop:10
    }
})
