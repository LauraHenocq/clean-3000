import React from 'react'
import { TextInput, Dimensions, StyleSheet, Text, View } from 'react-native'

export const Problem = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Je souhaite signaler un problème que j'ai rencontré au cours d'une de mes interventions.</Text>
            <Text style={styles.text}>Liste déroulante du type de problème rencontré (bris de glace, problème d'outillage, problème de sécurité, altercation avec le client, etc.) </Text>
            <Text style={{fontSize:20, color:"#5cba47"}}>Rédigez votre message en précisant le numéro de votre intervention :</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
    )
}

const vw = Dimensions.get("screen").width;
const vh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin:20,
      justifyContent:"flex-start"
    },
    text:{
        fontSize:20,
        marginBottom:30,
    },
    input:{
        height: 100, 
        borderColor: '#dfdfdf', 
        borderWidth: 2 
    }
})
